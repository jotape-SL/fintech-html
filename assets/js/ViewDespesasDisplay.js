// fetching and displaying data (despesas)

fetch('/assets/data/dataDespesasReceitas.json').then((response) => {
  response.json().then((data) => {
    data.despesas.map((despesa) => {
      cardDsDespesas.innerHTML += `
        <div class="card-cat">
          <div>
            <span class="material-symbols-outlined custom icone-cat">
              play_shapes
            </span>
          </div>
          <div class="columns">
            <div class="first-column">
              <p class="nm">${despesa.categoria}</p>
              <p class="dtnm">${despesa.dataDia} (${despesa.dataSemana}) ${despesa.dataHora}</p>
              <p class="ds">Descrição</p>
            </div>
            <div class="second-column">
              <p class="vl">R$ ${despesa.valor}</p>
            </div>
          </div>
        </div>
        `;
    });
  });
});

// Getting DOM elements that ill target

let cardDsDespesas = document.getElementById('data-despesas');
