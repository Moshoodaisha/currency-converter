document.getElementById('ngnInput').addEventListener('input',
function(e){
let ngn = e.target.value;
document.getElementById('dollarsOutput').innerHTML = ngn/362;
document.getElementById('poundsOutput').innerHTML = ngn/439;
document.getElementById('euroOutput').innerHTML = ngn/404;
});
