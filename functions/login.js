const nodemailer = require('nodemailer');
const faunadb = require('faunadb');
const jwt = require('jsonwebtoken');
const q = faunadb.query;
const client = new faunadb.Client({
  secret: `fnADubw0wCACCJEA8UYRiSeDmSRRso8z-Wk-N5Bd`,
});
exports.handler = async (event, context) => {
  
     const { username, password } = event.body;
    if ( !username || !password ) {
        return {
        statusCode: 201,
        body: "incomplete input!"
      }        
    }
    try {
        let { data } = await client.query(q.Get(q.Match(q.Index('users_by_username'), username)),);
        if (password !=data.password) {
        return {
        statusCode: 202,
        body: "wrong password"
      }    
        }
     const token = jwt.sign(
      {emaill: data.username},
      'sdf8wfhh#aef2fi22',
      {
        expiresIn: '1h',
      },
    );
			 return {
        statusCode: 200,
        body: token
      }
    }
    catch (e) {
           return {
        statusCode: 203,
        body: "user not found"
      }     
    } 
}
