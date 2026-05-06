const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Willkommen bei Orgrimmar Systems' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/api/status', (req, res) => {
  res.json({ shop: 'online', version: '1.0.0' });
});

module.exports = app;
