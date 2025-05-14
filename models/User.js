import mongoose, { Schema } from "mongoose";
import bcrypt from 'bcryptjs'


const userSchema = new Schema({
    name : {
        type : String ,
        required : true ,
        trim : true
    },
    email : {
        type : String ,
        required : true ,
        unique : true ,
        trim : true
    },
    password : {
        type : String,
        rquired : true ,
    },
    gender : {
        type : String ,
        enum : ['Men' , 'Women'] ,
        required : true
    },
    role : {
        type : String ,
        enum : ['customer' , 'admin'],
        default : 'customer'
    },
    verify_email : {
        type : Boolean ,
        default : false
    },
},{
    timestamps : true
})

userSchema.pre('save' , async function(next) {
    const user = this;
    if(!user.isModified('password'))return next();
    const hashedPassword = await bcrypt.hash(user.password , 10);
    user.password = hashedPassword ;
    next()
})

const UserModel = mongoose.model('User' , userSchema);


export default UserModel;