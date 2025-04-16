const express = require('express');
const app = express();
const PORT = 3000;

const VERIFY_TOKEN = 'jreletronicWebhook2025';

app.use(express.json());

// Verificação do Webhook
app.get('/webhook', (req, res) => {
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

  if (mode && token === VERIFY_TOKEN) {
    res.status(200).send(challenge);
  } else {
    res.sendStatus(403);
  }
});

// Receber mensagens
app.post('/webhook', (req, res) => {
  console.log(JSON.stringify(req.body, null, 2));
  res.sendStatus(200);
});

// Importante: escutar em 0.0.0.0 para aceitar conexões externas
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Webhook rodando na porta ${PORT}`);
});
