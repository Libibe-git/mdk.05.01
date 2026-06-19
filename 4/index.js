let numb = document.getElementById('numb')

let a = 1
let b = 2
let c = 3
a = b+c
c = b+a
b = c+a
numb.textContent = b
console.log(b);
