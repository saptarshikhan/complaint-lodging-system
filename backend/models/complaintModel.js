const mongoose=require('mongoose')
const userSchema= new mongoose.Schema({
    mail:String,
    complaint:String
})

module.exports=mongoose.model('tblComplints',userSchema)