const heroActions = document.querySelectorAll('.btn');
heroActions.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.classList.contains('btn-primary')) {
      button.classList.add('pulse');
      setTimeout(() => button.classList.remove('pulse'), 400);
    }
  });
});

const mapPlaceholder = document.querySelector('.map-placeholder');
if (mapPlaceholder) {
  mapPlaceholder.addEventListener('click', () => {
    mapPlaceholder.textContent = 'Interação de mapa ativada — exibindo dados de avistamentos em breve';
    mapPlaceholder.style.color = '#f5f9ff';
  });
}

const evidenceForm = document.querySelector('.form-shell form');
const formNotice = document.querySelector('.form-notice');
if (evidenceForm && formNotice) {
  evidenceForm.addEventListener('submit', (event) => {
    event.preventDefault();
    formNotice.classList.remove('hidden');
    formNotice.textContent = 'Relatório recebido com sucesso. Nossa equipe ANPEX está revisando os dados.';
  });
}
