FROM node:23-alpine AS build_image

WORKDIR /app

COPY package*.json yarn.lock ./

RUN yarn

COPY . .

# build application

RUN yarn build

FROM node:23-alpine

WORKDIR /app

COPY --from=build_image /app/dist ./dist
COPY --from=build_image /app/node_modules ./node_modules

EXPOSE 3000

CMD ["yarn", "start"]