export function checkArray(key) {
  // 权限数组
  let arr = ["1", "2", "3", "4"];
  let index = arr.indexOf(key);
  return index > -1;
}
