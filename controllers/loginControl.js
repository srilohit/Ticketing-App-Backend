const loginData = require('../models/login_model/loginM');
const jwt = require('jsonwebtoken');

const allLogins = (req, res)=>{
    loginData.find({}).then((data)=>{
        res.json(data);
    });
};

const employeesLogin = (req, res)=>{
    loginData.find({ role : 'employee' }).then((data)=>{
        res.json(data); 
    }); 
};

const loginAuthenticate = (req, res)=>{
    loginData.find({}).then((data)=>{
        let filteredLogin = data.find((loginUser)=>{
            return (loginUser.username === req.body.username && loginUser.password === req.body.password)
        });
        //console.log(filteredLogin); 

        if(filteredLogin != 0){
            let token = jwt.sign( { username : req.body.username, password : req.body.password }, 'bunny');
            // console.log(token);  
            res.cookie('user', token);
            res.json(filteredLogin); 
        }
        else{
            res.send('login failed');
        }
    });
}

module.exports = {
    allLogins,
    employeesLogin,
    loginAuthenticate
};