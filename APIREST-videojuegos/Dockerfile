FROM node:20-alpine

RUN addgroup -S apivideojuego && adduser -S lluisfsegui -G apivideojuego
USER lluisfsegui

WORKDIR /app

RUN chown -R lluisfsegui:apivideojuego /app
USER lluisfsegui

COPY --chown=lluisfsegui:apivideojuego package.json ./
RUN npm install

COPY --chown=lluisfsegui:apivideojuego .. .

EXPOSE 8080

CMD ["node", "app.js"]