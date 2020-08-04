import { Router } from 'express';
const app = Router();
import testRoute from './testRoute';
import authRoute from './authRoute';
import productRoute from './productRoute';
import processRoute from './processRoute';
import machineRoute from './machineRoute';
import familyRoute from './familyRoute';
import admProcessRoute from './admProcessRoute';

const route = () => {
    testRoute(app);
    authRoute(app);
    productRoute(app);
    processRoute(app);
    machineRoute(app);
    familyRoute(app);
    admProcessRoute(app);

    return app;
}

export default route;
