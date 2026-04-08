const express = require('express');
const app = express();
app.use(express.json()); // Essential to read Photon's JSON payload

// The endpoint Photon will call
app.post('/photon-webhook', (req, res) => {
    console.log("Received data from Photon:", req.body);

    // YOU MUST return ResultCode: 0 for Photon to succeed
    res.status(200).json({ "ResultCode": 0 });
});

// Use Render's dynamic port or default to 3000
const PORT = process.env.PORT || 1000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
