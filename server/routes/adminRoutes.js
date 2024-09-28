import express from 'express'
import { login, getAllTenant, getTenant } from '../controllers/adminControllers.js'
import verifyAdmin from '../middlewares/adminMiddleware.js' 
const router = express.Router();

router.post('/login', login);
router.get('/tenants', verifyAdmin, getAllTenant);
router.get('/tenants/:id', verifyAdmin, getTenant);

export default router;