module.exports = (res, url) => {
  res.writeHead(302,{
    'Location': url || '/app/login'
  });
  res.end();
}
