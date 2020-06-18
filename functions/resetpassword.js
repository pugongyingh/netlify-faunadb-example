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
   var email ;
   var password;
var expp ;
    let decoded = "777";

try {
	var	jwtToken = jwt.verify(token, 'sdf8wfhh#aef2fi22');
	email = jwtToken.emaill;
        password = jwtToken.passs;
    const user = await client.query(
      q.Create(q.Collection('users'), {data: { email, password},}),
    );
        return {
        statusCode: 201,
        body: user.username
        }
		
}catch (err) {
        return {
        statusCode: 203,
        body: "errr000"
         }
}
	
}
