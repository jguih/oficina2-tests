const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/views', express.static('./oficina-de-integracao/views'));
app.use('/js', express.static('./oficina-de-integracao/js'));
app.use('/css', express.static('./oficina-de-integracao/css'));
app.use('/img', express.static('./oficina-de-integracao/img'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})