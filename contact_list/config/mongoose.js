// install mongoose library then start using it 
const mongoose = require('mongoose');
//setting up monogoose.connect to connect with the localhost of mongodb
mongoose.connect('mongodb://127.0.0.1:27017/contact_list_db');
        //define db for mongoose connecton
        const db= mongoose.connection;
        //error  
        db.on('error',console.error.bind( console,'error connecting to db'));
      
        //up and running then print the message
        db.once('open', function(){
      
              console.log("sucessfully connected to the db");
      });
 
  