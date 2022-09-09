const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const generateHex = () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * 16);
    let value = hex[index];
    hexColor += value;
  }
  document.querySelector(".color").innerText = hexColor;
  document.body.style.background = hexColor;
};
