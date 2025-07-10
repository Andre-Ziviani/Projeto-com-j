console.log("JS carregado");
function changeTheme() {
      const theme = document.getElementById('theme').value;

      if (theme === 'claro') {
        document.documentElement.style.setProperty('--cor-fundo', '#FBFFE4');
        document.documentElement.style.setProperty('--cor-texto', '#3D8D7A');
        document.documentElement.style.setProperty('--cor-destaque', '#B3D8A8');
        document.documentElement.style.setProperty('--cor-nave', '#A3D1C6');
      }

      if (theme === 'escuro') {
        document.documentElement.style.setProperty('--cor-fundo', '#2E073F');
        document.documentElement.style.setProperty('--cor-texto', '#EBD3F8');
        document.documentElement.style.setProperty('--cor-destaque', '#7A1CAC');
        document.documentElement.style.setProperty('--cor-nave', '#AD49E1');
      }
    };

document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM carregado e JS executando");

  const steps = document.querySelectorAll('.step');

  steps.forEach(step => {
    const header = step.querySelector('.step-header');
    header.addEventListener('click', () => {
      const isActive = step.classList.contains('active');

      // Fecha todos
      steps.forEach(s => {
        s.classList.remove('active');
        s.querySelector('.step-header').setAttribute('aria-expanded', 'false');
      });

      // Se não estava ativo, ativa este
      if (!isActive) {
        step.classList.add('active');
        header.setAttribute('aria-expanded', 'true');
      }
    });
  });
});
