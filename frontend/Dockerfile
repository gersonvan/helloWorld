# --- Estágio 1: Build ---
# Usamos uma imagem Node para compilar nossa aplicação React.
FROM node:18-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# O comando mais importante: gera a versão otimizada para produção.
RUN npm run build

# --- Estágio 2: Produção ---
# Usamos uma imagem Nginx super leve para servir os arquivos estáticos.
FROM nginx:stable-alpine

# Copia os arquivos gerados no estágio de 'build' para a pasta do Nginx.
# Esta é a mágica do multi-stage: apenas o resultado final é copiado.
COPY --from=build /app/build /usr/share/nginx/html

# Expõe a porta 80, que é a porta padrão do Nginx.
EXPOSE 80

# Comando para iniciar o servidor Nginx.
CMD ["nginx", "-g", "daemon off;"]