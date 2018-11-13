import { Client } from 'pg';
import config from '../config/index';

const connectionString = config.testDB;

const client = new Client({
  connectionString,
});

client.connect();

export default client;
