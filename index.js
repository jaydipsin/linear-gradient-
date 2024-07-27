let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let copyDiv = document.querySelector(".copycode");
let copyBtn = document.querySelector("#copy")
let rgb1 = "#fff";
let rgb2 = "#fff";



let hexvalue = () => {
  let hexaval = "0123456789ABCDEF";
  let colors = "#";
  for (let i = 0; i < 6; i++) {
    colors = colors + hexaval[Math.floor(Math.random() * 16)];
  }
  return colors;

};

const handelbtn1 = () => {
  rgb1 = hexvalue();
  document.body.style.backgroundImage = `linear-gradient(to right,${rgb1},${rgb2})`;
  btn1.innerHTML = `${rgb1}`;
  console.log(rgb1);
  copyDiv.textContent = `background: linear-gradient(to right, ${rgb2},${rgb1});`;

  //   return rgb1
};

const handelbtn2 = () => {
  rgb2 = hexvalue();
  btn2.innerHTML = `${rgb2}`;
  console.log(rgb2);
  document.body.style.backgroundImage = `linear-gradient(to left, ${rgb2},${rgb1} )`;
  copyDiv.textContent = `background: linear-gradient(to left ,${rgb1} ,${rgb2} );`;
};

copyBtn.addEventListener("click",()=>{
    navigator.clipboard.writeText(copyDiv.textContent);
    alert(`you copied ${copyDiv.textContent}`)
})

btn1.addEventListener("click", handelbtn1);
btn2.addEventListener("click", handelbtn2);
