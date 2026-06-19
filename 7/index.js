let numb = document.getElementById('numb')

const a = 10
numb.textContent = 'TypeError: Assignment to constant variable.'
a++
a += 1
a -= 5
a**=2

console.log(a);
