//https://app.codesignal.com/arcade/intro/level-2/yuGuHvcCaFCKk56rJ

const areaFormula = x => x**2 + ((x-1)**2)

const compose = fn => n => fn(n)

const shapeArea = compose(areaFormula)
console.log(shapeArea(3))
