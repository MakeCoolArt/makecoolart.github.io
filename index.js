const express = require('express');
const app = express();
app.use(express.json());

// Mandatory Response for Photon
app.post('/photon-webhook', (req, res) => {
    console.log("New Message Received by Webhook:", req.body.Message);
    
    // Photon REQUIREs this specific JSON response to succeed
    res.status(200).json({ "ResultCode": 0 });
});

// Root URL to confirm the server is live in your browser
app.get('/', (req, res) => {
    res.send("Webhook server is active!");
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on port ${PORT}`);
});
