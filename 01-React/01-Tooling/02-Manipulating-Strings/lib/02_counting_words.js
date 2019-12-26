function occurrences(text, word) {
  const pattern = `\\b${word}\\b`;
  const re = new RegExp(pattern, 'gi');
  const matches = text.match(re);
  if (matches == null) {
    return 0;
  }
  return matches.length;
}

module.exports = occurrences;
