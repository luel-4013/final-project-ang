import express from 'express';
import cors from 'cors';
import bodyParser from 'bodyParser';
import mongoose from 'mongoose';

import Issue from './models/Issue';

const app = express();
const router = express.Router();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('');

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

router.route('/issues').get((req, res) => {
    
});

app.use('/', router);

app.listen(4000, () => console.log('Express server is running on port 4000'));