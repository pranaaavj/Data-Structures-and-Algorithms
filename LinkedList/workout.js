function getPermutations(str) {
  if (str.length <= 1) return [str];

  const results = [];
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let remaining = str.slice(0, i) + str.slice(i + 1);
    for (let perm of getPermutations(remaining)) {
      results.push(char + perm);
    }
  }

  return results;
}

console.log(getPermutations('abc'));
