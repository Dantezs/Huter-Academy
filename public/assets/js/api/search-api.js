const apikey = 'dbcd8e56';

// Função para lidar com o evento de pressionar a tecla Enter
  function handleEnterKeyPress(event) {
    if (event.key === 'Enter') {
      const searchTerm = document.getElementById('search-input').value;
      let url = `https://www.omdbapi.com/?s=${searchTerm}&apikey=${apikey}`;
  
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
    // let resultado = document.querySelector('#test');
    if (resultressponse.Response == 'False') {
      alert("Nem um filme encontrado");
      return
  }
  resposta.forEach(obj => {
    const informacao = obj.informacao;
    const li = document.createElement('li');
    div.textContent = informacao;
    informacoesLista.appendChild(li);
  });
  };