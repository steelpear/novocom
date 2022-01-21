/* eslint-disable no-console */
const fs = require('fs')
const express = require('express')
const router = express.Router()
const Parser = require('rss-parser')
const parser = new Parser()
let feedUrl = ''

fs.readFile('feeds.config', 'utf8', (err, data) => {
  if (err) { console.log(err) }
  feedUrl = data.replace(/\r|\n/g, '')
  feedUrl = feedUrl.split(',')
})
router.get('/', async (req, res) => {
  res.json(await parser.parseURL('https://lenta.ru/rss'))
})

module.exports = router
