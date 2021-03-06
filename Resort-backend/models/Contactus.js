import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Contact_us = new Schema({
    firstname: {
        type:String
    },
    lastname: {
        type:String
    },
    phonenumber: {
        type:String
    },
    email: {
        type:String
    },
    messages: {
        type:String
    },
    creation_dt: {
        type:Date,
        default:Date.now()
    },
});

export default mongoose.model('Contact_us', Contact_us);