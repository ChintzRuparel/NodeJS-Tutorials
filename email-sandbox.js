var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'sartess',  //personal Email
  auth: {
    user: 'cipapiy262@sartess.com',
    pass: ''
  }
});

var mailOptions = {
  from: 'chintz0952@gmail.com',
  to: 'twodscapital@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

var mailOptions = {
  from: 'chintz0952@gmail.com',
  to: 'chintan.ruparel73@nmims.edu.in',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};


transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else 
  {
    console.log('Email sent: ' + info.response);
  }
});