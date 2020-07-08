FROM node:alpine as metlife
WORKDIR /client
COPY package.json package-lock.json ./
RUN npm install --silent
COPY . ./
ENV REACT_APP_BASE_API_URL=http://localhost:3001
CMD ["npm", "start"]