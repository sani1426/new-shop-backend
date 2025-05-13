import mongoose, { Schema, model } from "mongoose";


const cartSchema = new Schema({
    productId : {
        type : mongoose.Schema.ObjectId ,
        ref : 'Product'
    },
    quantity : {
        type : Number ,
        default : 1
    },
    userId : {
        type : mongoose.Schema.ObjectId ,
        ref : 'User'
    }
},{
    timestamps : true
})

const CartModel = model("Cart" , cartSchema) 

export default CartModel