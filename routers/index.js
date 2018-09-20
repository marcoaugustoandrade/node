const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: "API Gerenciamento de Veículos 1.0"
    });
});

module.exports = router;