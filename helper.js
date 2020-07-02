// 生成随机数组
function geratorArr(len) {
  let arr = []
  for (let i = 0; i < len; i++) {
    const radomHeight = Math.floor(Math.random() * 25 + 5) * 10;
    arr.push(radomHeight)
  }
  return arr
}