// export default str => {
//   // 建立数据结构 堆栈 保存数据
//   let r = []
//   // 给定任意子输入都返回第一个符合条件的字符串
//   let match = str => {
//     let j = str.match(/^(0+|1+)/)[0]
//     let o = (j[0] ^ 1).toString().repeat(j.length) // (j[0] ^ 1) 取反 (0^1) = 1
//     let reg = new RegExp(`^(${j}${o})`)
//     if (reg.test(str)) {
//       return RegExp.$1
//     } else {
//       return ''
//     }
//   }
//   // 通过for循环控制运行流程
//   for (let i = 0; i < str.length - 1; i++) {
//     let sub = match(str.slice(i))
//     if (sub) {
//       r.push(sub)
//     }
//   }
//   return r
// }

export default s => {
  let n = 0
  let arr = s.match(/([1]+)|([0]+)/g)
  for (let i = 0; i < arr.length - 1; i++) {
    n += Math.min(arr[i].length, arr[i + 1].length)
  }
  return n
}
