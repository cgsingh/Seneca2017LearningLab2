// First require (e.g., load) our seneca.js module
var seneca = require('./seneca');

/**
 * Tests for seneca.isValidEmail()
 */
describe('seneca.isValidEmail()', function() {
	
  test('returns true for simple myseneca address', function() {
    var simpleEmail = 'someone@myseneca.ca';
    expect(seneca.isValidEmail(simpleEmail)).toBe(true);
  });

  test('returns false for a non-myseneca address', function() {
    var gmailAddress = 'someone@gmail.com';
    expect(seneca.isValidEmail(gmailAddress)).toBe(false);
  });
  
  test('returns false for a null value', function() {
    var simpleEmail = null;
    expect(seneca.isValidEmail(simpleEmail)).toBe(false);
  });
  
  test('returns false for a non-string value (int)', function() {
    var simpleEmail = 1;
    expect(seneca.isValidEmail(simpleEmail)).toBe(false);
  });
  
  test('returns true for leading white space', function() {
    var simpleEmail = ' test@myseneca.ca';
    expect(seneca.isValidEmail(simpleEmail)).toBe(true);
  });
  
  test('returns true for professor email address', function() {
    var simpleEmail = 'someone@senecacollege.ca';
    expect(seneca.isValidEmail(simpleEmail)).toBe(true);
  });
  
  test('returns true for old seneca style email address', function() {
    var simpleEmail = 'someone@senecac.on.ca';
    expect(seneca.isValidEmail(simpleEmail)).toBe(true);
  });

});

/**
 * Tests for seneca.formatSenecaEmail()
 */
describe('seneca.formatSenecaEmail()', function() {

  test('adds @myseneca.ca to the end of name', function() {
    var name = 'mshaw';
    expect(seneca.formatSenecaEmail(name)).toBe('mshaw@myseneca.ca');
  });
  
  test('null should return null', function() {
    var name = null;
    expect(seneca.formatSenecaEmail(name)).toBe(null);
  });
  
  test('leading and trailing white space should be okay', function() {
    var name = '  mshaw ';
    expect(seneca.formatSenecaEmail(name)).toBe('mshaw@myseneca.ca');
  });
  
  test('name with an @ symbol should return null', function() {
    var name = 'mshaw@myseneca.ca';
    expect(seneca.formatSenecaEmail(name)).toBe(null);
  });

});