const cardRecorrencia = document.getElementById('recorrenciaCard');
const textoRecorrencia = document.getElementById('recorrenciaTexto');
const textoNaoRecorrencia = document.getElementById('recorrenciaNaoTexto');
const iconRecorrencia = document.getElementById('recorrenciaIcon');

cardRecorrencia.addEventListener('click', () => {
  textoRecorrencia.classList.toggle('visually-hidden');
  textoNaoRecorrencia.classList.toggle('visually-hidden');
  iconRecorrencia.classList.toggle('animacao-rotacao');
  const recorente = textoNaoRecorrencia.classList.contains('visually-hidden');
  if (recorente) {
    cardRecorrencia.setAttribute('aria-label', 'Recorrente');
  } else {
    cardRecorrencia.setAttribute('aria-label', 'Não recorrente');
  }
});
