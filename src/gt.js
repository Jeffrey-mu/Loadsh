/**
 * Checks if `value` is greater than `other`.
 * 检查 value 是否大于 other
 * @since 3.9.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is greater than `other`,
 *  else `false`.
 * @see gte, lt, lte
 * @example
 *
 * gt(3, 1)
 * // => true
 *
 * gt(3, 3)
 * // => false
 *
 * gt(1, 3)
 * // => false
 */
function gt(value, other) {
  // 如果是字符类型 转为number
  if (!(typeof value === 'string' && typeof other === 'string')) {
    value = +value
    other = +other
  }
  // 返回boolean
  return value > other
}

export default gt
