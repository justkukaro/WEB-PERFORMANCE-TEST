console.log('hi');
let str = performance.getEntriesByType('resource')
console.log(str);
let div2Dom = document.querySelector('#div2');
div2Dom.innerHTML = JSON.stringify(str[0]);
console.log(performance.timing)
