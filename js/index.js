const link = document.querySelector('a');

link.textContent = 'google';
link.href = 'https://google.com';

const sect = document.querySelector('section');
const para = document.createElement('p');
para.textContent = 'We hope you enjoyed the ride.';
sect.appendChild(para);

const text = document.createTextNode(' — the premier source for web development knowledge.');
const linkPara = document.querySelector('p');
linkPara.appendChild(text);
sect.appendChild(linkPara);

sect.appendChild(linkPara.cloneNode(true));

linkPara.parentNode.removeChild(linkPara); //remove first paragraph

/*
for (let i = 0; i <= 99999; i++) {
    const par = document.createElement('p'); //create 99999 elements
    par.textContent = i;
    sect.appendChild(par);
}
*/


const products = ['Tesla X', 'Tesla S', 'Slavuta Nova', 'ZAZ Lanos'] //

for (let i = 0; i < products.length; i++) {
    const par = document.createElement('p');
    par.innerHTML = `<strong>${products[i]}</strong>`;
    sect.appendChild(par);
    par.classList.add('cool'); //add class for style
    
     /*   par.style.color = 'white';
    par.style.backgroundColor = 'black'; //add style
    par.style.padding = '10px';
    par.style.width = '250px';
    par.style.textAlign = 'center';
    */

}


const clockPlaceholder = document.querySelector('.clock');
setInterval( () => clockPlaceholder.innerText = (new Date()).toLocaleTimeString() ,
  1000);
  
  
/*  //js show/hide clock
const showHideBtn = document.querySelector('.show-hide-clock');
showHideBtn.addEventListener('click', showHideClock);
function showHideClock() {
    clockPlaceholder.hidden = !clockPlaceholder.hidden;
    showHideBtn.innerText = clockPlaceholder.hidden ? 'Show clock' : 'Hide clock';
}
*/



$('.show-hide-clock').click( () => {
   $('.clock').toggle(500, () => $('.show-hide-clock').text( $('.clock').is(':visible') ? 'Hide clock' : 'Show clock'  ) ); 
});