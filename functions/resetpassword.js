const nodemailer = require('nodemailer');
const faunadb = require('faunadb');
const jwt = require('jsonwebtoken');
const q = faunadb.query;
const client = new faunadb.Client({
  secret: `fnADubw0wCACCJEA8UYRiSeDmSRRso8z-Wk-N5Bd`,
});
exports.handler = async (event, context) => {
  const  body = JSON.parse(event.body);
   var token = body.token;  
    var username ="88" ;
  var password ="99";

	var	jwtToken = jwt.verify(token, 'sdf8wfhh#aef2fi22');

       username = jwtToken.emaill;
       password = jwtToken.passs;
	
	
	const data = {
        username,
        password,
    };
  const record = {
    data: data,
  };

  return client
    .query(q.Create(q.Collection('users'), record))
    .then(response => {
      return {
        statusCode: 200,
        body: JSON.stringify(response),
      };
    })
    .catch(error => {
      return {
        statusCode: 400,
        body: JSON.stringify(error),
      };
    });
};
