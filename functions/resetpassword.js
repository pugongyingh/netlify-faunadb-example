const nodemailer = require('nodemailer');
const faunadb = require('faunadb');
const jwt = require('jsonwebtoken');
const q = faunadb.query;
const client = new faunadb.Client({
  secret: `fnADubw0wCACCJEA8UYRiSeDmSRRso8z-Wk-N5Bd`,
});
exports.handler = async (event, context) => {
   const  body = JSON.parse(event.body);
   //var username = body.email;
    var token = body.token;
   var emaill ;
var expp ;
    let decoded = "777";

try {
	var	jwtToken = jwt.verify(token, 'sdf8wfhh#aef2fi22');
	emaill = jwtToken.emaill;
	expp = new Date(jwtToken.exp * 1000);
        return {
        statusCode: 201,
        body: expp
        }
		
}catch (err) {
        return {
        statusCode: 203,
        body: "errr000"
         }
}
	
}
