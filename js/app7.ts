let heading = document.getElementById("content") as HTMLHeadingElement;
let button = document.getElementById("clicker") as HTMLButtonElement;

button.addEventListener("click", () => {
  if (heading.innerHTML === "") {
    heading.innerHTML = "Hej hej";
  } else {
    heading.innerHTML = "";
  }
});
