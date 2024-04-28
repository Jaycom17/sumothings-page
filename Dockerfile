FROM node:22-alpine
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "run", "start"]
EXPOSE 4200