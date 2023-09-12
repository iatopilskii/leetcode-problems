import solution from '..'

// At least two testcases needed

test('First testcase', () => {
  expect(solution('Hello World')).toBe(5)
})

test('Second testcase', () => {
  expect(solution('   fly me   to   the moon  ')).toBe(4)
})

test('Third testcase', () => {
  expect(solution('luffy is still joyboy')).toBe(6)
})
