var express=require('express');
var app=express();

app.get('/',(req,res)=>{
    res.send('Welcome to Express!');
});

app.get('/other',(req,res)=>{
    res.send('Welcom other page!');
})

app.listen(3000,()=>{
    console.log('Start server port:3000');
});