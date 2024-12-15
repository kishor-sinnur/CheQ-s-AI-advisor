const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    // Placeholder data
    const recommendations = [
        { title: "Low-interest Credit Card", benefit: "Save on interest" },
        { title: "Debt Consolidation", benefit: "Simplify repayments" }
    ];
    res.json(recommendations);
});

module.exports = router;
