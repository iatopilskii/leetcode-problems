import solution from ".."

// At least two testcases needed

test('First testcase', () => {
  expect(solution([3, 5, 1])).toBeTruthy()
})

test('Second testcase', () => {
  expect(solution([1, 2, 4])).toBeFalsy()
})
