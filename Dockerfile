FROM node:16-alpine

WORKDIR /usr/src/app

# Copying source files
COPY . .

# Installing dependencies
COPY package*.json ./

RUN npm install

# Expose ports
EXPOSE 8080

# Running the app
CMD [ "npm", "run", "serve" ]
