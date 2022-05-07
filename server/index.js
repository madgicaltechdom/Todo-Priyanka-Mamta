var mysql = require('mysql');
const express=require("express")
const bodyParser=require("body-parser");
const app=express();
const cors=require("cors");
// const session = require('express-session');
const passport = require('passport');
const authRoute = require("./routes/auth");
const passportSetup=require("./passport");
const cookieSession=require("cookie-session")
app.use(cookieSession(
  {name:"session",
keys:['lema'],
maxAge:24*60*60*100})
);
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));


app.use(express.json())


app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(cors());

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rajput@123",
  database:"crud"
});

con.connect((err)=>{
  if(err)throw err;
  console.log("mysql connected")
});

// create a new record

app.post("/api/create",(req,res)=>{
  var todo=req.body.todo
  var category=req.body.category
  var Email_id =req.body.Email_id
  var data=[todo,category,Email_id]
  console.log(data);
  console.log(req.body)
  let sql1=`INSERT INTO user (todo,category) Values ?`;
  con.query(sql1,[[data]],function(err,result){
    if(err)throw err;
    console.log("record inserted")
    res.send(JSON.stringify({status:200, error:null, response:"new record addd"}))
  })
})


app.get("/api/view",(req,res)=>{
  let sql= " SELECT * FROM user ";
  let query=con.query(sql,(err,result)=>{

    if(err)throw err;
    res.send(JSON.stringify({status:200,error:null,response:result}));
  });
});


app.get("/api/view/:id",(req,res)=>{
  let sql="SELECT * FROM user WHERE id=" +req.params.id;
  let query=con.query(sql,(err,result)=>{
    if(err)throw err;
    res.send(JSON.stringify({status:200,error:null,response:result}));
  });
});



// update

app.put("/api/update",(req,res)=>{
  let sql="UPDATE user SET todo='"+req.body.todo+"',category=' "+req.body.category+" ' WHERE id="+req.body.id;
  let query=con.query(sql,(err,result)=>{
    if(err)throw err
    res.send(JSON.stringify({status:200,error:null,response:"updated"}))
  })
})


// delete
app.delete("/api/delete/:id",(req,res)=>{
  let sql="DELETE FROM user WHERE id="+req.params.id+"";
  let query=con.query(sql,(err,result)=>{
    if(err)throw err;
    res.send(JSON.stringify({status:200,error:null,response:"Record delete"}))
  })
})




app.use("/auth", authRoute);

app.listen(8000,()=>{
  console.log("server started on port 8000..")
})











