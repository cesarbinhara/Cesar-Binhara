// Controle de Abas
function switchTab(tabId) {
    // Remove active de todos os conteúdos
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Remove active de todos os botões
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Ativa a aba e o botão clicado
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

// Efeito do Mouse (o seu original otimizado)
document.addEventListener("mousemove", e => {
    document.documentElement.style.setProperty("--x", e.clientX + "px");
    document.documentElement.style.setProperty("--y", e.clientY + "px");
});