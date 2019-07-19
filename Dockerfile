FROM node:12.6.0

#set working directory
WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY . .

ENV NODE_ENV=production
ENV PORT=5000

# tell the port number the container should expose
EXPOSE 5000

# run the command
CMD ["npm", "run", "start"]