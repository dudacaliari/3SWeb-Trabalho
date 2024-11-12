document.addEventListener("DOMContentLoaded", function () {
  var btnsAddCarrinho = document.querySelectorAll(".btn_addcarrinho");

  btnsAddCarrinho.forEach(function (btn){
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

      var squishExistente = false;

      for (var i = 0; i < carrinhoProdutos.length; i++) {
        var squish = carrinhoProdutos[i];
        if (squish.nome === nomeSquish) {
          squishExistente = true;
          squish.quantidade++;
          break;
        }
      }

      if (!squishExistente) {
        var novoSquish = {
          nome: nomeSquish,
          valor: valorSquish,
          imagem: imagemSquish,
          quantidade: 1
        };
        carrinhoProdutos.push(novoSquish);
      }

      sessionStorage.setItem("carrinhoProdutos", JSON.stringify(carrinhoProdutos));
      window.location.href = "HHCarrinho.html";
    });
  });

  var carrinhoProdutos = sessionStorage.getItem("carrinhoProdutos");
  if (carrinhoProdutos) {
    carrinhoProdutos = JSON.parse(carrinhoProdutos);

    var subtotal = 0;
    var quantidadeTotal = 0;

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
      novaQuantidadeTexto.textContent = squish.quantidade;
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

      var valorInteiro = parseInt(squish.valor.replace(',', '.').replace(/[^\d.-]/g, ''));
      subtotal += valorInteiro * squish.quantidade;

      quantidadeTotal += squish.quantidade;
    });

    var subtotalElement = document.getElementById("totalsub_carrinho");
    subtotalElement.textContent = subtotal.toFixed(2).replace('.', ','); // substitui o ponto por vírgula para exibir corretamente

    var quantidadeTotalElement = document.getElementById("quantidadesub_carrinho");
    quantidadeTotalElement.textContent = "Itens - " + quantidadeTotal;
  }

  // var botaoComprar = document.getElementById("comprar_carrinho");

  // var pedidosContainer = document.querySelector(".TodosSquishs_pedidos");
  // var container = document.querySelector(".container");
  // var interno = document.querySelector(".interno");

  // botaoComprar.addEventListener("click", function () {
  //   // Obtenha os produtos do carrinho do sessionStorage
  //   var carrinhoProdutos = sessionStorage.getItem("carrinhoProdutos");
  //   if (carrinhoProdutos) {
  //     carrinhoProdutos = JSON.parse(carrinhoProdutos);

  //     // Adicione os produtos à página de pedidos

  //     // Percorra os produtos do carrinho
  //     carrinhoProdutos.forEach(function (squish){

  //       var squishPedido = document.createElement("div");
  //       squishPedido.className = "Squish_pedidos";

  //       // Crie o elemento de imagem
  //       var imagemSquishPedido = document.createElement("img");
  //       imagemSquishPedido.className = "imagemSquish_pedidos";
  //       imagemSquishPedido.src = squish.imagem;

  //       // Crie o elemento Infos_pedidos
  //       var infosPedidos = document.createElement("div");
  //       infosPedidos.className = "Infos_pedidos";

  //       // Crie o elemento do nome do Squish
  //       var nomePedidos = document.createElement("h4");
  //       nomePedidos.className = "nome_pedidos";
  //       nomePedidos.textContent = squish.nome;

  //       // Crie o elemento de estimativa de entrega
  //       var entregaPedidos = document.createElement("h6");
  //       entregaPedidos.className = "entrega_pedidos";
  //       entregaPedidos.textContent = "Estimativa de entrega 12 a 15 dias";

  //       // Crie o elemento da quantidade
  //       var quantidadePedidos = document.createElement("div");
  //       quantidadePedidos.className = "quantidade_pedidos";
  //       var quantidadePedidosTexto = document.createElement("h6");
  //       quantidadePedidosTexto.textContent = squish.quantidade;
  //       quantidadePedidos.appendChild(quantidadePedidosTexto);

  //       // Crie o elemento do valor
  //       var valorPedidos = document.createElement("h5");
  //       valorPedidos.className = "valor_pedidos";
  //       valorPedidos.textContent = squish.valor;

  //       // Crie o elemento de envio
  //       var envioPedidos = document.createElement("div");
  //       envioPedidos.className = "Envio_pedidos";

  //       // Crie o elemento de status
  //       var acaminhoPedidos = document.createElement("h6");
  //       acaminhoPedidos.className = "acaminho_pedidos";
  //       acaminhoPedidos.textContent = "A Caminho";

  //       // Crie o elemento de localização
  //       var locationPedidos = document.createElement("img");
  //       locationPedidos.className = "location_pedidos";
  //       locationPedidos.src = "./ImagensGerais/Location.png";

  //       infosPedidos.appendChild(nomePedidos);
  //       infosPedidos.appendChild(entregaPedidos);
  //       infosPedidos.appendChild(quantidadePedidos);
  //       infosPedidos.appendChild(valorPedidos);

  //       // Adicione os elementos ao container
  //       envioPedidos.appendChild(acaminhoPedidos);
  //       envioPedidos.appendChild(locationPedidos);

  //       // Adicione os elementos ao container principal
  //       squishPedido.appendChild(imagemSquishPedido);
  //       squishPedido.appendChild(infosPedidos);
  //       squishPedido.appendChild(envioPedidos);


  //       pedidosContainer.appendChild(squishPedido);
  //     });
  //     //Limpe o carrinho no sessionStorage
  //     sessionStorage.removeItem("carrinhoProdutos");
  //   }
  // });
});
