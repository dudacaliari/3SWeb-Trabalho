const Cad = document.querySelector(".Cadastro");

const btnCadastro = document.getElementById("btn_cadastro");

const perfilNome = document.getElementById("perfilNome");
const perfilEmail = document.getElementById("perfilEmail");
const perfilSenha = document.getElementById("perfilSenha");

btnCadastro.addEventListener("click", function(){
    const nomeUsuario = document.getElementById("nome");
    const emailUsuario = document.getElementById("email");
    const senhaUsuario = document.getElementById("senha");

    if(nomeUsuario.value && emailUsuario.value && senhaUsuario.value){
        perfilNome.textContent = nomeUsuario.value;
        perfilEmail.textContent = emailUsuario.value;
        perfilSenha.textContent = senhaUsuario.value.replaceAll(/./g, "*");

        Cad.style.display = "none";

        localStorage.setItem("nome", nomeUsuario.value);
        localStorage.setItem("email", emailUsuario.value);
        localStorage.setItem("senha", senhaUsuario.value);
    } else {
        alert("Informações incompletas!");
    }
});

const btnEditar = document.getElementById("btn_editar");

btnEditar.addEventListener("click", function(){
    const inputNome = document.createElement("input");
    const inputEmail = document.createElement("input");
    const inputSenha = document.createElement("input");
    
    inputNome.type = "text";
    inputEmail.type = "email";
    inputSenha.type = "password";

    inputNome.value = localStorage.getItem("nome");
    inputEmail.value = localStorage.getItem("email");
    inputSenha.value = localStorage.getItem("senha");

    inputNome.className = "novo_Cadastro";
    inputEmail.className = "novo_Cadastro";
    inputSenha.className = "novo_Cadastro";

    perfilNome.parentNode.replaceChild(inputNome, perfilNome);
    perfilEmail.parentNode.replaceChild(inputEmail, perfilEmail);
    perfilSenha.parentNode.replaceChild(inputSenha, perfilSenha);
    
    btnEditar.textContent = "OK";
    
    btnEditar.addEventListener("click", function(){
        perfilNome.textContent = inputNome.value;
        perfilEmail.textContent = inputEmail.value;
        perfilSenha.textContent = inputSenha.value.replaceAll(/./g, "*");
        

        localStorage.setItem("nome", inputNome.value);
        localStorage.setItem("email", inputEmail.value);
        localStorage.setItem("senha", inputSenha.value);
        
        inputNome.parentNode.replaceChild(perfilNome, inputNome);
        inputEmail.parentNode.replaceChild(perfilEmail, inputEmail);
        inputSenha.parentNode.replaceChild(perfilSenha, inputSenha);
        
        btnEditar.textContent = "Editar";
    });
});
