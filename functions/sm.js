const nodemailer = require('nodemailer');
const faunadb = require('faunadb');
const jwt = require('jsonwebtoken');
const q = faunadb.query;

const client = new faunadb.Client({
  secret: `fnADs5ccBTACCm5kbmjncetPrz6o9t2bqV5gQvZl`,
});


exports.handler = (event, context) => {
   var username = event.email;
    const user = await client.query(
      q.Get(q.Match(q.Index('users_by_username'), username)),
    );

    if (user == null) {
      return {
        statusCode: 400,
        body: "errr"
      }
    }
        return {
        statusCode: 200,
        body: "okk"
      }
}
