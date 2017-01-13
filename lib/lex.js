'use strict';

const summarize = require('summarizely');

module.exports = {
  commonWords: [
    'a', 'an', 'the', 'to', 'mr', 'mrs', 'ms', 'dr', 'if',
    'on', 'his', 'her', 'with', 'of', 'and', 'or', 'for',
    'in', 'he', 'she', 'had', 'has', 'was', 'that', 'but',
    'by', 'it', 'not', 'as', 'who', 'what', 'is', 'i'
  ],

  wordCount(text) {
    // const arr = text.split(/\s+/).filter(e => e.length > 0);
    // return arr.length;
  },

  charCount(text, options = {}) {
    if (options.noPunctuation) {
      text = text.replace(/\W/g, '');
    }
    else if (options.noSpaces) {
      text = text.replace(/\s/g, '');
    }
    return text.length;
  },

  wordFreq(text, excludeCommon = true) {
    return text.split(/\s+/).reduce((l, c) => {
      const key = c.replace(/[\W\d]/g, '').toLowerCase();
      if (!key || (excludeCommon && this.commonWords.indexOf(key) >= 0)) {
        return l;
      }
      l[key] = key in l ? l[key] + 1 : 1;
      return l;
    }, {});
  },

  mostFreq(text, num = 10) {
    const index = this.wordFreq(text);
    return Object.keys(index)
      .sort((a, b) => index[b] - index[a])
      .map(e => ({
        word: e,
        count: index[e]
      }))
      .slice(0, num);
  },

  leastFreq(text, num = 10) {
    const index = this.wordFreq(text);
    return Object.keys(index)
      .sort((a, b) => index[a] - index[b])
      .map(e => ({
        word: e,
        count: index[e]
      }))
      .slice(0, num);
  },

  summarize(text) {
    return summarize(text);
  }

};
