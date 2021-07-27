#Caminho para a imagem.
FROM node:latest

#É onde é o caminho para entrar no container
WORKDIR /usr/src/e2e

RUN apt-get update && apt-get install --yes libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb


#Integração com package.json
COPY package*.json ./ 

RUN npm install

#Aqui é a copia do projeto no container
COPY . .

#O comando que vai ser executado quando rodar o container
ENTRYPOINT [ "npm", "run,", "cucumber", "TAGS=${tags}" ] 
