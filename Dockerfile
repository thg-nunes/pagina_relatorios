FROM node:16-alpine AS deps

WORKDIR /app

COPY . ./

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
