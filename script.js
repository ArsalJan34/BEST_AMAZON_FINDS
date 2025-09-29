// Select search input and product cards
const searchInput = document.getElementById('searchInput');
const productCards = document.querySelectorAll('.card1');

// Add input event listener
searchInput.addEventListener('input', function () {
  const searchValue = this.value.toLowerCase();

  productCards.forEach(card => {
    const name = card.querySelector('h3').textContent.toLowerCase();

    if (name.includes(searchValue)) {
      card.style.display = 'block'; // Show card if matched
    } else {
      card.style.display = 'none'; // Hide card if not matched
    }
  });
});