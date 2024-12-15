const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    const { creditUtilization, paymentHistory } = req.body;
    const predictedScore = 750; // Placeholder
    res.json({ predictedScore });
});

module.exports = router;
