FROM node:16-alpine AS deps

WORKDIR /app

COPY . ./

RUN npm install

RUN npm run build

EXPOSE 8082

CMD ["npm", "run", "start"]
