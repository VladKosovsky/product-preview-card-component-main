const openBtn = document.getElementById("open-popup");
const closeBtn = document.getElementById("close-popup");
const popup = document.getElementById("popup");

openBtn.addEventListener("click", () => {
  popup.classList.add("open");
});

closeBtn.addEventListener("click", () => {
  popup.classList.remove("open");
});
