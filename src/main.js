import Reservation from './reservation';
import Form from './formSelect';
import request from './request';
import getMenu from './getMenu';

let buttons=document.querySelectorAll('.button');
buttons.forEach(btn=>{
  btn.addEventListener('click',function(){
    localStorageClicked(this.id);
  });

});
window.addEventListener('load',() =>{
  if (!localStorage.type){
    localStorage.setItem('type','DINNER');
  }
})
/*LOCAL STORAGE*/
function localStorageClicked(value){

  if (value == 'dinner-card'){
    localStorage.setItem("type",'DINNER');
  }
  else if(value == 'lunch-card'){
    localStorage.setItem("type","LUNCH");
  }
  else if(value == 'catering-card'){
    localStorage.setItem("type","CATERING");
  }
}
/*KRAJ*/

//window.addEventListener('load', slider);
window.addEventListener('scroll', scrollHeader);
window.addEventListener('load', initMap);
//HEADER SCROLL FUNKCJA
function scrollHeader() {
	
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        document.getElementById("header").style.opacity="1";
	} else {
        document.getElementById("header").style.opacity="0.7";
    }
}
//KRAJ

//MENU START
function showMenu(e) {
	
  e.classList.toggle("change");
  document.getElementById('menu').classList.toggle('menu-show');
  
}

document.getElementById('cont').addEventListener('click', function() {
  showMenu(this);
})
/*MENU KRAJ*/

// SLAJDER NA INDEX STRANI: POCETAK
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

/*GOOGLE MAP
function initMap() {
        var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }

KRAJ*/

document.querySelector("#btnDinner").addEventListener('click',function(){
  localStorage.setItem('type','DINNER');
  request('food.json', getMenu, 'DINNER');
})
document.querySelector('#btnLunch').addEventListener('click',function (){
  localStorage.setItem('type','LUNCH');
  request('food.json', getMenu, 'LUNCH');
})
document.querySelector('#btnCatering').addEventListener('click', function (){
  localStorage.setItem('type','CATERING');
  request('food.json', getMenu, 'CATERING');
})

window.addEventListener('load',function(){
  request('food.json',getMenu, localStorage.getItem('type'));
})


