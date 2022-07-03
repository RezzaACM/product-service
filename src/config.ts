import * as dotenv from 'dotenv';
dotenv.config({ debug: true });

export const config = {
    PORT: process.env.PORT,
    DB_CONNECTION: process.env.DB_CONNECTION
}