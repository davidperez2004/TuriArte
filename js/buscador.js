// js/buscador.js
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('buscador');
  if (!input) return;

  const cards = Array.from(document.querySelectorAll('.card'));

  const normaliza = (s) =>
    s.toLowerCase()
     .normalize('NFD')
     .replace(/[\u0300-\u036f]/g, '');

  input.addEventListener('input', () => {
    const q = normaliza(input.value);
    cards.forEach(card => {
      const texto = normaliza(card.innerText);
      card.style.display = texto.includes(q) ? '' : 'none';
    });
  });
});
