import express from 'express'
import {addCountryCodes} from '../controllers/static/countryCodes.js'
const router = express.Router();

router.post('/country-codes', addCountryCodes)

export default router;