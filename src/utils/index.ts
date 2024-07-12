/*
 * @description: 数字千分位格式化
 * @param {number|string} num: 需要格式化的数字
 * @return {string} 格式化后的字符串
 * @example: formatNumber(123456789) => "123,456,789"
 */
export function formatNumber(num: number | string): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
