const express = require('express');
const app = express();
app.use(express.json());

// 1. ADD THIS: This handles when YOU visit the website in a browser
app.get('/', (req, res) => {
    res.send('Webhook server is live and waiting for Photon!');
});

// 2. This handles when PHOTON sends data (not viewable in browser)
app.post('/photon-webhook', (req, res) => {
    console.log("Received from Photon:", req.body);
    res.status(200).json({ "ResultCode": 0 });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
