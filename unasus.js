// Adiciona o evento de clique nos botões de controle
document.querySelectorAll('.carousel-btn').forEach((button, index) => {
  button.addEventListener('click', () => {
    // Remove a classe 'active' de todos os botões
    document.querySelectorAll('.carousel-btn').forEach(btn => btn.classList.remove('active'));
    
    // Adiciona a classe 'active' no botão clicado
    button.classList.add('active');
  });
});