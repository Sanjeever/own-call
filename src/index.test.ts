import { test, expectTypeOf, expect } from 'vitest'
import { add } from '.'

const _this = { x: 10 }
test('ownCall()', () => {
  expect(add.ownCall(_this, 5)).toBe(add.call(_this, 5))
})

test('ownCall() types work properly', () => {
  const ret = add.ownCall(_this, 5) // ret = 15
  expectTypeOf(ret).toBeNumber()
})
