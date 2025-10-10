function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}
const searchInput = document.getElementById('searchInput');
const productCards = document.querySelectorAll('.card1');

searchInput.addEventListener('input', function () {
  const searchValue = this.value.toLowerCase();

  productCards.forEach(card => {
    const name = card.querySelector('h3').textContent.toLowerCase();

    if (name.includes(searchValue)) {
      card.style.display = 'block'; 
    } else {
      card.style.display = 'none'; 
    }
  });
});