FROM node:20-alpine

RUN addgroup -S apivideojuego && adduser -S lluisfsegui -G apivideojuego
USER lluisfsegui

WORKDIR /app

COPY package.json ./
RUN npm install

COPY . .

EXPOSE 8080

CMD ["node", "app.js"]