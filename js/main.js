const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav-links');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? 'Fechar ✕' : 'Menu ☰';
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.textContent = 'Menu ☰';
  }));
}
const copyButton = document.querySelector('.copy-code');
if (copyButton) {
  copyButton.addEventListener('click', async () => {
    const code = document.querySelector('#sample-code').innerText;
    try {
      await navigator.clipboard.writeText(code);
      copyButton.textContent = 'Copiado!';
      setTimeout(() => { copyButton.textContent = 'Copiar código'; }, 1800);
    } catch {
      copyButton.textContent = 'Selecione e copie';
    }
  });
}
