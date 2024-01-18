const express = require('express');
require('dotenv').config();
const app = express();
const port= 3000;

app.get('/',(req, res)=>{
    res.send('hello World!');
});

app.get('/twitter',(req,res)=>{
    res.send('vishaldotcom');
});

app.get('/login',(req,res)=>{
    res.send('<h1>please login at vishal server</h1>')
});

app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on port ${port}`);
});