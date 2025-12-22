const cards = document.querySelectorAll(".card");
const timeSelect = document.getElementById("timeSelect");

let gameTime = timeSelect.value;

cards.forEach(card => {
  card.addEventListener("click", () => {
    card.classList.add("flip");
  });
});

timeSelect.addEventListener("change", () => {
  gameTime = timeSelect.value;
  console.log("Selected time:", gameTime);
});
