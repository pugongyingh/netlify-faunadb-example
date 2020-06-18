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
   var username ;
   var password;

try {
	var	jwtToken = jwt.verify(token, 'sdf8wfhh#aef2fi22');
        username = jwtToken.emaill;
        password = jwtToken.passs;
	const data = {
        username,
        password,
    };
	const { username, password } = JSON.parse(jwtToken);
        //const user = await client.query(q.Create(q.Collection('users'), {data,}),); 
	const user = await client.query(q.Create(q.Collection('users'), { data }));
        return {
        statusCode: 201,
        body: password
        }
		
}catch (err) {
        return {
        statusCode: 203,
        body: "errr000"
         }
}
	
}
