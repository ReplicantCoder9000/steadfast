import { ArrowUpRight } from "lucide-react";

export function Partners() {
  return (
    <div className="grid gap-4">
      <h3 className="text-center font-cal text-muted-foreground text-sm">
        Enterprise Integrations
      </h3>
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-16">
        <div className="flex items-center justify-center">
          <div className="group inline-flex items-center justify-center">
            <span className="font-cal text-2xl">Slack</span>
            <ArrowUpRight className="ml-1 h-4 w-4 flex-shrink-0 text-muted-foreground group-hover:text-foreground" />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="group inline-flex items-center justify-center">
            <span className="font-cal text-2xl">PagerDuty</span>
            <ArrowUpRight className="ml-1 h-4 w-4 flex-shrink-0 text-muted-foreground group-hover:text-foreground" />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="group inline-flex items-center justify-center">
            <span className="font-cal text-2xl">Microsoft</span>
            <ArrowUpRight className="ml-1 h-4 w-4 flex-shrink-0 text-muted-foreground group-hover:text-foreground" />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="group inline-flex items-center justify-center">
            <span className="font-cal text-2xl">OpsGenie</span>
            <ArrowUpRight className="ml-1 h-4 w-4 flex-shrink-0 text-muted-foreground group-hover:text-foreground" />
          </div>
        </div>
      </div>
    </div>
  );
}
