import solution from ".."

// At least two testcases needed

test('First testcase', () => {
  expect(solution([1, 2, 3])).toStrictEqual([1, 2, 4])
})

test('Second testcase', () => {
  expect(solution([4, 3, 2, 1])).toStrictEqual([4, 3, 2, 2])
})

test('Third testcase', () => {
  expect(solution([9])).toStrictEqual([1, 0])
})
