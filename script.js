"use script";

let listImg = document.querySelector(".carousel__list-item"),
  listImg2 = document.querySelector(".carousel__list-item2"),
  listImg3 = document.querySelector(".carousel__list-item3"),
  listImg4 = document.querySelector(".carousel__list-item4"),
  listImg5 = document.querySelector(".carousel__list-item5"),
  reklamaImg = document.querySelector(".reklama--item"),
  reklamaImg2 = document.querySelector(".reklama--item2"),
  reklamaImg3 = document.querySelector(".reklama--item3"),
  reklamaImg4 = document.querySelector(".reklama--item4"),
  reklamaImg5 = document.querySelector(".reklama--item5"),
  reklamaImg6 = document.querySelector(".reklama--item6"),
  prev = document.querySelector(".prev"),
  next = document.querySelector(".next"),
  prev2 = document.querySelector(".prev2"),
  next2 = document.querySelector(".next2"),
  prev3 = document.querySelector(".prev3"),
  next3 = document.querySelector(".next3");

let index = 0;

next.addEventListener("click", () => {
  index++;
  slider();
});

prev.addEventListener("click", () => {
  index--;
  slider();
});

next2.addEventListener("click", () => {
  index++;
  slider2();
});

prev2.addEventListener("click", () => {
  index--;
  slider2();
});

next3.addEventListener("click", () => {
  index++;
  slider3();
});

prev3.addEventListener("click", () => {
  index--;
  slider3();
});

function slider() {
  listImg.style.transform = `translateX(${-index * 1200}px)`;
  listImg2.style.transform = `translateX(${-index * 1200}px)`;
  listImg3.style.transform = `translateX(${-index * 1200}px)`;
  listImg4.style.transform = `translateX(${-index * 1200}px)`;
  listImg5.style.transform = `translateX(${-index * 1200}px)`;
}

function slider2() {
  reklamaImg.style.transform = `translateX(${-index * 1200}px)`;
  reklamaImg2.style.transform = `translateX(${-index * 1200}px)`;
  reklamaImg3.style.transform = `translateX(${-index * 1200}px)`;
}

function slider3() {
  reklamaImg4.style.transform = `translateX(${-index * 1200}px)`;
  reklamaImg5.style.transform = `translateX(${-index * 1200}px)`;
  reklamaImg6.style.transform = `translateX(${-index * 1200}px)`;
}
