import { App } from './app';
import 'dotenv/config';

const PORT = process.env.APP_PORT || 8080;

new App().start(PORT);
