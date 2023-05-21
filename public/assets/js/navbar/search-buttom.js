const searchIcon = document.getElementById('search-icon');
const searchInput = document.getElementById('search-input');

searchIcon.addEventListener('click', () => {
  searchInput.classList.toggle('active');
  searchInput.focus();
});


document.addEventListener('click', (event) => {
    const isClickInside = searchInput.contains(event.target) || searchIcon.contains(event.target);
    if (!isClickInside) {
      searchInput.classList.remove('active');
    }
  });