import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Register = new Schema({
    firstname: {
        type:String
    },
    secondname: {
        type:String
    },
    phonenumber: {
        type:String
    },
    email: {
        type:String
    },
    gender: {
        type:String
    },
    password: {
        type:String
    },
    username: {
        type:String
    },
    country: {
        type:String
    },
    city: {
        type:String
    },
    lifeStatus: {
        type:String
    },
    creation_dt: {
        type:Date,
        default:Date.now()
    },
});

module.exports = mongoose.model('Register', Register);
