export let slideCount=0;

export function slider() {
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