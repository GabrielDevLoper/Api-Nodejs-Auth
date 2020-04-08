import { Router } from 'express';



import UserController from './controllers/UserController';
import SessionController from './controllers/SessionController';
import UserLoggedController from './controllers/UserLoggedController';


import authMiddleware from './middlewares/auth';

const routes = Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);


/** todas as rotas que tiverem abaixo desta declaração irá precisar 
 * de um token válido
 */
routes.use(authMiddleware);

routes.get('/authenticated', UserLoggedController.showUser);


export default routes;