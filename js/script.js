window.addEventListener('load',slider);
/*document.getElementById('menu-open').addEventListener('click',function(){
  menuShow();
});
document.getElementById('menu-close').addEventListener('click',menuHide);*/

/* FULL WIDTH MENU POCETAK*/
/*function menuShow(){
  var menu=document.getElementById('menu');
  menu.style.width="100%";
  document.getElementById('menu-open').style.display='none';
}

function menuHide(){
  var menu=document.getElementById('menu');
  menu.style.width="0%";
  setTimeout(function(){
    document.getElementById('menu-open').style.display='inline-block';
  },1400);
}*/

function myFunction(x) {
    x.classList.toggle("change");
    document.getElementById('menu').classList.toggle('menu-show');
}

document.getElementById('cont').addEventListener('click',function(){
  myFunction(this);
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

    slides[slideCount-1].style.display = "block";
    setTimeout(slider, 4000);
}
/*SLAJDER KRAJ*/




/* ZA FORMU DATUM*/
let dateControl = document.querySelector('input[type="date"]');
let date=new Date();


/*KRAJ*/
