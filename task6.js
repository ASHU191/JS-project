var s = prompt("Enter string...: ");

function checker(s) {
  let sentence = s.toLowerCase();
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  for (i = 0; i <= sentence.length; i++) {
    if (vowels.includes(sentence[i])) {
      count++;
    }
  }
  return count;
}

alert(checker(s));