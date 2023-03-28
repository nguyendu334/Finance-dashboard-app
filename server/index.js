import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';

import kpiRoutes from './routes/kpi.js';
import KPI from './models/KPI.js';
import { kpis } from './data/data.js';

dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));
app.use(express.json());

// routes
app.use('/kpi', kpiRoutes);

// Connect to MongoDB
const PORT = process.env.PORT || 5000;
mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(async () => {
        app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));

        // add data ontim only or as needed
        // await mongoose.connection.db.dropDatabase();
        // KPI.insertMany(kpis);
    })
    .catch((error) => console.log(error));
