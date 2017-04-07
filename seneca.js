// [INFO] See discussion of node.js exports here:
// https://www.sitepoint.com/understanding-module-exports-exports-node-js/

/**
 * Given a string `email`, return `true` if the string is in the form
 * of a valid Seneca College email address, `false` othewise.
 */
exports.isValidEmail = function (email) {
  if (typeof email !== 'string' || !email) {
    return false;
  }
  const containsAt = email.indexOf('@');
  if (containsAt !== -1 && containsAt !== 0) { // must exist, but must not be first char, obviously
    const address = email.substr(containsAt);
    if (address === '@myseneca.ca' || address === '@senecacollege.ca' || address === '@senecac.on.ca') {
      return true;
    }
  }
  return false;
};

/**
 * Given a string `name`, return a formatted Seneca email address for
 * this person. NOTE: the email doesn't need to be real/valid/active.
 */
exports.formatSenecaEmail = function (name) {
  if (typeof name === 'string' && name.indexOf('@') === -1) {
    return name.trim().concat('@myseneca.ca');
  }
  return null;
};
