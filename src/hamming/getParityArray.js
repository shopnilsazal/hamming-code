export default function findSyndrome(binaryArr) {
  let parityArray = [];
  // for each parity bit
  for (let i = 0; Math.pow(2, i) <= binaryArr.length; i++)
    parityArray.push(binaryArr[Math.pow(2, i) - 1]);
  return parityArray;
}
