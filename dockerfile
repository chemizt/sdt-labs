FROM ubuntu:latest

RUN apt update
RUN apt install -y nodejs nodejs-dev npm git
RUN git clone https://github.com/chemizt/sdt-labs
RUN cd sdt-labs
RUN npm install && npm run build && serve -s build

EXPOSE 5000