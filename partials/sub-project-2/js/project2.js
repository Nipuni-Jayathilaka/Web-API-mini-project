const boxEl=document.querySelector('#box');
console.log(boxEl.clientWidth,boxEl.clientHeight)//padding box size
console.log(boxEl.offsetWidth, boxEl.offsetHeight)//border box size
boxEl.style.top=`${innerHeight-80}px`;