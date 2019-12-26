function insertDash(word) {
  // TODO: implement the method and return word with dashes

  const re = /([^aeiou\s])([^aeiou\s])/gi;
  const result = word.replace(re, "$1-$2");
  return result;
}

module.exports = insertDash;
