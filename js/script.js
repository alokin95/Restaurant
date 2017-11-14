window.addEventListener('load', slider);
window.addEventListener("load", formatDate);
function showMenu(e) {
  e.classList.toggle("change");
  document.getElementById('menu').classList.toggle('menu-show');
}

document.getElementById('cont').addEventListener('click', function() {
  showMenu(this);
})

/*MENU KRAJ*/

/* SLAJDER NA INDEX STRANI: POCETAK*/
let slideCount = 0;

function slider() {

  let slides = document.getElementsByClassName("slider-img");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideCount++;

  if (slideCount > slides.length) {
    slideCount = 1;
  }

  slides[slideCount - 1].style.display = "block";
  setTimeout(slider, 4000);
}
/*KRAJ*/

/*NE DOZVOLJAVA ODABIR DATUMA KOJI JE PRE SUTRASNJEG*/
function formatDate(){
  let dateControl = document.querySelector('input[type="date"]');
  let date = new Date();
  let year=date.getFullYear();
  let day=date.getUTCDate()+1;
  let month=date.getMonth()+1;
  dateControl.setAttribute('min',year+'-'+month+'-'+day);
}
/*KRAJ*/

/*POPUNJAVANJE DDL ZA BROJ LJUDI*/



/*KRAJ*/

/*AJAX ZAHTEV*/
function request(url, f, typeOfFood) {

  let xhttp = new XMLHttpRequest();

  if (!xhttp) {
    alert("Ajax not loaded");
    return false;
  }

  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      f(this, typeOfFood);
    }
  }

  xhttp.open("GET", url);
  xhttp.responseType = 'text';
  xhttp.send();
}
/* KRAJ */

/* POPUNJAVANJE menu.html STRANICE SA RECEPTIMA IZ FAJLA food.json U ZAVISNOSTI KOJI RECEPTI SU ODABRANI*/
function getMenu(xml, type) {/* DRUGI ARGUMENT JE KEY U FAJLU food.json KAKO BI ZNAO KOJE RECEPTE DA DOVUCE IZ AJAX ZAHTEVA*/
  let obj = JSON.parse(xml.responseText);
  let number;
  let text="";

  (function(){ /* BRISE NASLOV I gold.png IZ DIV-a id='gold' KAKO BI SE NASLOV MENJAO NAKON ODABIRA RECEPTA*/
  let gold = document.getElementById("gold");
     while (gold.hasChildNodes()) {
         gold.removeChild(gold.firstChild);
     }
   }) ();

  (function (){/*PRAVI NOVI NASLOV I gold.png*/
    let heading=document.createElement('h1');
    let headingText=document.createTextNode(type);
    heading.appendChild(headingText);
    let gold=document.createElement('img');
    gold.setAttribute('src','images/other/gold.png');
    document.getElementById('gold').appendChild(heading);
    document.getElementById('gold').appendChild(gold);
  })();

  if (type==="DINNER"){
    number=0;
    text="";
  }
  else if (type==='LUNCH'){
    number=1;
    text="";
  }
  else if (type==='CATERING'){
    number=2;
    text="";
  }
  for (let i=0;i<obj[number][type].length;i++){
    let name=obj[number][type][i].name;
    let desc=obj[number][type][i].desc;
    text+="<div class='recipe'><h4>"+name+"</h4><p>"+desc+"</p></div>";
    document.getElementById('recipes').innerHTML=text;
  }
}
/*KRAJ*/

document.getElementById("btnDinner").addEventListener('click',function(){
  request('food.json', getMenu, 'DINNER');
})
document.getElementById('btnLunch').addEventListener('click',function (){
  request('food.json', getMenu, 'LUNCH');
})
document.getElementById('btnCatering').addEventListener('click', function (){
  request('food.json', getMenu, 'CATERING');
})
