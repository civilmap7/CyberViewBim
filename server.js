//APS_CLIENT_ID="6cK98AX4AwxjqkNVyp7gQh8FYkrNmoTJ"
// APS_CLIENT_SECRET="2zWeUp3vlG89kznw"



const express = require('express');
const { PORT } = require('./config.js');

let app = express();
app.use(express.static('wwwroot'));
app.use(require('./routes/auth.js'));
app.use(require('./routes/models.js'));
app.listen(PORT, function () { console.log(`Server listening on port ${PORT}...`); });

