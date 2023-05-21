const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Verifica se o tema atual está armazenado no localStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  body.classList.add(currentTheme);
}

// Evento de clique no botão para alternar o tema
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  body.classList.toggle('light-theme');
  
  // Remove a classe 'dark-theme' quando o tema 'light' for definido
  if (body.classList.contains('light-theme')) {
    body.classList.remove('dark-theme');
  }
  
  // Verifica se o tema atual é escuro e atualiza o localStorage
  if (body.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark-theme');
  } else {
    localStorage.removeItem('theme');
  }
});


