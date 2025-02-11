import { OpenPanel, type PostEventPayload } from "@openpanel/sdk";
import { env } from "../env";
import type { EventProps } from "./events";

let op: OpenPanel | null = null;

function initializeOpenPanel() {
  if (!env.OPENPANEL_CLIENT_ID || !env.OPENPANEL_CLIENT_SECRET) {
    return null;
  }

  const client = new OpenPanel({
    clientId: env.OPENPANEL_CLIENT_ID,
    clientSecret: env.OPENPANEL_CLIENT_SECRET,
  });

  client.setGlobalProperties({
    env: process.env.VERCEL_ENV || process.env.NODE_ENV || "localhost",
  });

  return client;
}

export type IdentifyProps = {
  userId?: string;
  fullName?: string | null;
  email?: string;
  workspaceId?: string;
  plan?: string;
  // headers from the request
  location?: string;
  userAgent?: string;
};

export async function setupAnalytics(props: IdentifyProps) {
  if (process.env.NODE_ENV !== "production") {
    return noop();
  }

  // Initialize OpenPanel if not already initialized
  if (!op) {
    op = initializeOpenPanel();
    if (!op) {
      console.warn("OpenPanel credentials not found, analytics will be disabled");
      return noop();
    }
  }

  if (props.location) {
    op.api.addHeader("x-client-ip", props.location);
  }

  if (props.userAgent) {
    op.api.addHeader("user-agent", props.userAgent);
  }

  if (props.userId) {
    const [firstName, lastName] = props.fullName?.split(" ") || [];
    await op.identify({
      profileId: props.userId,
      email: props.email,
      firstName: firstName,
      lastName: lastName,
      properties: {
        workspaceId: props.workspaceId,
        plan: props.plan,
      },
    });
  }

  return {
    track: (opts: EventProps & PostEventPayload["properties"]) => {
      const { name, ...rest } = opts;
      if (!op) {
        console.warn("OpenPanel not initialized, analytics event not tracked");
        return Promise.resolve(null);
      }
      return op.track(name, rest);
    },
  };
}

/**
 * Noop analytics for development environment
 */
async function noop() {
  return {
    track: (
      opts: EventProps & PostEventPayload["properties"],
    ): Promise<unknown> => {
      return new Promise((resolve) => {
        console.log(`>>> Track Noop Event: ${opts.name}`);
        resolve(null);
      });
    },
  };
}
