const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/test', (req, res) => {
   console.log("Request Received from: " + req.hostname)
   const msg = `Howdy from Backend App! Now: ${new Date().toLocaleString()}`
   res.send({'message': msg});

});

const port = process.env.PORT || 3005;
console.log(`Backend Server listening on port ${port}`);
app.listen(port);
