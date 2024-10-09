const imgEl = document.querySelector(".favorite-img");

imgEl.addEventListener("mouseover", () => {
  imgEl.src = "./imgs/beach-ball.jpg";
});

imgEl.addEventListener("mouseout", () => {
  imgEl.src = "./imgs/beach.webp";
});
