/**
 * Checks if `value` is less than `other`.
 * 检查 value 是否小于 other
 * @since 3.9.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is less than `other`,
 *  else `false`.
 * @see gt, gte, lte
 * @example
 *
 * lt(1, 3)
 * // => true
 *
 * lt(3, 3)
 * // => false
 *
 * lt(3, 1)
 * // => false
 */
function lt(value, other) {
  // string 转 number
  if (!(typeof value === 'string' && typeof other === 'string')) {
    value = +value
    other = +other
  }
  return value < other
}

export default lt
