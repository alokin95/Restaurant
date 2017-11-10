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


/*DISHES AJAX*/

function request(url,f){

	let xhttp=new XMLHttpRequest();

	if (!xhttp){
		return false;
	}

	xhttp.onreadystatechange=function(){
		if (this.readyState === 4 && this.status===200){
			f(this);
		}
	}

	xhttp.open("GET",url);
	xhttp.send();
}

function getDinner(xml){
	let obj=JSON.parse(xml.responseText);
	let ime=obj['DINNER MENU'][0].name;
  populateDinner(ime);

}

function populateDinner(name){
  for (let i=0;i<5;i++){
    var newDiv=document.createElement('div');
    var newP=document.createElement('p');
    var newTextNode=document.createTextNode(name);
    newP.appendChild(newTextNode);
    newDiv.setAttribute('class','recipe');
    newDiv.appendChild(newP);
    document.getElementById('dinner').appendChild(newDiv);
  }
}
window.addEventListener('load', function(){
  request("dinner.json", getDinner);
})
/*AJAX END*/
