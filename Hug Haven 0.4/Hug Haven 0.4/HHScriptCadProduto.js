const novoNome = document.getElementById("novoNome");
const novoValor = document.getElementById("novoValor");
const novaQuantidade = document.getElementById("novaQuantidade");
const novoCodigo = document.querySelector("#barra_codigo");

const btn_addItem = document.getElementById("add_item");

btn_addItem.addEventListener('click', function(){
    const codigo = novoCodigo.value;
    const todosProdutos = document.querySelectorAll(".Produto_cadastro");

    // Verificar se o código já existe na lista de itens cadastrados
    for (let i = 0; i < todosProdutos.length; i++) {
        const produto = todosProdutos[i];
        const codigoExistente = produto.querySelector(".Texto_codigo").textContent;

        if (codigo === codigoExistente) {
            // Atualizar as informações do item existente
            produto.querySelector("#nome").textContent = novoNome.value;
            produto.querySelector("#valor").textContent = novoValor.value;
            produto.querySelector("#quantidade").textContent = novaQuantidade.value;

            return;
        }
    }
    
    // Criar novo elemento
    const novoProduto = document.createElement("div");
    novoProduto.classList.add("Produto_cadastro");

    const infosDiv = document.createElement("div");
    infosDiv.classList.add("Infos");

    const totalInfosDiv = document.createElement("div");
    totalInfosDiv.classList.add("Total_informacoes");

    // Adicionando nome
    const addInfosDiv = document.createElement("div");
    addInfosDiv.classList.add("Add_informacoes");

    const tituloInfosDiv = document.createElement("div");
    tituloInfosDiv.classList.add("Titulo_informacoes");
    const tituloNome = document.createElement("h6");
    tituloNome.textContent = "Nome: ";
    tituloInfosDiv.appendChild(tituloNome);

    const textoInfosDiv = document.createElement("div");
    textoInfosDiv.classList.add("Texto_informacoes");
    const textoNome = document.createElement("h6");
    textoNome.textContent = novoNome.value;
    textoNome.id = "nome";
    textoInfosDiv.appendChild(textoNome);

    addInfosDiv.appendChild(tituloInfosDiv);
    addInfosDiv.appendChild(textoInfosDiv);
    totalInfosDiv.appendChild(addInfosDiv);

    // Adicionando valor
    const addValorDiv = document.createElement("div");
    addValorDiv.classList.add("Add_informacoes");

    const tituloValorDiv = document.createElement("div");
    tituloValorDiv.classList.add("Titulo_informacoes");
    const tituloValor = document.createElement("h6");
    tituloValor.textContent = "Valor (unitário): ";
    tituloValorDiv.appendChild(tituloValor);

    const textoValorDiv = document.createElement("div");
    textoValorDiv.classList.add("Texto_informacoes");
    const textoValor = document.createElement("h6");
    textoValor.textContent = novoValor.value;
    textoValor.id = "valor";
    textoValorDiv.appendChild(textoValor);

    addValorDiv.appendChild(tituloValorDiv);
    addValorDiv.appendChild(textoValorDiv);
    totalInfosDiv.appendChild(addValorDiv);
    
    // Adicionando quantidade
    const addQuantDiv = document.createElement("div");
    addQuantDiv.classList.add("Add_informacoes");

    const tituloQuantidadeDiv = document.createElement("div");
    tituloQuantidadeDiv.classList.add("Titulo_informacoes");
    const tituloQuantidade = document.createElement("h6");
    tituloQuantidade.textContent = "Quantidade: ";
    tituloQuantidadeDiv.appendChild(tituloQuantidade);

    const textoQuantidadeDiv = document.createElement("div");
    textoQuantidadeDiv.classList.add("Texto_informacoes");
    const textoQuantidade = document.createElement("h6");
    textoQuantidade.textContent = novaQuantidade.value;
    textoQuantidade.id = "quantidade";
    textoQuantidadeDiv.appendChild(textoQuantidade);

    addQuantDiv.appendChild(tituloQuantidadeDiv);
    addQuantDiv.appendChild(textoQuantidadeDiv);
    totalInfosDiv.appendChild(addQuantDiv);

    // Criar os elementos para o código
    const addCodigoDiv = document.createElement("div");
    addCodigoDiv.classList.add("Add_codigo");

    const tituloCodigoDiv = document.createElement("div");
    tituloCodigoDiv.classList.add("Titulo_codigo");
    const tituloCodigo = document.createElement("h6");
    tituloCodigo.textContent = "Código: ";
    tituloCodigoDiv.appendChild(tituloCodigo);

    const textoCodigoDiv = document.createElement("div");
    textoCodigoDiv.classList.add("Texto_codigo");
    const textoCodigo = document.createElement("h6");
    textoCodigo.textContent = novoCodigo.value;
    textoCodigoDiv.appendChild(textoCodigo);

    addCodigoDiv.appendChild(tituloCodigoDiv);
    addCodigoDiv.appendChild(textoCodigoDiv);
    totalInfosDiv.appendChild(addCodigoDiv);

    infosDiv.appendChild(totalInfosDiv);
    novoProduto.appendChild(infosDiv);

    const btnClose = document.createElement("button");
    btnClose.id = "add_item";
    const imgClose = document.createElement("img");
    imgClose.id = "add_circle";
    imgClose.src = "./ImagensGerais/Close Circle.png";
    btnClose.appendChild(imgClose);
    novoProduto.appendChild(btnClose);

    // Adicionar o novo produto à div de todos os cadastros
    const todosCadastroDiv = document.querySelector(".Todos_cadastro");
    todosCadastroDiv.appendChild(novoProduto);
});