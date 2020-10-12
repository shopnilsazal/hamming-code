export default function encodeHamming(input) {
  if (typeof input !== "string" || input.match(/[^10]/)) {
    return console.error(
      'hamming-code error: input should be binary string, for example "101010"'
    );
  }

  let output = input;
  let controlBitsIndexes = [];
  let l = input.length;
  let i = 1;
  let key, j, arr, temp, check;

  while (l / i >= 1) {
    controlBitsIndexes.push(i);
    i *= 2;
  }

  for (j = 0; j < controlBitsIndexes.length; j++) {
    key = controlBitsIndexes[j];
    arr = output.slice(key - 1).split("");
    temp = chunk(arr, key);
    check =
      temp
        .reduce(function (prev, next, index) {
          if (!(index % 2)) {
            prev = prev.concat(next);
          }
          return prev;
        }, [])
        .reduce(function (prev, next) {
          return +prev + +next;
        }, 0) % 2
        ? 1
        : 0;
    output = output.slice(0, key - 1) + check + output.slice(key - 1);
    if (j + 1 === controlBitsIndexes.length && output.length / (key * 2) >= 1) {
      controlBitsIndexes.push(key * 2);
    }
  }

  return output;
}

function chunk(arr, size) {
  let chunks = [],
    i = 0,
    n = arr.length;
  while (i < n) {
    chunks.push(arr.slice(i, (i += size)));
  }
  return chunks;
}
