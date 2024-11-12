document.addEventListener("DOMContentLoaded", function () {
    // Selecione todos os botões de adicionar ao carrinho
    var btnsAddCarrinho = document.querySelectorAll(".btn_addcarrinho");
  
    // Adicione o evento de clique a cada botão
    btnsAddCarrinho.forEach(function (btn) {
      btn.addEventListener("click", function () {
        
        var nomeSquish = this.parentNode.querySelector(".nome").textContent;
        var valorSquish = this.parentNode.querySelector(".valor").textContent;
        var imagemSquish = this.parentNode.parentNode.querySelector(".imagemSquish").src;

        var carrinhoProdutos = sessionStorage.getItem("carrinhoProdutos");
        if (carrinhoProdutos) {
          carrinhoProdutos = JSON.parse(carrinhoProdutos);
        } else {
          carrinhoProdutos = [];
        }
  
        var novoSquish = {
          nome: nomeSquish,
          valor: valorSquish,
          imagem: imagemSquish
        };
  
        carrinhoProdutos.push(novoSquish);
        sessionStorage.setItem("carrinhoProdutos", JSON.stringify(carrinhoProdutos));
        window.location.href = "HHCarrinho.html";
  
      });
    });
    var carrinhoProdutos = sessionStorage.getItem("carrinhoProdutos");
    if (carrinhoProdutos) {
      carrinhoProdutos = JSON.parse(carrinhoProdutos);
  
      carrinhoProdutos.forEach(function (squish) {
        var carrinho = document.createElement("div");
        carrinho.className = "Carrinho_produtos";
  
        var novoProduto = document.createElement("div");
        novoProduto.className = "prod_carrinho";
  
        var novaImagem = document.createElement("img");
        novaImagem.className = "imagem_carrinho";
        novaImagem.src = squish.imagem;
  
        var novoInfoCarrinho = document.createElement("div");
        novoInfoCarrinho.className = "Infos_carrinho";
  
        var novoNome = document.createElement("h4");
        novoNome.className = "nome_carrinho";
        novoNome.textContent = squish.nome;
  
        var novaEntrega = document.createElement("h6");
        novaEntrega.className = "entrega_carrinho";
        novaEntrega.textContent = "Estimativa de entrega 12 a 15 dias";
  
        var novaQuantidade = document.createElement("div");
        novaQuantidade.className = "quantidade_carrinho";
        var novaQuantidadeTexto = document.createElement("h6");
        novaQuantidadeTexto.textContent = "1";
        novaQuantidade.appendChild(novaQuantidadeTexto);
  
        var novoPreco = document.createElement("h5");
        novoPreco.className = "valor_carrinho";
        novoPreco.textContent = squish.valor;
  
        novoInfoCarrinho.appendChild(novoNome);
        novoInfoCarrinho.appendChild(novaEntrega);
        novoInfoCarrinho.appendChild(novaQuantidade);
        novoInfoCarrinho.appendChild(novoPreco);
  
        novoProduto.appendChild(novaImagem);
        novoProduto.appendChild(novoInfoCarrinho);
  
        var botaoExcluir = document.createElement("button");
        botaoExcluir.id = "excluir_item";
        var iconeExcluir = document.createElement("img");
        iconeExcluir.id = "close_circle";
        iconeExcluir.src = "./ImagensGerais/Close Circle.png";
        botaoExcluir.appendChild(iconeExcluir);
        novoProduto.appendChild(botaoExcluir);
  
        carrinho.appendChild(novoProduto);
  
        
        var todosProdutos = document.querySelector(".todos_produtos");
        todosProdutos.appendChild(carrinho);
      });
    }
  });
  