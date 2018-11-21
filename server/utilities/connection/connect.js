import { Pool } from 'pg';
import config from '../../config/index';

const connectionString = config.testDB;

const client = new Pool({
  connectionString,
});

client.connect();

export default client;
