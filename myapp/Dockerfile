# Stage 1: install & build
FROM node:23-alpine AS build_image

# requirements
RUN apk update && apk add yarn curl bash

# install node-prune 
# RUN curl -sf https://gobinaries.com/tj/node-prune | sh

WORKDIR /app

COPY package*.json yarn.lock ./

RUN yarn

COPY . .

# build application
RUN yarn build

# remove development dependencies
RUN npm prune --production

# run node prune
# RUN node-prune

# Stage 2: create a runtime image
FROM node:23-alpine

WORKDIR /app

# copy from build image
COPY --from=build_image /app/dist ./dist
COPY --from=build_image /app/node_modules ./node_modules

EXPOSE 3000

CMD ["node", "dist/main.js"]