function exibePopUp(elemento) {
    if (elemento.style.display === "block") {
        elemento.style.display = "none";
      } else {
        elemento.style.display = "block";
      }
    } 
  function escondePopUp(elemento) {
    elemento.style.display = "none";
  }
  
  const Cadastro = document.querySelector(".Cadastro");
  const perfil = document.getElementById("perfil");
  
  perfil.addEventListener('click', function() {
    exibePopUp(Cadastro);
  });
  
  const Usuario = document.querySelector(".Usuario_posicao");
  const btn_cadastro = document.getElementById("btn_cadastro");
  
  btn_cadastro.addEventListener('click', function() {
    exibePopUp(Usuario);
  });
  
  const Acessados_recentemente = document.querySelector(".Acessados_recentemente");
  const recentes = document.getElementById("recentes");
  
  recentes.addEventListener('click', function(event) {
    event.preventDefault();
    exibePopUp(Acessados_recentemente);
  });
  
  document.addEventListener('click', function(event) {
    const targetElement = event.target;
  
    if (!Cadastro.contains(targetElement) && targetElement !== perfil) {
      escondePopUp(Cadastro);
    }
  
    if (!Usuario.contains(targetElement) && targetElement !== btn_cadastro) {
      escondePopUp(Usuario);
    }
  
    if (!Acessados_recentemente.contains(targetElement) && targetElement !== recentes) {
      escondePopUp(Acessados_recentemente);
    }
  });