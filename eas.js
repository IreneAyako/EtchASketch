const grid = document.querySelector(".gridContainer");
const userInput = document.getElementById("quantity");
const resetButton = document.querySelector(".reset");

createGrid = () => {
  for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    grid.appendChild(div);
  }
};

updateGrid = () => {
  grid.innerHTML = "";
  grid.style.setProperty(
    "grid-template-columns",
    `repeat(${userInput.value}, 2fr)`
  );
  grid.style.setProperty(
    "grid-template-rows",
    `repeat(${userInput.value}, 2fr)`
  );
  for (let i = 0; i < userInput.value * userInput.value; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    grid.appendChild(div);
  }
  console.log(userInput.value);
};

const square = document.querySelector("div");
square.addEventListener("mouseover", function(event) {
  event.target.classList.replace("square", "color");
});

userInput.addEventListener("change", updateGrid);

resetButton.addEventListener("click", function() {
  grid.innerHTML = "";
  userInput.value = "";
  grid.style.setProperty("grid-template-columns", `repeat(16, 2fr)`);
  grid.style.setProperty("grid-template-rows", `repeat(16, 2fr)`);
  createGrid();
});


createGrid();

function randoColor() {
  let hue = Math.floor(Math.random() * 360);
  return `hsl(${hue},100%,50%)`;
}
function linearG() {
  let hue = Math.floor(Math.random() * 360);
  uniHue = hue;
  // lightness = 50;
  let directionArr = ["to right", "to bottom right", "to left"];
  let direction = directionArr[Math.floor(Math.random() * 3)];
  lGradient = `linear-gradient(${direction},hsl(${hue},100%,50%),hsl(${hue},100%,75%))`;
}

//make boxes inside grid to chang color depending on which button is active
// black
blackBtn.addEventListener("click", function (e) {
  let btns = document.querySelectorAll(".btn");
  for (let i = 0; i < btns.length; i++) {
    if (btns[i].classList.contains("active")) {
      btns[i].classList.remove("active");
      btns[i].style.cssText = ``;
      for (let i = 0; i < gridContainer.children.length; i++) {
        gridContainer.children[i].classList.remove(currentHoverState);
      }
    }
  }
  currentHoverState = "blackend";
  e.target.classList.add("active");
  e.target.style.cssText = `color:white;background-color:black`;
  for (let i = 0; i < gridContainer.children.length; i++) {
    gridContainer.children[i].classList.add(currentHoverState);
  }
});

randomBtn.addEventListener("click", function (e) {
  let btns = document.querySelectorAll(".btn");
  for (let i = 0; i < btns.length; i++) {
    if (btns[i].classList.contains("active")) {
      btns[i].classList.remove("active");
      btns[i].style.cssText = ``;
      for (let i = 0; i < gridContainer.children.length; i++) {
        gridContainer.children[i].classList.remove(currentHoverState);
      }
    }
  }
  currentHoverState = "rando";
  e.target.classList.add("active");
  e.target.style.cssText = `background-color:${randoColor()}`;
  for (let i = 0; i < gridContainer.children.length; i++) {
    gridContainer.children[i].classList.add(currentHoverState);
  }
});
gradientBtn.addEventListener("click", function (e) {
  let btns = document.querySelectorAll(".btn");
  for (let i = 0; i < btns.length; i++) {
    if (btns[i].classList.contains("active")) {
      btns[i].classList.remove("active");
      btns[i].style.cssText = ``;
      for (let i = 0; i < gridContainer.children.length; i++) {
        gridContainer.children[i].classList.remove(currentHoverState);
      }
    }
  }
  linearG();
  currentHoverState = "gradient";
  e.target.classList.add("active");
  e.target.style.cssText = `background-image:${lGradient}`;
  for (let i = 0; i < gridContainer.children.length; i++) {
    gridContainer.children[i].classList.add(currentHoverState);
  }
});

gridContainer.addEventListener("mouseover", function (e) {
  if (e.target.classList.contains("box")) {
    if (e.target.classList.contains("blackend")) {
      e.target.style.cssText = `background-color:black`;
    } else if (e.target.classList.contains("rando")) {
      e.target.style.cssText = `background-color:${randoColor()}`;
    } else if (e.target.classList.contains("gradient")) {
      if (lightness <= 100 && lightCounter == 1) {
        lightness += 2;
      } else if (lightness >= 30) {
        lightCounter = -1;
        lightness -= 2;
      } else {
        lightCounter = 1;
      }
      e.target.style.cssText = `background-color:hsl(${uniHue},100%,${lightness}%)`;
    }
  }
});