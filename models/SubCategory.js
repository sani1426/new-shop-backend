import mongoose, { Schema, model } from "mongoose";


const subCategorySchema = new Schema({
    name : {
        type : String ,
        default : ''
    },
    image : {
        type : String ,
        default : ''
    },
    category : {
        type : mongoose.Schema.ObjectId ,
        ref : 'Category'
    }
}, {
    timestamps : true
})

const SubCategoryModel = model("SubCategory" , subCategorySchema)

export default SubCategoryModel