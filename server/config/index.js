import dotenv from 'dotenv';

dotenv.config();

const config = {
  testDB: process.env.TEST_DATABASE_URL,
};

export default config;
