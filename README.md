<p align="center" style="margin-top: 120px">

  <h3 align="center">Steadfast</h3>

  <p align="center">The enterprise-grade synthetic monitoring platform.
    <br />
    <br />
    Comprehensive monitoring, status pages, and alerting for modern businesses.
  </p>
</p>

## About Steadfast 🚀

Steadfast is a powerful synthetic monitoring platform designed for businesses that need reliable, scalable monitoring solutions.

- **Global Synthetic Monitoring**: Monitor your websites and APIs from 35 regions worldwide
- **Advanced Status Pages**: Customizable, white-label status pages with subscriber management
- **Team Collaboration**: Built for teams with robust access controls and permissions
- **Enterprise-Ready**: SAML SSO, audit logs, and advanced security features

## Features 💡

- **Comprehensive Monitoring**
  - Multi-region monitoring with 30-second frequency
  - Screenshot capture on failures
  - OpenTelemetry integration
  - Private location support

- **Professional Status Pages**
  - Custom domain support
  - White label options
  - Subscriber management
  - Maintenance windows

- **Team-Focused**
  - Role-based access control
  - Collaborative incident management
  - Audit logging
  - Team-based billing

- **Advanced Alerting**
  - Multi-channel notifications
  - Custom alert rules
  - Integrations with Slack, Discord, Email, SMS, and PagerDuty
  - Escalation policies

## Tech Stack 🛠

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [tinybird](https://tinybird.co/)
- [turso](https://turso.tech/)
- [drizzle](https://orm.drizzle.team/)
- [Resend](https://resend.com/)

## Getting Started 🏃

### Requirements

- [Node.js](https://nodejs.org/en/) >= 20.0.0
- [pnpm](https://pnpm.io/) >= 8.6.2
- [Bun](https://bun.sh/)
- [Turso CLI](https://docs.turso.tech/quickstart)

### Setup

1. Clone the repository and install dependencies:

```sh
git clone [your-repo-url]
cd steadfast
pnpm install
```

2. Initialize the development environment:

Launch the database:
```sh
turso dev --db-file steadfast-dev.db
```

In another terminal:
```sh
pnpm dx
```

3. Launch the web app:
```sh
pnpm dev:web
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key

# Stripe (for billing)
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key

# Additional configurations as needed
```

## Documentation

For detailed documentation about setup, configuration, and usage, please refer to our documentation site.

## Deployment 🚀

### DigitalOcean App Platform Configuration

For testing/development deployment:

1. Environment Setup
   - Set `NODE_ENV=development` to:
     - Skip email functionality (no Resend API key needed)
     - Disable analytics tracking
     - Enable development mode features

2. Runtime Configuration
   - Using Node.js runtime for all API routes
   - Webpack cache optimization enabled
   - Edge runtime disabled for better compatibility

3. Disabled Features in Development
   - Email notifications (welcome emails, status updates)
   - Analytics tracking
   - User behavior monitoring

Note: This configuration is for testing purposes only. For production deployment, additional environment variables and service configurations will be required.
