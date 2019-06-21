import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

let Schema = mongoose.Schema;

let Login = new Schema({
    email: {
        type:String
    },
    password: {
        type:String
    },
    creation_dt: {
        type:Date,
        default:Date.now()
    }
});

// Schema.methods.generateHash = function(password){
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(9)); //install bcrypt
// }

export default mongoose.model('Login', Login);

// var mongoose = require('mongoose');
// var bcrypt = require('bcrypt');

// var  userSchema = mongoose.Schema({
   
//         email: String,
//         password: String,
//         creation_dt: {
//                     type:Date,
//                     default:Date.now()
//                 }
    
// });


// // let Login = new userSchema({
// //     email: {
// //         type:String
// //     },
// //     password: {
// //         type:String
// //     },
// //     creation_dt: {
// //         type:Date,
// //         default:Date.now()
// //     }
// // });

// userSchema.methods.generateHash = function(password){
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(9)); //install bcrypt
// }

// userSchema.methods.validePassword = function(password){
//     return bcrypt.compareSync(password, this.local.password);
// }

// export default mongoose.model('Login', userSchema);

// import mongoose from 'mongoose';
// import bcrypt from 'bcrypt'; //install

// var Schema = mongoose.Schema;
