export function revertArray(array: any[]) {
  const arrayCopy = makeCopy(array);
  let left = null;
  let right = null;
  const length = arrayCopy.length;
  for (left = 0, right = length - 1; left < right; left += 1, right -= 1) {
    const temporary = arrayCopy[left];
    arrayCopy[left] = arrayCopy[right];
    arrayCopy[right] = temporary;
  }
  return arrayCopy;
}

export function makeCopy(target: any) {
  return JSON.parse(JSON.stringify(target));
}
