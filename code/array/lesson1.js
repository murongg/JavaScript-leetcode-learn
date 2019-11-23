export default str => {
  let map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  let num = str.split('')
  let code = []
  num.forEach(i => {
    if (map[i]) code.push(map[i])
  })
  let comb = arr => {
    // 临时变量保存前两个组合的结果
    let tmp = []
    // 最外层是遍历第一个元素，里层循环遍历第二个元素
    for (let i = 0; i < arr[0].length; i++) {
      for (let j = 0; j < arr[1].length; j++) {
        tmp.push(`${arr[0][i]}${arr[1][j]}`)
      }
    }
    arr.splice(0, 2, tmp)
    if (arr.length > 1) {
      comb(arr)
    } else {
      return tmp
    }
    return arr[0]
  }
  return comb(code)
}
