const { createLambdaServer } = require('../bundle/serve');

const server = createLambdaServer();

exports.handler = server.createHandler({
  cors: {
    origin: '*'
  }
});