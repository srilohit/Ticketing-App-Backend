const logins = require('../models/login_model/loginM');

const createUserAccount = (req, res)=>{
    // console.log(req.body);
    let newUser = new logins(req.body);
    newUser.save();
    res.json('register success');
};

module.exports = {
    createUserAccount
};