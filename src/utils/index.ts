/*
 * @description: 数字千分位格式化
 * @param {number|string} num: 需要格式化的数字
 * @return {string} 格式化后的字符串
 * @example: formatNumber(123456789) => "123,456,789"
 */
export function formatNumber(num: number | string): string {
  const parts = num.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}

//判断字符是否是有效邮箱
export function isEmail(str: string): boolean {
  return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
}

//判断字符是否是有效手机号码，手机号码规则是大陆11位手机号码
export function isPhone(str: string): boolean {
  return /^1[3456789]\d{9}$/.test(str);
}

//debounce函数，用于防抖，默认时间是500ms
export function debounce(fn: Function, delay = 500): Function {
  let timer: NodeJS.Timeout | null = null;
  return function (this: any, ...args: any[]) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

export const handleError = (error: unknown) => {
  if (error && typeof error === 'object' && 'message' in error) {
    console.log((error as { message: string }).message);
    return Promise.reject(error.message);
  } else {
    console.log('Unknown error');
    return Promise.reject('Unknown error');
  }
};
