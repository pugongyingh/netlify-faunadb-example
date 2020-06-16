const nodemailer = require('nodemailer');
const faunadb = require('faunadb');
const jwt = require('jsonwebtoken');
const q = faunadb.query;
const client = new faunadb.Client({
  secret: `fnADubw0wCACCJEA8UYRiSeDmSRRso8z-Wk-N5Bd`,
});
exports.handler = async (event, context) => {
   const  body = JSON.parse(event.body);
   var username = body.email;
    const user = await client.query(q.Get(q.Match(q.Index('users_by_username'), username)),);
      if (username == user.data.username) {

    var min = "10000";
var  mm = process.env.mm;
var  tmp;
 var  sub;
  var  ss = parseInt(body.send);
  var  tt = parseInt(body.tmp);

     mm =mm.split('!')[ss];

 var  mmm=mm.split(';')[0];
 var  pp=mm.split(';')[1];
 var  sss = mmm.split('@')[1];
 var  hh;
           if(sss == "sina.com.cn")
          {
             hh="smtp.sina.com";
          }
          else
          {
              hh="smtp."+ sss;
          }
    const transport = nodemailer.createTransport({
    host: hh, // 主机
    secureConnection: true, // 使用 SSL
    port: 465, // SMTP 端口
    auth: {
        user: mmm,
        pass: pp
    }
    });

    //const { email }  = JSON.parse(event.body) 
    let mailOptions = {
      from: mmm,
      to: username,
      subject: "sub",
      text: "tmp",
  };
     
        
        
        
        return {
        statusCode: 200,
        body: min
      }
      };
        return {
        statusCode: 200,
        body: "errr"
      }
}
