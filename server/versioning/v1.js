
import { Router } from 'express';
import apiRoutes from '../routes/index';

const api = Router();

api.get('/', (req, res) => res.send({ ok: true, message: 'Welcome to Andela', status: 'API version 1' }));
api.use('/', apiRoutes);
api.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// No routes matched? 404.
api.use((req, res) => res.status(404).send({ message: 'Sorry that route/method doesnt exist' }));

export default api;
