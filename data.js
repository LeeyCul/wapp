const express = require('express')
const router = express.Router()

router.get('/play', function(req, res) {
    //调用mock方法模拟数据
    const data = { app_page: 'pagesA/play/index', play_show: true }
    return res.json(data)
})

module.exports = router
