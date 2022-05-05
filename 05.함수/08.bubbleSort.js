function sort(array) {
  // let newArray = array;
  for (let i = array.length - 1; i > 0; i--) {
    for (let k = 0; k < i; k++) {
      if (array[k] > array[k + 1]) {
        let tmp = array[k];
        array[k] = array[k + 1];
        array[k + 1] = tmp;
      }
    }
  }
  return array;
}

let samples = [9, 5, 13, 6, 2];
console.log(sort(samples));
console.log(samples);