// fetching and displaying data (receitas)

fetch('/assets/data/dataDespesasReceitas.json').then((response) => {
  response.json().then((data) => {
    data.receitas.map((receita) => {
      cardPattReceitas.innerHTML += `
      <div class="card-patt__conteudo segundo-card">
      <div class="conteudo-icone"></div>
      <div class="conteudo-dados">
        <div>
          <div class="first-row">${receita.categoria}</div>
          <div class="second-row">${receita.descricao}</div>
        </div>
        <div>
          <div class="first-row">R$ ${receita.valor}</div>
          <div class="second-row">${receita.dataDia} ${receita.dataHora}</div>
        </div>
      </div>
    </div>
          `;
    });
  });
});

// Getting DOM elements that ill target

let cardPattReceitas = document.getElementById('ultimas-receitas');
