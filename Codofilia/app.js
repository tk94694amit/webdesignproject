  
const mysql = require('mysql');  
const express = require('express');  
const port = process.env.PORT || 3000;
const path=require('path');
const bodyParser= require('body-parser');


var app = express();  
app.use(bodyParser.urlencoded({
	extended:true
}));
  
 const static_path=path.join(__dirname,"/Frontend");
 app.use(express.static(static_path));
  
// Connection String to Database  
var mysqlConnection = mysql.createConnection({  
    host: 'localhost',  
    user : 'root',  
    password : '7051251928',   
    database : 'project',  
    multipleStatements : true  
});  
  



// To check whether the connection is succeed for Failed while running the project in console.  
mysqlConnection.connect((err) => {  
    if(!err) {  
        console.log("Db Connection Succeed");  
    }  
    else{  
        console.log("Db connect Failed \n Error :" + JSON.stringify(err,undefined,2));  
    }  
});  
  

// To Run the server with Port Number  
app.listen(port,()=> console.log(`Express server is running at port no :${port}`));  
  
// CRUD Methods  

app.get('/reg',(req,res)=>{
    res.sendFile(__dirname+'/Frontend/register.html');
 
})

 app.get('/login',(req,res)=>{
     res.sendFile(__dirname+'/Frontend/login.html')
 })

  

//      for registration table

 // get registered details 
 app.get('/registration',(req,res)=>{
    mysqlConnection.query('select * from Registration',(err,rows,fields)=>{
        if(!err)
        res.send(rows);
        else 
        console.log(err);
    })
});

// get the registered user details based on  emailid
app.get('/registration/:id',(req,res)=>{
    mysqlConnection.query('select * from Registration where email_id=?',[req.params.id],(err,rows,fields)=>{
        if(!err)
        res.send(rows);
        else
        console.log(err);
    })
    });

//   // delete the registration data based on  email
// app.delete('/registration/:id',(req,res)=>{
//     mysqlConnection.query('delete from Registration where email_id=?',[req.params.id],(err,rows,fields)=>{
//         if(!err)
//         res.send("deletion successful where email_id=?",[req.params.id]);
//         else
//         console.log(err);
//     })
//    });  


  app.post('/submit', function(req, res, next) {
    var email=String(req.body.email);
    var fullname=String(req.body.name);
   
    var  mobile = String(req.body.contact);
    var passkey=String(req.body.passkey)
    var confirmpasskey = String(req.body.confirmpasskey);

    console.log(req.body.name);
    console.log(req.body.email);
    let errors = [];

    
    
    mysqlConnection.query("SELECT COUNT(*) AS cnt FROM Registration WHERE email_id = ? " , email , function(err , data)
    {
        
            if(err){
                console.log(err);
                   }   
         else{
                if(data[0].cnt > 0)
                {  
                    // Already exist 
                    console.log("user already exist")
                    res.sendFile(__dirname+'/Frontend/register.html');
                }
                else{
                    var sql = "INSERT INTO `Registration`(`email_id`,`fullName`,`mobileNumber`,`password`,`confirm_password`) VALUES ('"+email+"','"+fullname+"','"+mobile+"','"+passkey+"','"+confirmpasskey+"')";
                   mysqlConnection.query(sql, function(err, result) 
                        {
                        if(err) throw err;
                        console.log("values inserted succesfully using node");
                       
                        })
                    
                    res.sendFile(__dirname+'/Frontend/index.html');
                    }
          }
    })

    
});


app.post('/login',function(req,res,next){
    var email=String(req.body.email)
    const password=String(req.body.passkey)
    console.log(email)
    console.log(password)

    mysqlConnection.query("select count(*) as cnt from Registration where email_id=?",email,function(err,data){
if(err){
    console.log(err);

}else{
    if(data[0].cnt>0)
    {
        mysqlConnection.query("select password  from Registration where email_id=?",email,(err,rows)=>
    {
        const result = JSON.stringify(rows);
        console.log(result)
        if(err){
            console.log(err);
            res.sendFile(__dirname+'/Frontend/login.html');
        }
        else{
            if(password!=result){console.log('password not matched')
            res.sendFile(__dirname+'/Frontend/login.html')}
            else{console.log('successfully login in ');
            res.sendFile(__dirname+'/Frontend/index.html')}
        }
    })
    }
    else {
        console.log('no such username');
        res.sendFile(__dirname+'/Frontend/login.html')
    }
}
    })



});