"use strict";

var bodyParser     = require("body-parser"),
    $              = require('jquery'),
    express        = require('express'),
    // transporter = nodemailer.createTransport(transport[, defaults]),
    app            = express(),
    nodemailer     = require('nodemailer');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
// app.set('view engine', 'html');
// app.use(express.static(__dirname + 'public'));
// app.use(express.static('public'));

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport(process.env.SMTPS);

// Landing Page
app.get('/', function(req, res){
  res.render('index.html');
});

app.post('/enquiry', function(req, res){
  // setup e-mail data with unicode symbols
  let mailOptions = {
      from: req.body.email, // sender address
      to: process.env.EMAIL, // list of receivers
      }

      if(req.body.name){
        mailOptions.subject = "You've receieved an enquiry from " + req.body.name
      } else {
        mailOptions.subject = "You've receieved an enquiry from " + req.body.email
      }
      if(req.body.message){
        mailOptions.text = "You've received an enquiry from " + req.body.email + ". They said: '" + req.body.message + "'"
      } else {
        mailOptions.text = "You've received an enquiry from " + req.body.email + ". They didn't write a message."
      }
      // html: '<b>Hello world ?</b>' // html body


  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
      if(error){
          return console.log(error);
      }
      console.log('Message sent: ' + info.response);
      res.json(info)
  });
})

app.get("/store-detectives", function(req, res){
  res.render('store-detectives.html')
});

app.get("/store-detectives1", function(req, res){
  res.render('store-detectives1.html')
});

app.get("/store-detectives2", function(req, res){
  res.render('store-detectives2.html')
});

// ======== For Heroku ========
// app.listen(process.env.PORT || 8080 , process.env.IP, function(){
// ======== For Local =========
app.listen(3000, process.env.IP, function(){
  console.log('Fire it UP!');
});
