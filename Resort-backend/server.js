import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import Issue from './models/Issue';
import Contactus from './models/Contactus';
import Register from './models/Register';
import Admin from './models/Admin';

const app = express();
const router = express.Router();
app.use(cors());
app.use(bodyParser.json());

//mongoose.connect('mongodb://localhost:27017/issues');
mongoose.connect('mongodb://localhost:27017/Resort');

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

router.route('/contact_us').get((req, res) => {
    Contactus.find((err, contact_us) => {
        if (err)
            console.log(err);
        else
        res.json(contact_us);
    });
});

router.route('/contact_us/add').post((req, res) => {
    let contacts = new Contactus(req.body);
    contacts.save()
        .then(contact_us => {
            res.status(200).json({ 'contacts': 'Contact info send successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
});
router.route('/contact_us/:id').get((req, res) => {
    Contactus.findById(req.params.id, (err, contact_us) => {
        if (err)
            console.log(err);
        else
            res.json(contact_us);
       });
});
router.route('/contact_us/update/:id').post((req, res) =>{
    Contactus.findByIdR(req.params.id, (err, contact_us) => {
        if (!contact_us)
            return nextTick(new Error('Could not load document'));
        else {
            contact_us.firstname = req.body.firstname;
            contact_us.lastname = req.body.lastname;
            contact_us.phonenumber = req.body.phonenumber;
            contact_us.email = req.body.email;
            contact_us.message = req.body.message;
            contact_us.creation_dt = req.body.creation_dt;
        }
    });
});
router.route('/register').get((req, res) => {
    Register.find().exec()
    .then(found =>{
        res.json(found);
    })
});

router.route('/register/:id').get((req, res) => {
    Register.findById(req.params.id, (err, register) => {
        if (err)
            console.log(err);
        else
            res.json(register);
       });
});

router.route('/registers/add').post((req, res) => {
    console.log(req.body);

    let register = new Register(req.body);
    register.save()
        .then(register => {
            res.status(200).json({ 'register': 'Registerd successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
});
router.route('/admin').get((req, res) => {
    Admin.find((err, admin) => {
        if (err)
            console.log(err);
        else
        res.json(admin);
    });
});

router.route('/admin/:id').get((req, res) => {
    Admin.findById(req.params.id, (err, admin) => {
        if (err)
            console.log(err);
        else
            res.json(admin);
       });
});
router.route('/admin/add').post((req, res) => {
    let admin = new Admin(req.body);
    admin.save()
        .then(admin => {
            res.status(200).json({ 'admin': 'admin info send successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new record');
        });
});

router.route('/admin/update/:id').post((req, res) =>{
    Admin.findByIdR(req.params.id, (err, admin) => {
        if (!admin)
            return nextTick(new Error('Could not load document'));
        else {
            admin.username = req.body.username;
            admin.password = req.body.password;
        }
    });
});

app.use('/', router);

app.listen(4000, () => console.log('Express server is running on port 4000'));