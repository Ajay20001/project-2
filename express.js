let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let path = require('path');

let port = 4000;
const app = express()

app.use(bodyParser.json())
app.use(express.static('project'))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb://localhost:27017/userdatadb');
let db = mongoose.connection;

db.on('error',()=>console.log("Error in Connecting to Database with server"));
db.once('open',()=>console.log("Server has connected to Database"))

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname + '/project/index.html'));
})

app.get('/teams', (req,res) => {
    res.sendFile(path.join(__dirname + '/project/teams.html'));
})

app.get('/top-products', (req,res) => {
    res.sendFile(path.join(__dirname + '/project/top-brands.html'));
})

let host = app.get('/sign_up', (req,res) => {
    res.sendFile(path.join(__dirname + '/project/signUp.html'));
})

app.post('/sign_up',(req,res)=>{
    var { username } = req.body;
    var { phoneNumber } = req.body;
    var { email } = req.body;
    var { password } = req.body;
    var { confirmPassword } = req.body;

    if(password === confirmPassword)
    {
        var data = {
            "username": username,
            "phoneNumber" : phoneNumber,
            "email": email,
            "password" : password,
            "confirmPassword" : confirmPassword
        }
    
        db.collection('users').insertOne(data,(err)=>{
            if(err){
                throw err;
            }
            console.log("Datas has Inserted Successfully");
        });
        return res.redirect('/')
    }
})

host.listen(port, () => console.log(`Server started on ${port}`));

