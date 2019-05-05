FROM mhart/alpine-node

COPY . /app/
WORKDIR /app

RUN yarn
RUN yarn build:prod
CMD ["yarn", "start:prod"]