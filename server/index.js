import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import swagger from 'swagger-ui-express';
import swaggerDocument from '../swagger.js';
import apiVersion1 from './versioning/v1';

const PORT = process.env.PORT || 4422;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));

app.use('/api/v1', apiVersion1);
app.use('/docs', swagger.serve, swagger.setup(swaggerDocument));
app.get('/', (req, res) => res.send({ ok: true, message: 'Welcome to Send IT', baseurl: '/api/{version}' }).status(200));
app.listen(PORT, () => {
  if (process.env.NODE_ENV === 'dev') {
    /* eslint no-console: 0 */
    console.log(`The Dev server is running on port ${PORT}`);
  } else {
    console.log(`The production server is now running at ${PORT}`);
  }
});

export default app;
