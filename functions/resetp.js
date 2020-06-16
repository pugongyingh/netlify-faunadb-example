
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
  if (!token) {
        return {
        statusCode: 200,
        body: "tokenerrr"
      }
  } else {
    let decoded = ''
    jwt.verify(token, 'secret', (err, result) => {
      if (err) {
        if (err.name === 'JsonWebTokenError') {
        return {
        statusCode: 200,
        body: "toerrr"
      }
        }
        if (err.name === 'TokenExpiredError') {
        return {
        statusCode: 200,
        body: "ttooerrr"
      }
        }
      }
      decoded = result;
        return {
        statusCode: 200,
        body: decoded
      }      
    })    
}
