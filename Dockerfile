# Pre-built assets are committed to the repository.
# This Dockerfile only installs production dependencies and copies the dist.
# To update the deployment: run `npm run build` locally, then commit and push.

FROM node:24.14-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=production --ignore-scripts
COPY app/public/dist ./app/public/dist
EXPOSE 9000
ENTRYPOINT ["node", "app/public/dist/server/app/index.js"]
