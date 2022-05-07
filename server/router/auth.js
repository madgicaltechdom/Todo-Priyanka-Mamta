
var mysql = require('mysql');
const router = require("express").Router();
const passport = require("passport");
const CLIENT_URL = "http://localhost:3000/";


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rajput@123",
  database: "crud"
});

con.connect((err) => {
  if (err) throw err;
  console.log("mysql connected")
});
router.get("/login/success", (req, res) => {
  if (req.user) {
    let allData=req.user._json
    let data=[allData.email,allData.name,allData.picture]
    let sql=`INSERT INTO users (Email_id,name,url) Values ?`;
    con.query(sql,[[data]],function(err,result){
      if(err)throw err;
      console.log("record inserted")
      res.status(200).json({
        success: true,
        message: "successfull",
        user: req.user,
          // cookies: req.cookies
      });
  })
}
});


router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

// router.get("/logout", (req, res) => {
//   req.logout();
//   res.redirect(CLIENT_URL);
// });



router.get("/google", 
  passport.authenticate("google", { scope: ["profile", "email"] }),(req,res)=>{
  console.log(req.body)
}
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);


module.exports = router





























