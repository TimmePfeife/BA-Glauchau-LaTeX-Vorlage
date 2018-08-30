const express = require('express');
const fs = require('fs');
const helmet = require('helmet');
const http = require('http');
const https = require('https');

// Zertifikate einlesen
const optionsHttps = {
  cert: fs.readFileSync('./config/cert/certificate.pem'),
  key: fs.readFileSync('./config/cert/key.pem'),
};

// Express Instanz erstellen
const app = express();
const httpPort = 8080;
const httpsPort = 8443;

// Sicherheitsrelevante Header setzen
app.use(helmet());

// HTTP Anfragen an HTTPS weiterleiten
app.use((req, res, next) => {
  if (req.secure) {
    next();
  } else {
    res.redirect(`https://${req.hostname}:${httpsPort}${req.url}`);
  }
});

http.createServer(app).listen(httpPort);
console.log(`HTTP-Server started on port ${httpPort}`);

https.createServer(optionsHttps, app).listen(httpsPort);
console.log(`HTTPS-Server started on port ${httpsPort}`);