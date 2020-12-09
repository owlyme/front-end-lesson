export {}

const createArray1 = <T> (length: number, value: T): T[] => {
  return Array<T>(length).fill(value)
}
function createArray<T> (length: number, value: T):T[] {
  return Array<T>(length).fill(value)
}