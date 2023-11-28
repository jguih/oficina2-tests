const express = require('express');
var shell = require('shelljs');
const path = require('path');
const app = express();
const port = 3030;
const clonedRepoPath = path.join(__dirname, "/oficina-de-integracao");

shell.cd(__dirname);
shell.exec("git clone \"https://github.com/brenaSF/oficina-de-integracao.git\"");
shell.cd(clonedRepoPath);
console.log("path to cloned repo: " + clonedRepoPath);
shell.exec("git pull origin main");

app.get('/', (req, res) => {
  res.redirect('/views/login.html');
})

const viewsPath = path.join(__dirname, '/oficina-de-integracao/views');
const jsPath = path.join(__dirname, '/oficina-de-integracao/js');
const cssPath = path.join(__dirname, '/oficina-de-integracao/css');
const imgPath = path.join(__dirname, '/oficina-de-integracao/img');

app.use('/views', express.static(viewsPath));
app.use('/js', express.static(jsPath));
app.use('/css', express.static(cssPath));
app.use('/img', express.static(imgPath));

app.listen(port, () => {
  console.log(`oficina-de-integracao app listening on port ${port}`);
})