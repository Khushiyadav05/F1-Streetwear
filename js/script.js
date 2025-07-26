// script.js
document.getElementById("searchInput").addEventListener("input", function () {
  const searchValue = this.value.toLowerCase();
  const products = document.querySelectorAll(".product-card");
  let found = false;

  products.forEach((product) => {
    const name = product.dataset.name.toLowerCase();
    if (name.includes(searchValue)) {
      product.style.display = "block";
      found = true;
    } else {
      product.style.display = "none";
    }
  });

  document.getElementById("noResults").style.display = found ? "none" : "block";
});
