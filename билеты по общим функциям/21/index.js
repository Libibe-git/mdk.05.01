let numb = document.getElementById('numb')

let a = [1,2,3,4,'5','6']
let b = 0
a.forEach(element => {
    b+=element
})
numb.textContent = b
console.log(b);
