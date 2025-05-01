// Hoare's method
function pivot(arr, start, end) {
  let pivot = arr[start];
  let i = start;
  let j = end;

  while (i < j) {
    while (arr[i] <= pivot) i++;
    while (arr[j] > pivot) j--;
    if (i < j) swap(arr, i, j);
  }

  swap(arr, start, j);
  return j;
}

function swap(arr, first, second) {
  [arr[first], arr[second]] = [arr[second], arr[first]];
}

function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    let partition = pivot(arr, start, end);
    quickSort(arr, start, partition - 1);
    quickSort(arr, partition + 1, end);
  }
}

const arr = [5, 4, 3, 2, 1];

quickSort(arr);

console.log(arr);
