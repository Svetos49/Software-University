function magicMatrices(input) {
  let arr = [];

  for(let i in input) {
      const rowSum = input[i].reduce((a, b) => a + b, 0);
      const colSum = input.reduce((acc, cur) => {
          acc += cur[i];
          return acc;
      }, 0);
      if(rowSum !== colSum || (arr.length > 0 && (rowSum !== arr[0] || colSum !== arr[1]))) {
          return false
      } else if(i === '0') {
          arr.push(rowSum, colSum);
      }
  }
  return true;
}

magicMatrices([[4, 5, 6],
               [6, 5, 4],
               [5, 5, 5]])

  console.log(magicMatrices([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]));             