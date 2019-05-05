FROM mhart/alpine-node

COPY . /app/
WORKDIR /app

RUN yarn
RUN yarn build:test
CMD ["yarn", "start:test"]