
const express = require('express')
app = express();

app.get('/', (req, res) => {
    res.sendfile("public/first.html", { root: __dirname });
})

app.get('/schedule', (req, res) => {
    res.sendfile("public/second.html", { root: __dirname });
})

app.listen(5000);