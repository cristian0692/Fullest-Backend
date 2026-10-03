ARG DENO_VERSION=2.9.6

FROM denoland/deno:${DENO_VERSION}

WORKDIR /app

# Copy dependency manifests first for caching
COPY deno.json deno.lock* ./
RUN deno install

# Copy the rest of the source code
COPY . .

# Cache the module graph so the container starts without downloading
RUN deno cache src/main.ts

EXPOSE 8123

# --allow-ffi is required by argon2's native addon
CMD ["deno", "run", "--allow-env", "--allow-net", "--allow-read", "--allow-ffi", "src/main.ts"]
