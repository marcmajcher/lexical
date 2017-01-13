'use strict';

const express = require('express');
const router = express.Router();
const lex = require('../lib/lex');

router.post('characters/count', (req, res) => {
  res.json(lex.charCount(req.body.text));
});

router.post('characters/nospaces', (req, res) => {
  res.json(lex.charCount(req.body.text), {
    noSpaces: true
  });
});

router.post('characters/nopunctuation', (req, res) => {
  res.json(lex.charCount(req.body.text), {
    noPunctuation: true
  });
});

router.post('words/count', (req, res) => {
  res.json(lex.wordCount(req.body.text));
});

router.post('words/frequency', (req, res) => {
  res.json(lex.wordFreq(req.body.text));
});

router.post('words/most', (req, res) => {
  res.json(lex.mostFreq(req.body.text));
});

router.post('words/least', (req, res) => {
  res.json(lex.leastFreq(req.body.text));
});

router.post('summary', (req, res) => {
  res.json(lex.summarize(req.body.text));
});

module.exports = router;
