
const nodemailer = require('nodemailer');
const faunadb = require('faunadb');
const jwt = require('jsonwebtoken');
const q = faunadb.query;
const client = new faunadb.Client({
  secret: `fnADubw0wCACCJEA8UYRiSeDmSRRso8z-Wk-N5Bd`,
});
exports.handler = async (event, context) => {
  const  body = JSON.parse(event.body);
   var username = body.username;  
    try {
        let { data } = await client.query(q.Get(q.Match(q.Index('users_by_username'), username)),);
        if (username == data.username) {
        return {
        statusCode: 202,
        body: "此用户已注册"
      }
	}}
    catch (e) {     
    const transport = nodemailer.createTransport({
    host: "smtp.qq.com", // 主机
    secureConnection: true, // 使用 SSL
    port: 465, // SMTP 端口
    auth: {
        user: "2787616995@qq.com",
        pass: "xbkkbksmyosrdfci"
    }
    });		
     const token = jwt.sign(
      {emaill:username},
      'sdf8wfhh#aef2fi22',
      {
        expiresIn: '1h',
      },
    );
const url = `http://127.0.0.1:8076/dy/change-password.html?token=` + token;
    let mailOptions = {
      from: "2787616995@qq.com",
      to: username,
      subject: "111",
      html: `Reset link: <a href="http://127.0.0.1:8076/dy/change-password.html?token=${token}">http://127.0.0.1:8076/dy/change-password.html?token=${token}</a>`,
  }; 
  let value = await transport.sendMail(mailOptions);
// min= JSON.stringify(value.response);       
  return {
        statusCode: 203,
        body: "重置密码链接已发到你的邮箱"
      }     
    } 
}
