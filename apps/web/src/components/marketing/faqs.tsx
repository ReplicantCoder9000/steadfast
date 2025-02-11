"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@openstatus/ui/src/components/accordion";

import {
  CardContainer,
  CardDescription,
  CardHeader,
  CardIcon,
  CardTitle,
} from "./card";

const faqs = [
  {
    title: "What makes Steadfast different from other monitoring solutions?",
    content: "Steadfast is built specifically for enterprise teams, offering advanced features like multi-region monitoring from 35 global locations, comprehensive team collaboration tools, and enterprise-grade security. Our platform integrates seamlessly with your existing tools and workflows.",
    order: 1
  },
  {
    title: "How does team-based monitoring work?",
    content: "Every user must be part of a team to use Steadfast. Teams can have unlimited members with different roles (Owner, Admin, Member, Viewer). All monitoring, alerts, and status pages are managed at the team level, making it easy to collaborate and maintain oversight.",
    order: 2
  },
  {
    title: "What authentication methods do you support?",
    content: "We support email, GitHub, Google, and Microsoft authentication for all plans. Enterprise customers on our Pro plan also get access to SAML 2.0 Single Sign-On (SSO) for seamless integration with their identity providers.",
    order: 3
  },
  {
    title: "Can we monitor from private locations?",
    content: "Yes, Pro plan customers can set up monitoring from their own infrastructure using our private location monitoring feature. This allows you to monitor internal services and get a true picture of performance from behind your firewall.",
    order: 4
  },
  {
    title: "What kind of support do you provide?",
    content: "All plans include standard support. Pro and Enterprise customers receive priority support with guaranteed response times, a dedicated account manager, and custom SLAs to meet your specific needs.",
    order: 5
  },
  {
    title: "How do you handle data retention and security?",
    content: "We offer tiered data retention periods (3-24 months) based on your plan. All data is encrypted in transit and at rest. We maintain strict security practices and can provide detailed security documentation for enterprise customers.",
    order: 6
  }
];

export function FAQs() {
  const sortedFaqs = faqs.sort((a, b) => a.order - b.order);
  return (
    <CardContainer>
      <CardHeader>
        <CardIcon icon="message-circle" />
        <CardTitle>Frequently Asked Questions</CardTitle>
        <CardDescription>
          Common questions about Steadfast's enterprise monitoring platform.
        </CardDescription>
      </CardHeader>
      <div>
        <Accordion type="single" collapsible className="w-full">
          {sortedFaqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>{faq.title}</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">{faq.content}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </CardContainer>
  );
}
