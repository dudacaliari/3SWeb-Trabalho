document.addEventListener("DOMContentLoaded", function () {
  var botaoComprar = document.getElementById("comprar_carrinho");
  var pedidosContainer = document.querySelector(".TodosSquishs_pedidos");
//   var container = document.querySelector(".container");
//   var interno = document.querySelector(".interno");

  botaoComprar.addEventListener("click", function () {
    // Obtenha os produtos do carrinho do sessionStorage
    var carrinhoProdutos = sessionStorage.getItem("carrinhoProdutos");
    if (carrinhoProdutos) {
      carrinhoProdutos = JSON.parse(carrinhoProdutos);

      // Adicione os produtos à página de pedidos

      // Percorra os produtos do carrinho
      carrinhoProdutos.forEach(function (squish){

        var squishPedido = document.createElement("div");
        squishPedido.className = "Squish_pedidos";

        // Crie o elemento de imagem
        var imagemSquishPedido = document.createElement("img");
        imagemSquishPedido.className = "imagemSquish_pedidos";
        imagemSquishPedido.src = squish.imagem;

        // Crie o elemento Infos_pedidos
        var infosPedidos = document.createElement("div");
        infosPedidos.className = "Infos_pedidos";

        // Crie o elemento do nome do Squish
        var nomePedidos = document.createElement("h4");
        nomePedidos.className = "nome_pedidos";
        nomePedidos.textContent = squish.nome;

        // Crie o elemento de estimativa de entrega
        var entregaPedidos = document.createElement("h6");
        entregaPedidos.className = "entrega_pedidos";
        entregaPedidos.textContent = "Estimativa de entrega 12 a 15 dias";

        // Crie o elemento da quantidade
        var quantidadePedidos = document.createElement("div");
        quantidadePedidos.className = "quantidade_pedidos";
        var quantidadePedidosTexto = document.createElement("h6");
        quantidadePedidosTexto.textContent = squish.quantidade;
        quantidadePedidos.appendChild(quantidadePedidosTexto);

        // Crie o elemento do valor
        var valorPedidos = document.createElement("h5");
        valorPedidos.className = "valor_pedidos";
        valorPedidos.textContent = squish.valor;

        // Crie o elemento de envio
        var envioPedidos = document.createElement("div");
        envioPedidos.className = "Envio_pedidos";

        // Crie o elemento de status
        var acaminhoPedidos = document.createElement("h6");
        acaminhoPedidos.className = "acaminho_pedidos";
        acaminhoPedidos.textContent = "A Caminho";

        // Crie o elemento de localização
        var locationPedidos = document.createElement("img");
        locationPedidos.className = "location_pedidos";
        locationPedidos.src = "./ImagensGerais/Location.png";

        infosPedidos.appendChild(nomePedidos);
        infosPedidos.appendChild(entregaPedidos);
        infosPedidos.appendChild(quantidadePedidos);
        infosPedidos.appendChild(valorPedidos);

        // Adicione os elementos ao container
        envioPedidos.appendChild(acaminhoPedidos);
        envioPedidos.appendChild(locationPedidos);

        // Adicione os elementos ao container principal
        squishPedido.appendChild(imagemSquishPedido);
        squishPedido.appendChild(infosPedidos);
        squishPedido.appendChild(envioPedidos);
        
        pedidosContainer.appendChild(squishPedido);
        // var container = document.querySelector(".container")
        // container.appendChild(pedidosContainer);

        // var interno = document.querySelector(".Interno");
        // interno.appendChild(container);

        //document.body.appendChild(pedidosContainer);
      });

      window.location.href = "HHPedidos.html";
      //Limpe o carrinho no sessionStorage
      sessionStorage.removeItem("carrinhoProdutos");
    }
  });

});