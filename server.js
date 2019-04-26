const express = require('express');
const app = express();
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}));


app.use('/',express.static(__dirname+'/dist/maths'))

app.listen(process.env.PORT || 4200);