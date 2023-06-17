fetch('/assets/data/despesas.json').then((response) => {
  response.json().then((despesas) => {
    console.log(despesas);
  });
});
fetch('/assets/data/receitas.json').then((response) => {
  response.json().then((receitas) => {
    console.log(receitas);
  });
});
