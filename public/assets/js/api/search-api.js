// Função para processar a resposta da API

  // Função para lidar com o evento de pressionar a tecla Enter
  function handleEnterKeyPress(event) {
    if (event.key === 'Enter') {
      const searchTerm = document.getElementById('search-input').value;
      let url = `https://dfunctions.squareweb.app/user/${searchTerm}`;
  
      fetch(url)
        .then(function(response) {
          response.json().then(resposta);
        })
        .catch(function(error) {
          console.error('Erro na requisição:', error);
        });
    }
  }
  
  // Ouvinte de evento para pressionar a tecla Enter
  document.getElementById('search-input').addEventListener('keypress', handleEnterKeyPress);
  
  

  function resposta(resultressponse) {
    let resultado = document.querySelector('#test');
    let erros = `O id : ${resposta} é invalido`

    if (resultado && resultado.erro) {
        alert(erros);
    } else {
        resposta.innerHTML = `<p>${resposta.user.username}</p>`
    }
  };