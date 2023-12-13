let arr = [
    [{a: {price: 20}}],
    [{a: {price: 35}}],
    [{a: {price: 44}}]
]

arr = arr.flat()
let temp = arr.reduce((a, b) => b.a.price + a, 0)
console.log(temp);

let total = arr.reduce((a, b) => b.a.price + a, 0)
console.log(total);