const express = require("express"),
   bodyParser = require('body-parser'),
         path = require('path'),
         cors = require('cors'),
      DB_NAME = "examdb",
         port = 8000,
          app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, './client')));

require('./server/utils/mongoose')(DB_NAME);
require('./server/utils/routes')(app);

app.all('*', (req, res, next) => {
  res.sendFile(path.resolve('./client/build/index.html'));
})

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
})







