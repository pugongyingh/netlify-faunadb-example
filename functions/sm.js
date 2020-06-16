const nodemailer = require('nodemailer');
const faunadb = require('faunadb');
const jwt = require('jsonwebtoken');
const q = faunadb.query;
exports.handler = async (event, context) => {
   const  body = JSON.parse(event.body);
   var username = body.email;
    const user = await client.query(q.Get(q.Match(q.Index('users_by_username'), username)),);
      if (username == user.data.username) {
const client = new faunadb.Client({
  secret: `fnADubw0wCACCJEA8UYRiSeDmSRRso8z-Wk-N5Bd`,
});
var  mm = process.env.mm;
var  tmp ="8888";
 var  sub = "777“;


     
        
        
        
        return {
        statusCode: 200,
        body: "min"
      }
      } 
        return {
        statusCode: 200,
        body: "errr"
      }
}
