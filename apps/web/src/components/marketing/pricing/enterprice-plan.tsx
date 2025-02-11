import { Button } from "@openstatus/ui/src/components/button";
import { Check } from "lucide-react";

export function EnterpricePlan() {
  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex-1">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 font-cal text-2xl">Enterprise</p>
            <p className="text-muted-foreground">
              Custom solutions for large organizations with advanced security and compliance needs.
            </p>
          </div>
        </div>
      </div>
      <div className="grid gap-3">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-foreground" />
            <span>SAML 2.0 Single Sign-On</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-foreground" />
            <span>Custom SLA & Support</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-foreground" />
            <span>Dedicated Account Manager</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-foreground" />
            <span>Custom Integrations</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-foreground" />
            <span>Advanced Security Features</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-foreground" />
            <span>Unlimited Everything</span>
          </div>
        </div>
      </div>
      <div>
        <Button className="rounded-full" asChild>
          <a href="mailto:enterprise@steadfast.dev">
            Contact Enterprise Sales
          </a>
        </Button>
      </div>
    </div>
  );
}
