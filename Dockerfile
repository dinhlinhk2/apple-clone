# Giai đoạn 1: Build ứng dụng
FROM node:18 as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Giai đoạn 2: Serve app với NGINX
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

# Tùy chỉnh NGINX để hỗ trợ React router
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
