// Adiciona o evento de clique nos botões de controle
document.querySelectorAll('.carousel-btn').forEach((button, index) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.carousel-btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});

// Passa seta do lado para o outro
function moveCarousel(direction) {
  if (direction === 'prev') {
  } else if (direction === 'next') {
  }
}