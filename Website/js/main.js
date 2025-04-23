function toggleCar(carClass) {
  const elements = document.querySelectorAll(`.${carClass}`);
  elements.forEach(el => {
    el.style.display = el.style.display === "none" ? "table-cell" : "none";
  });
}