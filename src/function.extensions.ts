declare interface Function {
  ownCall: <
    T extends {
      f?: (...args: A) => R
      [prop: string]: any
    },
    A extends any[],
    R
  >(
    this: (...args: A) => R,
    _this: T,
    ...args: A
  ) => R
}

Function.prototype.ownCall = function (_this, ...args) {
  _this.f = this
  const returnValue = _this.f(...args)
  delete _this.f
  return returnValue
}
