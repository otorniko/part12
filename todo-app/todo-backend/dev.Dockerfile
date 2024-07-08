FROM node:20
WORKDIR /usr/src/app
COPY --chown=node:node . .
RUN npm install
ENV DEBUG=APP:* 
USER node
CMD ["npm", "run" ,"dev", "--", "--host"]
