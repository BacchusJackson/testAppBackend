FROM node
WORKDIR /app
COPY . .

RUN npm install --silent

EXPOSE 3005

CMD npm run start
