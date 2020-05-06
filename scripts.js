const grid = document.querySelector(".grid-wrapper");
const resetButton = document.querySelector(".reset-button");
const gridInput = document.querySelector(".grid-input");
const updateWidth = document.querySelector(".update-width");

resetButton.addEventListener("click", reset);
updateWidth.addEventListener("click", updateSize);
let size = 16;
for (let i = 0; i < size * size; i++) {
  const newDiv = document.createElement("div");
  //newDiv.classList.add("grid-item");
  newDiv.setAttribute("id", "grid-item-" + i);
  newDiv.addEventListener(
    "mouseenter",
    function(event) {
      // highlight the mouseenter target
      event.target.style.backgroundColor = "#fd2b58";
    },
    false
  );
  grid.appendChild(newDiv);
}

function reset() {
  for (let i = 0; i < size * size; i++) {
    console.log(i + " of " + size * size);
    const gridItem = document.querySelector("#grid-item-" + i);
    gridItem.style.backgroundColor = "white";
  }
}
function updateSize() {
  //const gridInput = document.querySelector("#grid-width");
  const gridInput = document.getElementById("grid-width");
  //const gridByID = document.querySelector("#grid-wrapper");
  size = gridInput.value;
  if (!size) {
    size = 16;
  }
  grid.querySelectorAll("*").forEach(n => n.remove());
  document.getElementById(
    "grid-wrapper"
  ).style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  document.getElementById(
    "grid-wrapper"
  ).style.gridTemplateRows = `repeat(${size}, 1fr)`;
  for (let i = 0; i < size * size; i++) {
    const newDiv = document.createElement("div");
    //newDiv.classList.add("grid-item");
    newDiv.setAttribute("id", "grid-item-" + i);
    newDiv.addEventListener(
      "mouseenter",
      function(event) {
        // highlight the mouseenter target
        event.target.style.backgroundColor = "#fd2b58";
      },
      false
    );
    grid.appendChild(newDiv);
  }
}
