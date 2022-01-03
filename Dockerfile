# Build
FROM node:16.13.0 as builder

COPY . ./
RUN npm install
RUN npm run build


# Production
FROM node:16.13.0
WORKDIR /app

COPY package*.json ./
COPY --from=builder /dist ./dist
RUN npm install --production

EXPOSE 80
CMD ["npm", "run", "start"]
