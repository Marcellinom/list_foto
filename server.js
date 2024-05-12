const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000
const { v4: uuidv4 } = require('uuid');
const bodyParser = require('body-parser');
const path = require('path')
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json({ limit: '50mb' }));

app.get('/', (req, res) => {
    return res.sendFile(path.join(__dirname,'index.html'));
})

app.get('/image/:file', (req, res) => {
    return res.sendFile(path.join(__dirname,`uploads/${req.params.file}`));
})

app.get('/all', (req, res) => {
    let dir = fs.readdirSync('uploads')
    return res.json(dir)
})

app.post('/', function (req, res) {
    let base64String = JSON.stringify(req.body)
    let base64Image = base64String.split(';base64,').pop();
    fs.writeFile(`uploads/${uuidv4()}.jpeg`, base64Image, {encoding: 'base64'}, function(err) {});
    return res.sendStatus(200)
})

app.listen(port, () => {
  console.log(`http://127.0.0.1:${port}`)
})

module.exports = app;