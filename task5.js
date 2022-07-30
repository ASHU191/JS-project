var s = prompt("Enter sentence...: ");

function finder(s) {
  let sentence = s.split(" ");
  let longest = sentence[0];
  for (i = 0; i < sentence.length; i++) {
   if(longest.length < sentence[i].length)
   {
    longest = sentence[i];
   }
  }

  return longest;
}

alert(finder(s));
