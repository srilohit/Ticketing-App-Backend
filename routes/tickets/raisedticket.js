const express = require('express');
const { allTickets, allUserTickets, raisedTickets, assignedTicket } = require('../../controllers/raisedTicketControl');
const router = express.Router();

router.get('/getAllRaisedTickets', allTickets); 
router.get('/userTickets/:id', allUserTickets); 
router.post('/raisedTicket', raisedTickets);
router.put('/updateTicket/:id', assignedTicket);


module.exports = router;  