/**
 * Gets the last element of `array`.
 * 获取数组最后一个元素
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * last([1, 2, 3])
 * // => 3
 */
function last(array) {
  // 判断边界
  const length = array == null ? 0 : array.length
  return length ? array[length - 1] : undefined
  // es6 新增方法 可负索引
  return length ? array.at(-1) : undefined
}

export default last
