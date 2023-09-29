const mongoose=require('mongoose');

const db = require ('mongoose');
// Creating the schema for our project
const contactSchema=new mongoose.Schema({
    name:{
           type: String,
           required: true

    },
    phone:{
           type:String,
           reqired: true
    }

});
// create a collection for our schema
const Contact=mongoose.model('Contact',contactSchema);

// exports this module to index.js
module.exports= Contact;