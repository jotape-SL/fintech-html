// fetching and displaying data (receitas)

fetch('/assets/data/dataDespesasReceitas.json').then((response) => {
  response.json().then((data) => {
    data.receitas.map((receita) => {
      cardDsReceitas.innerHTML += `
        <div class="card-cat">
          <div>
            <span class="material-symbols-outlined custom icone-cat">
              play_shapes
            </span>
          </div>
          <div class="columns">
            <div class="first-column">
              <p class="nm">${receita.categoria}</p>
              <p class="dtnm">${receita.dataDia} (${receita.dataSemana}) ${receita.dataHora}</p>
              <p class="ds">Descrição</p>
            </div>
            <div class="second-column">
              <p class="vl">R$ ${receita.valor}</p>
            </div>
          </div>
        </div>
        `;
    });
  });
});

// Getting DOM elements that ill target

let cardDsReceitas = document.getElementById('data-receitas');
