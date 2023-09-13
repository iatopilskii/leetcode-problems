import solution from ".."

// At least two testcases needed

test('First testcase', () => {
  expect(solution('Hello')).toBe('hello')
})

test('Second testcase', () => {
  expect(solution('here')).toBe('here')
})

test('Third testcase', () => {
  expect(solution('LOVELY')).toBe('lovely')
})
