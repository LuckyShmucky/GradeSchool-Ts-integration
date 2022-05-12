const express = require('express')
const router = express.Router()

router.get('/', (req, res) =>{
    res.status(200).json({
        message: "These are the districts"
    })
})

module.exports = router