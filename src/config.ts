import * as dotenv from 'dotenv';
dotenv.config({ debug: true });

export const config = {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    DB_CONNECTION: process.env.DB_CONNECTION
}