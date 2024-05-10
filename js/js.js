let buttons = document.querySelectorAll(".container .buttons button ");
let cell = document.querySelector(".container input");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === "C") {
      cell.value = "";
    } else if (button.textContent === "=") {
        try {
            cell.value = eval(cell.value);
          } catch (fail) {
            cell.value = "Error";
          }
    } else {
      cell.value += button.textContent;
    }
   
  });
});
