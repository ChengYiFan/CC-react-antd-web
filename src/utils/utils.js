
export function isUrl(path) {
  /* eslint no-useless-escape:0 import/prefer-default-export:0 */
  // const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
  const reg = /^(http|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?$/;
  return reg.test(path);
}

/** 数组展平：输入Infinity则展开为一纬数组，不输入则默认为展开1层，若设定了展开层数，则按设定层数展平。
 * var arr2 = [1,[2,3,[4]]];
 * console.log(flatter(arr2, 1));
 * console.log(flatter(arr2, Infinity));
 */ 
export function flatter(arr, depth) {
  let result = [];
  if (depth === undefined) {
    depth = 1;
  }
  for(let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (Array.isArray(item) && depth !== 0) {
      result = result.concat(flatter(item, depth - 1));
    } else {
      result.push(item);
    }
  }
  return result;
}
