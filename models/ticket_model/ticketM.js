const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect(process.env.DB_URL);

const ticketSchema = new Schema({
    issue : String,
    productName : String,
    image : String,
    date : Date,
    username : String,
    id : String,
    employee_id : String
});

const ticketModel = mongoose.model('Raise_Ticket', ticketSchema);

module.exports = ticketModel;