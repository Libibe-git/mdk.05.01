let numb = document.getElementById('numb')

setTimeout(() => {
    console.log(1);
    
}, 1000); 

setTimeout(() => {
    console.log(2);
    
}, 100);

console.log(3);

numb.textContent = '3 2 1'

