import mongoose, { Schema, model } from "mongoose";


const orderSchema = new Schema({
    userId : {
        type : mongoose.Schema.ObjectId ,
        ref : 'User'
    },
    orderId : {
        type : String ,
        required : [true , "Provide orderId"] ,
        unique : true
    },
    productId : {
        type : mongoose.Schema.ObjectId ,
        ref : 'Product'
    },
    product_Details : {
        _id : String ,
        name : String ,
        image : Array
    },
    subTotalAmt : {
        type : Number ,
        default : 0
    },
    totalAmt : {
        type : Number ,
        default : 0
    }
},{
    timestamps : true
})

const OrderModel = model('Order' , orderSchema)

export default OrderModel