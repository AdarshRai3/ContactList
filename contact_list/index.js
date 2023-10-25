// we have to start our learning towards understanding MVC model : module , view , controller 
// controller : express.js
//first we make the folder and then we use command cd contact_list/ to get in the server
// after that we install npm init to add package,json in our project
// then we install express framework using the command npm install express --save since we alrady had node.js installed if not then in that casee we csn use command npm install --save
// const { randomInt } = require('crypto');
const express =require ('express');
// using require to use the module in our project same as we use in http 
const path = require('path');
// setting path to use in dynamically templete provided by ejs 
const port=8000;
//choosing the port in which we want to run our project
const db = require('./config/mongoose');
// library for setting up database

const Contact= require('./model/contact');

const app =express();
// express is the function that contains all the function that we are going to require in our project 

app.set('view engine','ejs')
app.set('views', path.join(__dirname,'views'));
app.use(express.urlencoded());
// app.use is used to added the parser to our project, app.use is used for the midware it is used to request , response and process the data
// app can do lot of the funtion to app.set is one such function in which use app.set(function :value)
// similarly for app.set('views',path.join(_dirname,'')) this soft and dynamic coding of the path we and use something like cd c/destop... but that 
// express.urlencoded is called every time any other fnction is caled as it is as it is middleware it is used to preprocess
app.use(express.static('assets'));
// middleware app.use (express.static('')) consist of folder of assets and in that assets folder consist images , css and js files 
// middleware 1
// app.use(function(req,res,next){
     
//     console.log('Middleware 1 is called');
//     req.myname=
//     next();

// });
// // middleware 2
// app.use(function(req,res,next){
//    console.log('Middleware 2 is called');
//    next();
// });
var contactList = [
    {
        name :"Adarsh Rai",
        phone:"1234567890"
    },
    {
        name:"Samyam Jain",
        phone:"1234568799"
    },
    {
        name:"Yash Raj Jain",
        phone:"9999999999"
    }
];
// this we add the array for the contact list and add the context to it 
app.get('/', async (req, res)=>{
    try {
        const contacts = await Contact.find({});
        return res.render('home',{
           title:"Contact list",
           contact_list:contacts
        });
    } catch (err) {
        console.log('error in fetching contacts', err);
        return res.status(500).send('Internal Server Error');
    }
});
//rather then using switch we app. request_name to control our page in express.js it just modularise our code better and there are multiple types of 2 are : non-ajax(get and post)and other 3 are ajax:(put,patch,delete)
// now we have move towards understanding template engines there are various types of templete engines one of them is handle bar js , but what we are using is Ejs Embeedded Javascript teplete and pug
// revision -1> install ejs 2>app.set view engine , viewpath 3>view directory +file 4>render using res.render
// in view extension we used is ejs not html
//debugging - not including library and syntax error not using correct brackets and colans and commas 
// app.get ('/practice',function(req,res){

//     return res.render('practice',
//     {
//       title: "let us play with ejs"
//     });

// });


// app.post('/create-contact',function(req,res)
// {
     
//     //   contactList.push(
//     //     {
//     //         name: req.body.name,
//     //         phone: req.body.phone
//     //     });
//     //    return res.redirect('/');
//     // we have commented this ince now we interacting with the database

//      Contact.create({
//         name: req.body.name,
//         phone: req.body.phone
//      },function(err,newContact){
//         if(err){
//             console.log('error in creating a conact');
//             return;
//         }
//          console.log('**********',newContact);
//          return res.redirect('back');
//      });
// });
// create the contact function using the app.post function and also using redirect function thAt will redirect the function to ./practice page.
//for deleting the phone number
// to delete contact from the contact list
app.post('/', async  (req, res)=> {
    try {
        // Create a new contact using async/await
        const newContact = await Contact.create({
            name: req.body.name,
            phone: req.body.phone
        });

        console.log('**********', newContact);
        return res.redirect('/');
    } catch (err) {
        console.log('error in creating a contact', err);
        return res.status(500).send('Internal Server Error');
    }
});
app.get('/delete-contact', async (req, res)=>{
    //console.log(req.query);
    // get the id from query in the url
    try{
        let id = req.query.id
        // console.log(id);
        //query to take the phone from the contact list and then delete it 
        // let contactindex = contactList.findIndex(contact => contact.phone == phone);
        // find the contact in the contact list using id then deleting it
        const deleteContact= await Contact.findByIdAndDelete(id);
    
        return res.redirect('back');
       
    }
    catch (err) {
        console.log('error in deleting a contact from database', err);
        return res.status(500).send('Internal Server Error');
    }
    
     
});
//as we understand till know that for doing anything in the system we need in this we nned a connetion and router we have till now learn 2 methods one is using req.params and req.query these app.get is the middleware that we used to request and response 
app.listen (port, function(err){

    if(err){
        console.log('Error in Running the server',err);
    }
        console.log('yup my express server is running in the port');

});
//app.listen handles the page to make sure that our node is up and running
//the contact we saved is visible as we load it as many times as we can also but when we kill the node all the data get erased.
// Quick summary of this project(Contact=List)
// create index.js and use command npm in it to set up our project
// npm install express,we started the server->by setting up library,port,path,app
// then we create app,listen to check the server is running on port and handelling the error 
//then we npm install ejs we set up view engine and views folder to hold our files using app.set to the set the path to view folder
// created the ejs file ->home.ejs
// we render our function using app.get in which we first set up the route and then we set up the controller function.
// then we set up our form to add the contacts in contact list since here we are not using ajax therefore use post and get function in form.
//setting up keys and values from the form and for that we use app.use(urlencoded) middleware
// to see, use and manipulate with the data that was passed in the form we need a middleware
// for static file then we again  us e another middleare app.use(express.static('assets')); and to access our static file 