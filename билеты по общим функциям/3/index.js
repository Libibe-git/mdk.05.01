let numb = document.getElementById('numb')

const a = 5
const b = 6
const c = 7
numb.textContent = "index.js:6 Uncaught TypeError: Assignment to constant variable."

a = 1
b = 2
c = 3
console.log(b);
