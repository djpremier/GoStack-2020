import express from 'express';
import { helloTypeScript } from './routes'

const app = express();

app.get('/', helloTypeScript);

app.listen(3333);