export const pricingTableConfig = {
  monitors: {
    label: "Monitors",
    features: [
      {
        label: "Check Frequency",
        value: "monitor_frequency",
        description: "How often we check your endpoints",
      },
      {
        label: "Number of Monitors",
        value: "monitor_count",
        description: "Total number of endpoints you can monitor",
      },
      {
        label: "Multi-region Monitoring",
        value: "multi_region",
        description: "Monitor from multiple global regions",
      },
      {
        label: "Number of Regions",
        value: "region_count",
        description: "Available monitoring locations",
      },
      {
        label: "Data Retention",
        value: "data_retention",
        description: "How long we keep your monitoring data",
      },
      {
        label: "Screenshots Upon Failure",
        value: "screenshots",
        description: "Capture visual evidence of failures",
      },
      {
        label: "OpenTelemetry Exporter",
        value: "otel_exporter",
        description: "Export monitoring data to your observability platform",
      }
    ],
  },
  api_checks: {
    label: "Synthetic API Checks",
    features: [
      {
        label: "On-demand Checks",
        value: "api_checks",
        description: "Number of API checks per month",
        monthly: true,
      },
      {
        label: "Private Locations",
        value: "private_locations",
        description: "Run checks from your own infrastructure",
      }
    ],
  },
  status_pages: {
    label: "Status Pages",
    features: [
      {
        label: "Status Pages",
        value: "status_page_count",
        description: "Number of status pages you can create",
      },
      {
        label: "Maintenance Status",
        value: "maintenance_status",
        description: "Schedule and display maintenance windows",
      },
      {
        label: "Toggle Numbers Visibility",
        value: "toggle_numbers",
        description: "Control metric visibility on status pages",
      },
      {
        label: "Subscribers",
        value: "subscribers",
        description: "Allow users to subscribe to status updates",
      },
      {
        label: "Custom Domain",
        value: "custom_domain",
        description: "Use your own domain for status pages",
      },
      {
        label: "Password Protection",
        value: "password_protection",
        description: "Secure status pages with passwords",
      },
      {
        label: "White Label",
        value: "white_label",
        description: "Remove Steadfast branding",
      }
    ],
  },
  alerts: {
    label: "Alerts & Notifications",
    features: [
      {
        label: "Slack & Discord & Email",
        value: "basic_notifications",
        description: "Integrate with common notification channels",
      },
      {
        label: "SMS Notifications",
        value: "sms",
        description: "Receive alerts via SMS",
      },
      {
        label: "PagerDuty Integration",
        value: "pagerduty",
        description: "Route alerts through PagerDuty",
      },
      {
        label: "Notification Channels",
        value: "notification_channels",
        description: "Number of notification integrations",
      }
    ],
  },
  collaboration: {
    label: "Team Features",
    features: [
      {
        label: "Team Members",
        value: "team_members",
        description: "Number of team members allowed",
      },
      {
        label: "Audit Log",
        value: "audit_log",
        description: "Track all team member actions",
      },
      {
        label: "SSO (SAML 2.0)",
        value: "sso",
        description: "Enterprise single sign-on",
      }
    ],
  },
};
