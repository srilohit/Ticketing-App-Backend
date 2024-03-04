const tickets = require('../models/ticket_model/ticketM');

const allTickets = (req, res)=>{
    tickets.find({}).then((data)=>{
        res.json(data);
    });
};

const allUserTickets = (req, res)=>{
    // console.log(req.params.id);
    tickets.find({id : req.params.id}).then((data)=>{
        res.json(data);
        // console.log(data);
    });
};

const raisedTickets = (req, res)=>{
    // console.log(req.body);
    let addTicket = new tickets(req.body); 
    addTicket.save(); 
    res.send('ticket recived');
};

const assignedTicket = (req, res)=>{
    // console.log(req.body, req.params.id);
    tickets.findByIdAndUpdate({_id : req.params.id}, req.body).then((data)=>{
        // console.log(data);
        res.send('assigned ticket received'); 
    });
};

module.exports = {
    allTickets,
    allUserTickets,
    raisedTickets,
    assignedTicket
}; 