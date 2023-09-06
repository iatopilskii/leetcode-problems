import solution from ".."

// At least two testcases needed

test('First testcase', () => {
  expect(solution([1, 2, 2, 3])).toBeTruthy()
})

test('Second testcase', () => {
  expect(solution([6, 5, 4, 4])).toBeTruthy()
})

test('Third testcase', () => {
  expect(solution([1, 3, 2])).toBeFalsy()
})
