# Giai đoạn 1: Build ứng dụng
FROM node:18 as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .
RUN npm run build

EXPOSE 80

CMD ["npm","start"]
