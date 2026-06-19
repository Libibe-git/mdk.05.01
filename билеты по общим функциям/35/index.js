let numb = document.getElementById('numb');

function a() {
    let num = 10;
    num += 10
}
a()
numb.textContent = 'index.js:9 Uncaught ReferenceError: num is not defined';
console.log(num);

