import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import jsonMiddleware from './middlewares/jsonMiddleware.js'
import authRoutes from './routes/authRoutes.js'

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json({ limit: '30mb', strict: true }));
app.use(jsonMiddleware);

/* routes */
app.use('/auth', authRoutes);


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});