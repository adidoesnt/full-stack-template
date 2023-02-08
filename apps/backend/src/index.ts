import express from 'express';

const server = express();
const port = process.env.port || 8000;

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`server listening on port ${port}`);
});
