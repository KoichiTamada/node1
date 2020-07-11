var express=require('express');
var ejs=require('ejs');
var app=express();

app.engine('ejs',ejs.renderFile);
app.use(express.static('public'));

app.get('/',(req,res)=>{
    var msg='This is Express-app Top Page';
    var url='/other?name=mon&pass=ktmpen8658';
    res.render('index.ejs',
    {
    title:'Index',
    content:msg,
    link1:{href:url,text:'other'},
    link2:{href:'/hello',text:'hello'}
    });
});

app.get('/other',(req,res)=>{
    var name = req.query.name;
    var pass = req.query.pass;
    var msg = 'This is Other Page!<br>'
    + 'あなたの名前は「' + name +'」さんです。<br>'
    + 'ﾊﾟｽﾜｰﾄﾞは「' + pass + '」です。';

   res.render('other.ejs',
   {
    title:'other',
    content:msg,
    link1:{href:'/',text:'index'},
    link2:{href:'/hello',text:'hello'}
   });
});

app.get('/hello',(req,res)=>{
    res.render('hello.ejs',
    {
    title:'Hello',
    content:'This is Hello Page!',
    link1:{href:'/',text:'index'},
    link2:{href:'/other',text:'other'}
    });
});

app.listen(3000,()=>{
    console.log('Start server port:3000');
});