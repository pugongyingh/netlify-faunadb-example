
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

    let decoded = "777";
  	if (token != null) {
		try {
		var	jwtToken = jwt.verify(token, 'sdf8wfhh#aef2fi22');
			if (jwtToken != null) {
				emaill = jwtToken.emaill;
				return emaill;
			}
			else
				return -1;
		}
		catch (err) {
			// console.log("verifyUser JWT fail");
			return -1;
		}
	}
  
  

  
  
  
}
