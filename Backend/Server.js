var express = require('express');
var cors = require('cors')
var app = express();

app.use(cors())


app.listen(3001, ()=> console.log('Server runnin on port 3001 :)'))