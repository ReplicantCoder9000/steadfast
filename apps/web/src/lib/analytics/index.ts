// No-op implementation for analytics in development mode
export const Events = {
  CreateUser: {
    name: "user_created",
    channel: "registration",
  },
  SignInUser: {
    name: "user_signed_in",
    channel: "login",
  },
  SignOutUser: {
    name: "user_signed_out",
    channel: "login",
  },
  SubscribePage: {
    name: "page_subscribed",
    channel: "page",
  }
};

export type IdentifyProps = {
  userId?: string;
  fullName?: string | null;
  email?: string;
  workspaceId?: string;
  plan?: string;
  location?: string;
  userAgent?: string;
};

export async function setupAnalytics(props: IdentifyProps) {
  console.log(`[Analytics Debug] Setup analytics for user:`, props);
  return {
    track: (opts: { name: string; [key: string]: any }) => {
      console.log(`[Analytics Debug] Track event: ${opts.name}`, opts);
      return Promise.resolve(null);
    },
  };
}
