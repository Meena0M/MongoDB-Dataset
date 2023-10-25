const mongoose= require('mongoose')

const productschema =mongoose.Schema(
    {
        name:{
            type:String,
            require: [true,"Please enter a product name"]
        },
        Amount:{
            type:Number,
            required:true,
            default: 0
        },
        Cost:{
            type:Number,
            required: true,
        },
        img:{
            type:String,
            required: false,
        }
    },
)
const product=mongoose.model('Product', productschema);
module.exports=product;