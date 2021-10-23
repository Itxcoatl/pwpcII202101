/* eslint-disable prettier/prettier */
// Importando router
import { Router } from 'express';

// Importando el controlador
import userController from '@server/controllers/userController';

// Creando  la instanca  del router
const router = new Router();

/* GET users listing. */
router.get('/', userController.index);

export default router;
