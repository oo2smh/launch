// FREQUENCY MAP Questions

function wordSizes(str) {
  str = str.replaceAll(/[^ a-z0-9]/gi, '');
  let frequencyMap = {};
  if (str.length === 0) return frequencyMap;

  str.split(' ').forEach(word => {
    if (!frequencyMap.hasOwnProperty(word.length)) {
      frequencyMap[word.length] = 0;
    }
    frequencyMap[word.length]++;

  });
  console.log(frequencyMap);
  return frequencyMap;
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}