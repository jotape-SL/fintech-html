// fetching data

fetch('/assets/data/despesas.json').then((response) => {
  response.json().then((despesas) => {
    despesas.despesas.map((despesa) => {
      cardDs.innerHTML += `
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
fetch('/assets/data/receitas.json').then((response) => {
  response.json().then((receitas) => {
    console.log(receitas);
  });
});

// Getting elements that ill target

let cardDs = document.querySelector('.cards-ds');
