FROM node:carbon

WORKDIR /app
COPY package.json /app
RUN npm install && npm install -g serve
COPY . /app
RUN npm run build
CMD ["serve", "-s", "build"]

EXPOSE 5000