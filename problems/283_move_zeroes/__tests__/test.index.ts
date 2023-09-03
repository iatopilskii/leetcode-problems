import solution from ".."

// At least two testcases needed

test('First testcase', () => {
  let arr = [0, 1, 0, 3, 12]

  solution(arr)

  expect(arr).toStrictEqual([1, 3, 12, 0, 0])
})

test('Second testcase', () => {
  let arr = [0]

  solution(arr)

  expect(arr).toStrictEqual([0])
})
