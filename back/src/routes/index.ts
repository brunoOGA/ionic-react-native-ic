import {Router} from 'express';
import pragasRouter from './pragas.routes';
import inimigosNaturaisRouter from './inimigosNaturais.routes';
import doencasDePragasRouter from './doencasDePragas.routes';
import anotacaoDeCampo from './anotacaoDeCampo.routes';

const routes = Router();

routes.use('/pragas', pragasRouter);
routes.use('/doencas', doencasDePragasRouter);
routes.use('/inimigos', inimigosNaturaisRouter);
routes.use('/anotacoes', anotacaoDeCampo);

export default routes;
