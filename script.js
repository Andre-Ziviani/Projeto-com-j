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
    }
