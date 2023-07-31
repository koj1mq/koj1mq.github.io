const fruitLinks = document.querySelectorAll('.fruit-link');

fruitLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const fruitRow = link.parentElement.parentElement;
    showDetails(
      fruitRow.cells[0].textContent,
      fruitRow.cells[1].textContent,
      fruitRow.cells[2].textContent
    );
  });
});

function showDetails(fruitName, fruitColor, nutrients) {
  const detailsDiv = document.getElementById("fruit-details");
  const fruitNameElement = document.getElementById("fruitName");
  const fruitColorElement = document.getElementById("fruitColor");
  const nutrientsElement = document.getElementById("nutrients");

  fruitNameElement.textContent = fruitName;
  fruitColorElement.textContent = `色: ${fruitColor}`;
  nutrientsElement.textContent = `栄養価: ${nutrients}`;

  detailsDiv.style.display = "block";
}