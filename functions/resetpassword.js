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
 //  var username ;
 //  var password;


  try {

     const results = await client.query(
       q.Create(q.Collection("users"), {
         data: {
           title: "la masdf sdfm sddsde",
           youtubeId: "thisisisiannsnid",
           owner: "other"
         }
       })
     );

	  
        return {
        statusCode: 201,
        body: "888"
        }
		
}catch (err) {
        return {
        statusCode: 203,
        body: "errr000"
         }
}
	
}
