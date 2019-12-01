FROM node:carbon

WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build
CMD ["serve -s build"]

EXPOSE 5000