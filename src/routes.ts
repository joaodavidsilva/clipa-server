import express from 'express';
import piece_routes from './routes/piece_routes';
import client_routes from './routes/client_routes';
import service_routes from './routes/service_routes';

const routes = express.Router();

routes.use(piece_routes);
routes.use(client_routes);
routes.use(service_routes);

export default routes;