import express from 'express';
import cors from 'cors';
import bodyParser from 'bodyParser';
import mongoose from 'mongoose';

import Issue from './models/Issue';
import { error } from 'util';
import { nextTick } from 'q';

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
    Issue.find((err, issues) => {
        if (err)
            console.log(err);
        else
        res.json(issues);
    });
});

router.route('/issues/:id').get((req, res) => {
    Issue.findById(req.params.id, (err, issue) => {
        if (err)
            console.log(err);
        else
            res.json(issue);
       });
});

router.route('/issues/add').post((req, res) => {
    let issue = new Issue(req.body);
    issue.save()
        .then(issue => {
            res.status(200).json({ 'issue': 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
});

router.route('/issues/update/:id').post((req, res) =>{
    Issue.findByIdR(req.params.id, (err, issue) => {
        if (!issue)
            return nextTick(new Error('Could not load document'));
        else {
            issue.title = req.body.title;
            issue.responsible = req.body.responsible;
            issue.description = req.body.description;
            issue.severity = req.body.severity;
            issue.status = req.body.status;
        }
    });
});

router.route('/issues/delete/:id').get((rqe, res) => {
    Issue.findByIdAndRemove({_id: req.params.id}, (erre, issue) => {
        if (err)
            res.json(err);
        else
            res.json('Removed successfully');
    })
})

app.use('/', router);

app.listen(4000, () => console.log('Express server is running on port 4000'));