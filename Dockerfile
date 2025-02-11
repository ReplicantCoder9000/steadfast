# Stage 1: Dependencies
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy entire workspace for proper dependency resolution
COPY . .

# Install dependencies including dev dependencies for build
RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile --include-workspace-root

# Stage 2: Builder
FROM node:20-alpine AS builder
WORKDIR /app

# Install build dependencies
RUN apk add --no-cache libc6-compat python3 make g++

# Copy the entire workspace with dependencies
COPY --from=deps /app .

# Set environment variables with proper syntax
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Install pnpm globally
RUN npm install -g pnpm

# Ensure all dependencies are installed and linked
RUN pnpm install --frozen-lockfile --include-workspace-root

# Build packages in correct order
RUN pnpm build --no-frozen-lockfile

# Stage 3: Runner
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy necessary files from builder
COPY --from=builder /app/apps/web/next.config.js ./
COPY --from=builder /app/apps/web/package.json ./package.json
COPY --from=builder --chown=nextjs:nodejs /app/apps/web/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/apps/web/.next/static ./apps/web/.next/static
COPY --from=builder --chown=nextjs:nodejs /app/apps/web/public ./apps/web/public

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "apps/web/server.js"]
