const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect(process.env.DB_URL);

const loginSchema = new Schema({
    username : String,
    password : String,
    role : String
});

const loginModel = mongoose.model('Login', loginSchema);

module.exports = loginModel;