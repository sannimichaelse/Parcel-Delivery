import dotenv from 'dotenv';

dotenv.config();

const config = {
  testDB: process.env.TEST_DATABASE_URL,
  jwtSecretKey: process.env.JWT_SECRET_KEY,
};

export default config;
