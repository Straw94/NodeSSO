const fs = require('fs');
const redirect = require('../untils/redirect.js');

module.exports = (app) => {
  // 登陆重定向测试
  app.get('/app/test/redirect', function(req,res) {
    redirect(res);
    res.end();
  });

  app.post('/app/api/login', function(req, res) {
      res.send(req.body);
  });

  // 登陆
  app.get('/app/login', function(req, res) {
    fs.readFile('./pages/login.html', 'utf8', function(err, data){
      if(err) console.log(err)
      res.send(data);
    })
  })
}
