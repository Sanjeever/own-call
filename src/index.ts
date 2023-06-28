import './function.extensions'

function add(this: { x: number }, n: number): number {
  const { x } = this
  return x + n
}

export { add }
