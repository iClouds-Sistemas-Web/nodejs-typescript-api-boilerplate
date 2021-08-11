import { Router } from 'express';

import { ExampleController } from '@modules/example/infra/http/controllers/ExampleController';

const routes = Router();
const exampleController = new ExampleController();

routes.use('/example', exampleController.index);

export { routes };
