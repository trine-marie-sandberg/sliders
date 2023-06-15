import {outer, test} from "./water.mjs"

const valuecheck = outer();
let isChecked = false
console.log(valuecheck)
let isresults = test(isChecked)
console.log(`logging my test function: ${isresults}`)