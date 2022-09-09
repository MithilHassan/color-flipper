const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const handleColor = () => {
  let index = Math.floor(Math.random() * colors.length);
  let randomColor = colors[index];
  document.querySelector(".color").innerText = randomColor;
  document.body.style.background = randomColor;
};
