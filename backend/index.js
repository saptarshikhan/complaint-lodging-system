require('./models/db')
const express=require('express')
var bodyParser = require('body-parser')
const complaints=require('./models/complaintModel')
const cors=require('cors')
const app=express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
    app.use(express.json())
app.get('/',(req,res)=>{
    console.log('Success')
})
app.post('/save',(req,res)=>{
    console.log(req.body)
    var user=new complaints(req.body)
    user.save().then((data)=>{
        console.log('Data Saved')
    }).catch((err)=>{
        console.log(err)
    })
})
app.listen(5000,()=>{
    console.log('Server running')

})