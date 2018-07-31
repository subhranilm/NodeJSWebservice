const express=require('express');
const app=express();
const UserRoutes=require('./routes/UserRoutes');
var bodyParser=require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//UserRoutes(app);
app.use('/user',UserRoutes);



app.listen(8088,(err)=>{
    (err)?console.log(`error ${err.message} stack ${err.stack}`):console.log('success');
});
