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
})

router.get('/', async (req, res) => {
  const arr = await parser.parseURL(feedUrl)
  arr.items.length = 47
  res.json(arr)
})

module.exports = router
