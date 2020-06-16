const nodemailer = require('nodemailer');
const faunadb = require('faunadb');
const jwt = require('jsonwebtoken');
const q = faunadb.query;

const client = new faunadb.Client({
  secret: `fnADubw0wCACCJEA8UYRiSeDmSRRso8z-Wk-N5Bd`,
});


exports.handler = async (event, context) => {
   //var username = event.email;
    const user = await client.query(q.Get(q.Match(q.Index('users_by_username'), "pgyhh@sina.cn")),);


        return {
        statusCode: 201,
        body: user.data.username
      }
}
