const card = document.querySelector(".card");

card.addEventListener("mousemove", (event) => onMouseMove(event));

const onMouseMove = (event) => {
  const maxDeg = 20;
  const mousePosX = event.offsetX;
  const mousePosY = event.offsetY;
  const xMid = card.offsetWidth / 2;
  const yMid = card.offsetHeight / 2;

  const xPos = mousePosX - xMid;
  const yPos = mousePosY - yMid;

  const xDeg = (xPos * maxDeg) / xMid;
  const yDeg = (yPos * maxDeg) / yMid;

  card.style.transform = `rotateY(${xDeg}deg) rotateX(${yDeg}deg)`;

  console.log("xDeg");
  console.log("yDeg");
};

//autre manière de l'écrire
// card.EventListener("mousemove", (e) => {
//  let cardInfos = e.target.getBoundingClientRect();
//let mouseposX = e.clientX - cardInfos.left;
//let angleX = (((mousePosX - card.offsetWidth/2)* 2)/card.offsetWidth) * 100 * 0.4 * -1;
//})

ScrollReveal().reveal(".logo", {
  duration: 1000,
  origin: "left",
  distance: "70px",
});
ScrollReveal().reveal(".content", {
  duration: 2500,
  origin: "left",
  distance: "70px",
});
ScrollReveal().reveal(".contact", {
  duration: 3500,
  origin: "left",
  distance: "70px",
});
ScrollReveal().reveal(".card-container", {
  duration: 2000,
  origin: "right",
  distance: "110%",
  opacity: 0,
});
