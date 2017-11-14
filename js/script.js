window.addEventListener('load', slider);

function showMenu(x) {
  x.classList.toggle("change");
  document.getElementById('menu').classList.toggle('menu-show');
}

document.getElementById('cont').addEventListener('click', function() {
  showMenu(this);
})

/*MENU KRAJ*/

/* SLAJDER POCETAK*/
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
/*SLAJDER KRAJ*/

/* ZA FORMU DATUM*/
function formatDate(){
let dateControl = document.querySelector('input[type="date"]');
let date = new Date();
  return function (date){
    console.log(date);
  }
/*let year=date.getFullYear();
let day=date.getUTCDate();
let month=date.getMonth();
console.log(date.getUTCDate());*/
}
window.addEventListener("load", formatDate);
/*KRAJ*/

/*DISHES AJAX*/
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

function getMenu(xml, type) {
  let obj = JSON.parse(xml.responseText);
  let number;
  let text="";
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


document.getElementById("btnDinner").addEventListener('click',function(){
  request('food.json', getMenu, 'DINNER');
})
document.getElementById('btnLunch').addEventListener('click',function (){
  request('food.json', getMenu, 'LUNCH');
})
document.getElementById('btnCatering').addEventListener('click', function (){
  request('food.json', getMenu, 'CATERING');
})

/*AJAX END*/
