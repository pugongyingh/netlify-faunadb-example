const nodemailer = require('nodemailer');
const faunadb = require('faunadb');
const jwt = require('jsonwebtoken');
const q = faunadb.query;

const client = new faunadb.Client({
  secret: `fnADubw0wCACCJEA8UYRiSeDmSRRso8z-Wk-N5Bd`,
});


exports.handler = async (event, context) => {
   const  body = JSON.parse(event.body);
   //var username = event.email;
   var username = body.email;
  
     
  
    const user = await client.query(q.Get(q.Match(q.Index('users_by_username'), username)),);
      if (username == user.data.username) {
        return {
        statusCode: 200,
        body: "okkk"
      }
      } else {
        return {
        statusCode: 200,
        body: "errr"
      }
      }

}
