function countWords(text) {
  const words = text.toLowerCase().split(/\W+/);
  const frequencies = {};
  words.forEach(function(word) {
    if (frequencies[word]) {
      frequencies[word]++;
    } else {
      frequencies[word] = 1;
    }
  });
  const wordFrequencies = Object.entries(frequencies);
  wordFrequencies.sort(function(a, b) {
    return b[1] - a[1];
  });

  return wordFrequencies;
}

const text = "The quick brown fox jumps over the lazy dog. The dog sleeps.";
const wordFrequencies = countWords(text);
console.log(wordFrequencies);