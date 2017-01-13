'use strict';

const summarize = require('summarizely');

module.exports = {

  wordCount(text) {
    return text.split(/\s+/).length;
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

  wordFreq(text) {
    // const index = {};
    return text.split(/\s+/).reduce((l, c) => {
      const key = c.replace(/[\W\d]/g, '');
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
