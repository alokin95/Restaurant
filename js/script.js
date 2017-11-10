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
let dateControl = document.querySelector('input[type="date"]');
let date = new Date();
/*KRAJ*/


/*DISHES AJAX*/

function request(url, f) {

  let xhttp = new XMLHttpRequest();

  if (!xhttp) {
    alert("Ajax not loaded");
    return false;
  }

  xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      f(this);
    }
  }

  xhttp.open("GET", url);
  xhttp.send();
}

function getDinner(xml) {
  let obj = JSON.parse(xml.responseText);
  for (let i = 5; i <=13 ; i++) {
    let name = obj['DINNER'][i].name;
    let desc = obj['DINNER'][i].desc;
    populateDinner(name, desc);
  }

}

function populateDinner(name, desc) {
  for (let i = 0; i < 1; i++) {

    let newH = document.createElement('h4');
    let contentH = document.createTextNode(name);
    newH.appendChild(contentH);

    let newP = document.createElement('p');
    let contentP = document.createTextNode(desc);
    newP.appendChild(contentP);

    let newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'recipe');
    newDiv.appendChild(newH);
    newDiv.appendChild(newP);

    document.getElementById('dinner').appendChild(newDiv);
  }
}
let djoka=document.getElementById('showDinner').addEventListener('click', function() {
  request("dinner.json", getDinner);
})
/*AJAX END*/
