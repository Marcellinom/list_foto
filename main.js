const express = require('express')
const fs = require('fs')
const app = express()
const { v4: uuidv4 } = require('uuid');
const bodyParser = require('body-parser');
const path = require('path')
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json({ limit: '50mb' }));

app.get('/', (req, res) => {
    return res.sendFile(path.join(process.cwd(),'index.html'));
})

app.get('/image/:file', (req, res) => {
    return res.sendFile(path.join(process.cwd(),`uploads/${req.params.file}`));
})

app.get('/all', (req, res) => {
    let dir = fs.readdirSync(path.join(process.cwd(),`uploads`))
    return res.json(dir)
})

app.post('/', function (req, res) {
    let base64String = JSON.stringify(req.body)
    let base64Image = base64String.split(';base64,').pop();
    fs.writeFile(path.join(process.cwd(),`uploads/${uuidv4()}.jpeg`), base64Image, {encoding: 'base64'}, function(err) {});
    return res.sendStatus(200)
})
const port = process.env.PORT | 8080
app.listen(port, () => {
  console.log(`http://127.0.0.1:${port}`)
})

module.exports = app;
