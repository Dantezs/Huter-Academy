// Remova a tela de carregamento após um determinado tempo (por exemplo, 3 segundos)
window.addEventListener('load', function() {
    setTimeout(function() {
      var loaderContainer = document.querySelector('.loader-container');
      loaderContainer.style.display = 'none';
    }, 3000);
  });
  