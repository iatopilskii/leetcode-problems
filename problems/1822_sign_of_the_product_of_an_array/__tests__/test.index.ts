import solution from ".."

// At least two testcases needed

test('First testcase', () => {
  expect(solution([-1, -2, -3, -4, 3, 2, 1])).toEqual(1)
})

test('Second testcase', () => {
  expect(solution([1, 5, 0, 2, -3])).toEqual(0)
})

test('Third testcase', () => {
  expect(solution([-1, 1, -1, 1, -1])).toEqual(-1)
})
