// getting-started.js
// require the library
const mongoose = require('mongoose');

//connect ot the database
mongoose.connect('mongodb://localhost/contact_list_db');
   
//aquire the connnection to check if it is successfull
const db=mongoose.connection;
    
//error  
db.on('error',console.error.bind( console,'error connecting to db'));

//up and running then print the message
db.once('open', function(){

        console.log("sucessfully connected to the db");

});
  