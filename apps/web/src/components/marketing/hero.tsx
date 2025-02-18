import { ChevronRight } from "lucide-react";
import Link from "next/link";

import { Badge } from "@openstatus/ui/src/components/badge";
import { Button } from "@openstatus/ui/src/components/button";

import { cn } from "@/lib/utils";
import { SpeedCheckerButton } from "./speed-checker-button";

export function Hero() {
  return (
    <div className="my-10 flex w-full flex-col justify-center gap-1 px-3 py-4 text-center md:my-20 md:p-6">
      <div>
        <Badge variant="outline" className="backdrop-blur-[2px]">
          <span className="flex items-center">
            Enterprise-Grade Monitoring
            <ChevronRight className="ml-1 h-3 w-3" />
          </span>
        </Badge>
      </div>
      <div className="flex flex-col gap-6">
        <h1
          className={cn(
            "font-cal text-4xl text-foreground md:text-6xl",
            "bg-gradient-to-tl from-0% from-[hsl(var(--muted))] to-40% to-[hsl(var(--foreground))] bg-clip-text text-transparent",
          )}
        >
          Monitor your services with confidence.
        </h1>
        <p className="mx-auto max-w-md text-lg text-muted-foreground md:max-w-xl md:text-xl">
          Global monitoring from 35 regions, advanced status pages, and comprehensive team collaboration. 
          Built for businesses that need reliable, scalable monitoring solutions.
        </p>
      </div>
      <div className="my-4 grid gap-2 sm:grid-cols-2">
        <div className="text-center sm:block sm:text-right">
          <Button className="w-48 rounded-full sm:w-auto" asChild>
            <Link href="/app/login">Start Free Trial</Link>
          </Button>
        </div>
        <div className="text-center sm:block sm:text-left">
          <Button
            variant="outline"
            className="w-48 rounded-full sm:w-auto"
            asChild
          >
            <Link href="/pricing">View Pricing</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
