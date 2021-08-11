import cors from 'cors';
import express from 'express';
import swaggerUi from 'swagger-ui-express';

import swaggerFile from '../../../swagger.json';
import { routes } from './routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerFile));

export { app };
