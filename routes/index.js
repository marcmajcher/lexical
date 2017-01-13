'use strict';

const express = require('express');
const router = express.Router();
const lex = require('../lib/lex');

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Lexical'
  });
});

router.post('/text', (req, res) => {
  const intext = req.body.intext;
  const wordCount = lex.wordCount(intext);
  const charCount = lex.charCount(intext);
  const charCountSpaces = lex.charCount(intext, {
    noSpaces: true
  });
  const charCountPunctuation = lex.charCount(intext, {
    noPunctuation: true
  });

  res.render('result', {
    intext,
    charCount,
    charCountSpaces,
    charCountPunctuation,
    wordCount
  });
});

module.exports = router;
