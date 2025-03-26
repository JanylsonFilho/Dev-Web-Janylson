export function busca() {
  document.addEventListener("DOMContentLoaded", () => {
      let botao = document.getElementById('botao_buscar');
      if (!botao) {
          console.log("Erro: O botão não foi encontrado.");
          return;
      }
      botao.addEventListener('click', () => {
          let termo = document.querySelector('input').value.trim(); // Pega o valor digitado
          if (termo) {
              buscarLivros(termo);
          } else {
              alert('Digite um termo de pesquisa!');
          }
      });
  });
}

async function buscarLivros(termo) {
  try {
      // Exibe a URL para depuração
      console.log(`Buscando livros com o termo: ${termo}`);
      
      const resposta = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(termo)}`);
      const dados = await resposta.json();

      // Checa se os resultados estão no formato esperado
      if (dados.docs && dados.docs.length > 0) {
          exibirResultados(dados.docs);
      } else {
          document.getElementById('resultados').innerHTML = 'Nenhum resultado encontrado.';
      }
  } catch (erro) {
      console.log('Erro ao acessar dados:', erro);
      document.getElementById('resultados').innerHTML = 'Erro ao acessar os dados.';
  }
}

function exibirResultados(livros) {
  const resultadosDiv = document.getElementById('resultados');
  resultadosDiv.innerHTML = ''; // Limpa resultados anteriores
  livros.forEach(livro => {
    const titulo = livro.title || 'Sem título';
    const autor = livro.author_name ? livro.author_name.join(', ') : 'Autor desconhecido';
    const divLivro = document.createElement('div');
    divLivro.classList.add('livro');
    divLivro.innerHTML = `<h3>${titulo}</h3><p>Autor(es): ${autor}</p>`;
    resultadosDiv.appendChild(divLivro);
  });
}
