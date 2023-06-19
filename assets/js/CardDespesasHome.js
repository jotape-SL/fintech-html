// fetching and displaying data (despesas)

fetch('/assets/data/dataDespesasReceitas.json').then((response) => {
  response.json().then((data) => {
    data.despesas.map((despesa) => {
      cardPattDespesas.innerHTML += `
        <div class="card-patt__conteudo segundo-card">
        <div class="conteudo-icone"></div>
        <div class="conteudo-dados">
          <div>
            <div class="first-row">${despesa.categoria}</div>
            <div class="second-row">${despesa.descricao}</div>
          </div>
          <div>
            <div class="first-row">R$ ${despesa.valor}</div>
            <div class="second-row">${despesa.dataDia} ${despesa.dataHora}</div>
          </div>
        </div>
      </div>
            `;
    });
  });
});

// Getting DOM elements that ill target

let cardPattDespesas = document.getElementById('ultimas-despesas');
