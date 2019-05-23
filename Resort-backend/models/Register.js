import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Register = new Schema({
    fname: {
        type:String
    },
    sname: {
        type:String
    },
    username: {
        type:String
    },
    phonenumber: {
        type:String
    },
    email: {
        type:String
    },
    password: {
        type:String
    },
    gender: {
        type:String
    },
    country: {
        type:String
    },
    city: {
        type:String
    },
    life_status: {
        type:String
    },
    marriage_status: {
        type:String
    },
    creation_dt: {
        type:Date,
        default:Date.now()
    },
});

module.exports = mongoose.model('Register', Register);
