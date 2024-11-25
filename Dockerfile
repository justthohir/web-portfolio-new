FROM node:20-alpine AS builder

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm i

COPY . .

RUN npm run build

FROM node:20-alpine AS runner

RUN npm install -g serve
WORKDIR /app
COPY --from=builder /app/dist /app/dist
EXPOSE 5000

ENTRYPOINT ["serve", "-s", "dist", "-l", "5000"]
