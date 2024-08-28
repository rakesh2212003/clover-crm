import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

/* routesPaths */
import authRoutes from './routes/authRoutes.js'

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

/* routes */
app.use('/auth', authRoutes);



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});