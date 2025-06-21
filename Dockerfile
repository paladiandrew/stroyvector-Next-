# -------- deps --------
FROM node:20-slim AS deps
WORKDIR /app

# Install all dependencies
COPY package*.json ./
RUN npm ci

# -------- builder --------
FROM node:20-slim AS builder
WORKDIR /app

# Copy already-installed deps layer
COPY --from=deps /app/node_modules ./node_modules
# Copy the rest of the codebase
COPY . .

# Build the Next.js app (standalone output)
RUN npm run build

# -------- runner --------
FROM node:20-slim AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copy the standalone server and static assets produced by the build stage
COPY --from=builder /app/.next/standalone .
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# include runtime dependencies such as sharp binary bindings
COPY --from=builder /app/node_modules ./node_modules

# Remove dev dependencies from final image
RUN npm prune --production

EXPOSE 3000
CMD ["node", "server.js"]