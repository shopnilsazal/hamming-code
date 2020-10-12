export default function toBinaryArray(str) {
  return parseInt(str, 16).toString(2).split("").map(Number);
}
