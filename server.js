var express = require('express');
const multer  = require('multer')
const upload = multer({ dest: 'public/' })

var app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ status: 200, message: "Server is running <3" });
});

var server = app.listen(5000, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("app listening at http://%s:%s", host, port)
})