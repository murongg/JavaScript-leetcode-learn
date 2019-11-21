import subStr from '../../code/string/lesson2'

test('subStr(00110011)', () => {
  expect(subStr('00110011')).toEqual(6)
})

test('subStr(10101)', () => {
  expect(subStr('10101')).toEqual(4)
})
