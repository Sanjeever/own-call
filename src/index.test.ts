import { test, expectTypeOf, expect } from 'vitest'
import { add } from '.'

const ret = add.ownCall({ x: 10 }, 5) // ret = 15

test('ownCall()', () => {
  expect(ret).toBe(15)
})

test('ownCall() types work properly', () => {
  expectTypeOf(ret).toBeNumber()
})
