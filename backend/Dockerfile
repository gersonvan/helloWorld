# Etapa 1: Define a imagem base. Usaremos uma versão leve (alpine) do Node.js v18.
FROM node:18-alpine

# Etapa 2: Define o diretório de trabalho dentro do contêiner.
WORKDIR /app

# Etapa 3: Copia os arquivos de definição de dependências.
# Fazemos isso em um passo separado para aproveitar o cache do Docker.
COPY package*.json ./

# Etapa 4: Instala as dependências do projeto.
RUN npm install

# Etapa 5: Copia o restante do código da aplicação para o diretório de trabalho.
COPY . .

# Etapa 6: Expõe a porta que a nossa aplicação usa dentro do contêiner.
EXPOSE 3001

# Etapa 7: Define o comando que será executado quando o contêiner iniciar.
CMD ["node", "server.js"]