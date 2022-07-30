var s = prompt("Enter numbner...: ");

function sorter(s) {
  return s.split("").sort().join("");
}

alert(sorter(s));