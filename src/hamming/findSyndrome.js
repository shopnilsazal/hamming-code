export default function findSyndrome(binaryArr) {
  let syndrome = -1;
  // for each parity bit
  for (let i = 0; Math.pow(2, i) <= binaryArr.length; i++) {
    let sumOfDataGroup = 0;
    // skip 2^i bits, check 2^i bits
    for (let j = Math.pow(2, i); j <= binaryArr.length; j += Math.pow(2, i) * 2)
      // block beginning
      for (let k = j; k < j + Math.pow(2, i) && k <= binaryArr.length; k++)
        if (Math.log2(k) % 1 !== 0)
          // skip over parity bits
          sumOfDataGroup += binaryArr[k - 1];

    sumOfDataGroup %= 2; // binary addition
    // does parity make even?
    // subtracting one from the other must be 0 if even
    if (sumOfDataGroup - binaryArr[Math.pow(2, i) - 1] !== 0) {
      // error occured
      syndrome += Math.pow(2, i);
    }
  }
  return syndrome;
}
