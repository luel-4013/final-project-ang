import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Issue = new Schema({
    title: {
        type:String
    },
    responsible: {
        type:String
    },
    description: {
        type:String
    },
    serverity: {

    },
    status: {
        type:String,
        default: 'Open'
    },
});