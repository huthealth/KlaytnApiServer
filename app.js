const express = require('express');
const app = express();

app.use('/users', require('./api/users'));
app.use('/klaytn',require('./api/klaytn'))

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});