const nodemailer = require('nodemailer');
const faunadb = require('faunadb');
const jwt = require('jsonwebtoken');
const q = faunadb.query;
const client = new faunadb.Client({
  secret: `fnADubw0wCACCJEA8UYRiSeDmSRRso8z-Wk-N5Bd`,
});

exports.handler = async (req, res) => {
    const { username, password } = req.body;
    if ( !username || !password ) {
        res.send('incomplete input!')
        return;        
    }
    try {
        let { data } = await client.query(q.Get(q.Match(q.Index('users_by_username'), username)),);
        if (password !=data.password) {
            res.send({error: 'wrong password'})
            return
        }
     const token = jwt.sign(
      {emaill: data.username},
      'sdf8wfhh#aef2fi22',
      {
        expiresIn: '1h',
      },
    );
    
        res.send({ token })
    }
    catch (e) {
        res.send({error: 'user not found'})
    }
}
