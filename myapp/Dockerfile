FROM node:23

WORKDIR /app

COPY package*.json yarn.lock ./

RUN yarn install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["yarn", "start"]