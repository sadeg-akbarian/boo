const paragraph = document.querySelector("p");
let counter = 0;

function displayBoo() {
  counter++;
  const time = 2000 + Math.random() * 2000;
  paragraph.classList.toggle("visibleBoo");
  if (counter < 3) {
    setTimeout(displayBoo, time);
  }
}

displayBoo();
