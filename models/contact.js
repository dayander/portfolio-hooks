'use strict';


let mongoose = require('mongoose');


let contactSchema = mongoose.Schema({
    name: String,
    email: String,
    message: String,
});


let Contact = mongoose.model('Contact', contactSchema);


module.exports = Contact;