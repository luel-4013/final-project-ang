import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let admin = new Schema({
    username: {
        type:String
    },
    password: {
        type:String
    },
});

export default mongoose.model('admin', admin);