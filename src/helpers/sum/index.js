export default (arr = []) => {
  const myArray = Array.isArray(arr) ? arr : []
  return myArray.reduce((sum, item) => sum + item, 0)
}
