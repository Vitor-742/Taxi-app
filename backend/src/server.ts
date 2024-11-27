import { App } from './app';
import 'dotenv/config';

// import dotenv from 'dotenv';
// import path from 'path';

// dotenv.config({ path: path.resolve(__dirname, '../../.env') }); 

console.log(process.env.APP_PORT)

const PORT = process.env.APP_PORT || 8080;

new App().start(PORT);
