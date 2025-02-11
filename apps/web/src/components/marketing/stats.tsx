import { Shell } from "@/components/dashboard/shell";
import { env } from "@/env";
import { numberFormatter } from "@/lib/utils";
import { OSTinybird } from "@openstatus/tinybird";

const _tb = new OSTinybird(env.TINY_BIRD_API_KEY);

export async function Stats() {
  return (
    <Shell>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-16">
        <div className="text-center">
          <h3 className="font-cal text-3xl">35</h3>
          <p className="font-light text-muted-foreground">
            Global Monitoring Regions
          </p>
        </div>
        <div className="text-center">
          <h3 className="font-cal text-3xl">99.9%</h3>
          <p className="font-light text-muted-foreground">
            Service Reliability
          </p>
        </div>
        <div className="text-center">
          <h3 className="font-cal text-3xl">30s</h3>
          <p className="font-light text-muted-foreground">
            Monitoring Frequency
          </p>
        </div>
      </div>
    </Shell>
  );
}
