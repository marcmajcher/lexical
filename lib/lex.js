'use strict';

module.exports = {
  // get word count
  wordCount: function(text) {
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
  }
};
