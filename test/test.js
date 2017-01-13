'use strict';

// wordCount:
//  'my dog is yellow' => 4
//  'this\nis a\ttest' => 4
//  '    this should     have five words     ' => 5
//  123 => error
//  '' => 0
//  [ ... anything ... ] =>
//
// charCount:
//  'abcde' => 5
//  ' asdf asdf  asdf asdf asdf ' => 27
//  '' => 0
//  [], etc => error
//  'this is a word' => 11 w/no spaces
//  '@#$&&$%@$%W' => 1
//  'aBDeDFG' =>

const expect = require('chai').expect;
const lex = require('../lib/lex');

describe('Word Count', () => {

  it('should count the words', (done) => {
    const str = 'my dog is yellow';
    expect(lex.wordCount(str)).to.equal(4);
    done();
  });
  it('should catch special spaces', (done) => {
    const str = 'this\nis a\ttest';
    expect(lex.wordCount(str)).to.equal(4);
    done();
  });
  it('should catch extra spaces', (done) => {
    const str = '    this should     have five words     ';
    expect(lex.wordCount(str)).to.equal(5);
    done();
  });
  it('should handle empty string', (done) => {
    const str = '';
    expect(lex.wordCount(str)).to.equal(0);
    done();
  });

  it('should fail on numbers', (done) => {
    const testFn = () => {
      lex.wordCount(12345);
    };
    expect(testFn).to.throw(Error);
    done();
  });
  it('should fail on arrays', (done) => {
    const testFn = () => {
      lex.wordCount([]);
    };
    expect(testFn).to.throw(Error);
    done();
  });
});
