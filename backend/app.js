
const  express=require('express');
const mongoose = require('mongoose');
const { body, validationResult } = require('express-validator')
const cors= require ('cors');
const collection =require('./index');
const app=express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors());

//   });
app.post('/contact', [
    body('name').notEmpty(),
  body('email').isEmail(),
  body('des').notEmpty(),
    // password must be at least 5 chars long

], async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, des } = req.body;
    
        
    
    const data = { name, email, des };
    await collection.insertMany([data]);
    console.log(data);
});
app.listen(8000,()=>{
    console.log("app is listening ");
})