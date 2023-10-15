const express= require('express');
const ejs=require('ejs');
const path=require('path');
const app= express();
const Customer= require('./model/customerschema');

app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'')));
app.use(express.urlencoded({extended:false})); 

require('./db/connection');

app.get('/',(req,res)=>{
res.render('login');
});

app.post('/logindata', async(req,res)=>{
    try {
        await Customer.create(req.body)
        res.send("Data Saved")
    } catch (error) {
        res.send(error);
    }
});

const port= 3000;
app.listen(port,()=>{
console.log(`Server started on the ${port}`);
})