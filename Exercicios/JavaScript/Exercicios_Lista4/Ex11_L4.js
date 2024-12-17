import { media } from "../lib/biblioteca.js"

console.log(Math.floor([1, 2, 4, 5, 7, 8, 10, 11].reduce(media, 0)))
console.log(Math.floor([10, 70, 30, 50].reduce(media, 0)))
console.log(Math.floor([29, 567, 38, 53, 503, 92, 67, 909, 203, 382, 28].reduce(media, 0)))
console.log(Math.floor([].reduce(media, 0)))