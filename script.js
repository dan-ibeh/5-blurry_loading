const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

var load = 0;

const int = setInterval(blurring, 30);

function blurring() {
  load++;

  loadText.innerText = `${load}%`;

  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;

  if (load > 99) {
    clearInterval(int);
  }
}

function scale(num, in_min, in_max, out_min, out_max) {
  return (
    ((out_max - out_min) * (num - in_min)) / (in_max - in_min) -
    (out_max - out_min)
  );
}
