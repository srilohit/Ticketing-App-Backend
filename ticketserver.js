require('dotenv').config();

const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const authenticate = require('./routes/logins/authenticate');
const createUserAccount = require('./routes/signUp/sign');
const userRaisedTicket = require('./routes/tickets/raisedticket'); 

const app = express();

app.use(cors({
    origin:true,
    credentials:true
}));
app.use(express.urlencoded({ extended : true }));
app.use(express.json());
app.use(cookieParser());
app.use('/login', authenticate);
app.use('/signUp', createUserAccount);
app.use('/tickets', userRaisedTicket);


app.listen(process.env.PORT, ()=>{
    console.log(`server is running on ${process.env.PORT}`);
})