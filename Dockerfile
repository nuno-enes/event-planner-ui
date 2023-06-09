# Node version
FROM node:18-alpine as build

RUN apk update
RUN apk --no-cache --virtual build-dependencies add \
    jpeg-dev \
    cairo-dev \
    giflib-dev \
    pango-dev \
    python3 \
    make \
    g++ 


# Set the working directory
WORKDIR /app

# Add the source code to app
COPY . /app

# Install all the dependencies
RUN yarn install --frozen-lockfile

# Generate the build of the application
RUN yarn build

# Production image, copy all the files and run next
FROM node:18-alpine AS runner
WORKDIR /app

# Copy the build output to replace the default nginx contents.
# COPY --from=build /app/next.config.js ./
COPY --from=build /app/public ./public
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json

USER root

EXPOSE 3000

CMD ["yarn", "start"]