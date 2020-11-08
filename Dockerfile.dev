FROM node:alpine
WORKDIR /app/
COPY package*.json ./
RUN npm install

# Actually copy the application code in
COPY . ./

CMD ["npm", "start"]