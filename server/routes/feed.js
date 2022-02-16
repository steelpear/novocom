/* eslint-disable no-console */
const fs = require('fs')
const express = require('express')
const router = express.Router()
const Parser = require('rss-parser')
const parser = new Parser()

router.get('/', (req, res) => {
  fs.readFile('feeds.config', 'utf8', async (err, data) => {
    if (err) { console.log(err) }
    const arr = await parser.parseURL(data)
    const out = arr.items.filter(item => item.enclosure)
    if (out.length > 47) { out.length = 47 }
    res.json(out)
  })
})

router.get('/ads', async (req, res) => {
  await fs.readFile('ads.config', 'utf8', (err, data) => {
    if (err) { console.log(err) }
    res.json(data.split(','))
  })
})

module.exports = router
