import "dotenv/config"
import express from 'express'
import cors from 'cors';
import {router} from './routes/index.route';
import db from './db/connection';
import path from 'path'
import fs from 'fs'

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

const storagePath = path.join(__dirname, '../storage');
if (!fs.existsSync(storagePath)) {
  fs.mkdirSync(storagePath);
}

db.authenticate().then(() => console.log("Connection Ready"));
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));