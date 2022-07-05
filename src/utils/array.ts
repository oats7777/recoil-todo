export function replaceItemAtIndex(
  arr: Record<string, any>,
  index: number,
  newValue: Record<string, any>
) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

export function removeItemAtIndex(arr: Record<string, any>, index: number) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
