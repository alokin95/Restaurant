window.addEventListener('load',slider);

function showMenu(x) {
    x.classList.toggle("change");
    document.getElementById('menu').classList.toggle('menu-show');
}

document.getElementById('cont').addEventListener('click',function(){
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

    slides[slideCount-1].style.display = "block";
    setTimeout(slider, 4000);
}
/*SLAJDER KRAJ*/




/* ZA FORMU DATUM*/
let dateControl = document.querySelector('input[type="date"]');
let date=new Date();


/*KRAJ*/
