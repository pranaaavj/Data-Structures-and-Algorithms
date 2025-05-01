function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  const sorted = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) sorted.push(left[i++]);
    else sorted.push(right[j++]);
  }

  while (i < left.length) sorted.push(left[i++]);
  while (j < right.length) sorted.push(right[j++]);

  return sorted;
}

console.log(mergeSort([9, 8, 7, 6, 5, 4, 3, 2, 1]));
