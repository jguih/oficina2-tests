// Front-end server config file

const express = require('express');
const path = require('path');
const app = express();

const port = 3030;

app.get('/', (req, res) => {
  res.redirect('/views/login.html');
})

const viewsPath = path.join(__dirname, '/views');
const jsPath = path.join(__dirname, '/js');
const cssPath = path.join(__dirname, '/css');
const imgPath = path.join(__dirname, '/img');

app.use('/views', express.static(viewsPath));
app.use('/js', express.static(jsPath));
app.use('/css', express.static(cssPath));
app.use('/img', express.static(imgPath));

app.listen(port, () => {
  console.log(`oficina-de-integracao app listening on port ${port}`);
})