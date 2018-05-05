app.controller('statsCtrl', function ($scope, Util) {
    $scope.listaFixa = [];
    $scope.lista = [];
    $scope.ListarStatsCategorias = [];
    $scope.ListarStatsCor = [];

    $scope.init = function () {
        var listaAux = Util.obterObjeto('ItensDaLista');
        var listaAuxFixa = Util.obterObjeto('ItensDaListaFixa');

        if (listaAux != '') {
            $scope.lista = Util.converterParaObjeto(listaAux);
        }
        if (listaAuxFixa != '') {
            $scope.listaFixa = Util.converterParaObjeto(listaAuxFixa);
        }
        /*LISTAS CATEGORIA*/
        $scope.ObterTipoComida();
        $scope.ObterTipoCinema();
        $scope.ObterTipoLanche();
        $scope.ObterTipoMusica();
        $scope.ObterTipoEsportes();
        $scope.ObterTipoJogos();
        $scope.ObterTipoLivros();
        $scope.ObterTipoCerveja();

        /*LISTAS COR*/
        $scope.ObterCorRoxo();
        $scope.ObterCorVermelho();
        $scope.ObterCorVerde();
        $scope.ObterCorLaranja();
        $scope.ObterCorAzul();

    }

    $scope.platform = ionic.Platform.platform();

    $scope.somarFixados = function () {
        var totalListaFixa = 0;
        angular.forEach($scope.listaFixa, function (key, value) {
            totalListaFixa += key.preco;
        });
        totalListaFixa = parseFloat(totalListaFixa);
        return totalListaFixa.toFixed(2);
    }

    $scope.somarAdc = function () {
        var totalLista = 0;
        angular.forEach($scope.lista, function (key, value) {
            totalLista += key.preco;
        });
        totalLista = parseFloat(totalLista);
        return totalLista.toFixed(2);
    }

    $scope.precoTotalSomado = function () {
        var total = 0;
        var totalLista = 0;
        var totalListaFixa = 0;
        angular.forEach($scope.lista, function (key, value) {
            totalLista += key.preco;
        });
        angular.forEach($scope.listaFixa, function (key, value) {
            totalListaFixa += key.preco;
        });
        total = totalLista + totalListaFixa;
        total = parseFloat(total);
        return total.toFixed(2);
    }
    /*Lista Categorias */
    $scope.ObterTipoComida = function () {
        var contagem = 0;
        var precoTotalGasto = 0;
        angular.forEach($scope.lista, function (key, value) {
            if (key.gasto == "Comida") {
                contagem += 1;
                precoTotalGasto += key.preco;
            }
        });
        angular.forEach($scope.listaFixa, function (key, value) {
            if (key.gasto == "Comida") {
                contagem += 1;
                precoTotalGasto += key.preco;
            }
        });
        if (contagem >= 1) {
            /*PORCENTAGEM ITEM*/
            var itensTotal = $scope.lista.length + $scope.listaFixa.length;
            var resultadoPorcentagemContagem = (contagem * 100) / itensTotal;
            resultadoPorcentagemContagem = parseFloat(resultadoPorcentagemContagem.toFixed(2));
            /*PORCENTAGEM ITEM*/

            /* PORCENTAGEM PRECO*/
            var precoTotal = $scope.precoTotalSomado();
            var resultadoPorcentagemPreco = (precoTotalGasto * 100) / precoTotal;
            resultadoPorcentagemPreco = parseFloat(resultadoPorcentagemPreco.toFixed(2));
            /* PORCENTAGEM PRECO*/

            /*TOTAL PRECO */
            precoTotalGasto = precoTotalGasto.toFixed(2);
            /*TOTAL PRECO */

            var itemExistente = { categoria: "Comida", totalDeItens: contagem, porcentoItens: resultadoPorcentagemContagem, porcentoPreco: resultadoPorcentagemPreco, precoTotal: precoTotalGasto }
            $scope.ListarStatsCategorias.push(itemExistente);
        }
    }

    $scope.ObterTipoCinema = function () {
        var contagem = 0;
        var precoTotalGasto = 0;
        angular.forEach($scope.lista, function (key, value) {
            if (key.gasto == "Cinema") {
                contagem += 1;
                precoTotalGasto += key.preco;
            }
        });
        angular.forEach($scope.listaFixa, function (key, value) {
            if (key.gasto == "Cinema") {
                contagem += 1;
                precoTotalGasto += key.preco;
            }
        });
        if (contagem >= 1) {
            /*PORCENTAGEM ITEM*/
            var itensTotal = $scope.lista.length + $scope.listaFixa.length;
            var resultadoPorcentagemContagem = (contagem * 100) / itensTotal;
            resultadoPorcentagemContagem = parseFloat(resultadoPorcentagemContagem.toFixed(2));
            /*PORCENTAGEM ITEM*/

            /* PORCENTAGEM PRECO*/
            var precoTotal = $scope.precoTotalSomado();
            var resultadoPorcentagemPreco = (precoTotalGasto * 100) / precoTotal;
            resultadoPorcentagemPreco = parseFloat(resultadoPorcentagemPreco.toFixed(2));
            /* PORCENTAGEM PRECO*/

            /*TOTAL PRECO */
            precoTotalGasto = precoTotalGasto.toFixed(2);
            /*TOTAL PRECO */

            var itemExistente = { categoria: "Cinema", totalDeItens: contagem, porcentoItens: resultadoPorcentagemContagem, porcentoPreco: resultadoPorcentagemPreco, precoTotal: precoTotalGasto }
            $scope.ListarStatsCategorias.push(itemExistente);
        }
    }

    $scope.ObterTipoLanche = function () {
        var contagem = 0;
        var precoTotalGasto = 0;
        angular.forEach($scope.lista, function (key, value) {
            if (key.gasto == "Lanche") {
                contagem += 1;
                precoTotalGasto += key.preco;
            }
        });
        angular.forEach($scope.listaFixa, function (key, value) {
            if (key.gasto == "Lanche") {
                contagem += 1;
                precoTotalGasto += key.preco;
            }
        });
        if (contagem >= 1) {
            /*PORCENTAGEM ITEM*/
            var itensTotal = $scope.lista.length + $scope.listaFixa.length;
            var resultadoPorcentagemContagem = (contagem * 100) / itensTotal;
            resultadoPorcentagemContagem = parseFloat(resultadoPorcentagemContagem.toFixed(2));
            /*PORCENTAGEM ITEM*/

            /* PORCENTAGEM PRECO*/
            var precoTotal = $scope.precoTotalSomado();
            var resultadoPorcentagemPreco = (precoTotalGasto * 100) / precoTotal;
            resultadoPorcentagemPreco = parseFloat(resultadoPorcentagemPreco.toFixed(2));
            /* PORCENTAGEM PRECO*/

            /*TOTAL PRECO */
            precoTotalGasto = precoTotalGasto.toFixed(2);
            /*TOTAL PRECO */

            var itemExistente = { categoria: "Lanche", totalDeItens: contagem, porcentoItens: resultadoPorcentagemContagem, porcentoPreco: resultadoPorcentagemPreco, precoTotal: precoTotalGasto }
            $scope.ListarStatsCategorias.push(itemExistente);
        }
    }

    $scope.ObterTipoMusica = function () {
        var contagem = 0;
        var precoTotalGasto = 0;
        angular.forEach($scope.lista, function (key, value) {
            if (key.gasto == "Música") {
                contagem += 1;
                precoTotalGasto += key.preco;
            }
        });
        angular.forEach($scope.listaFixa, function (key, value) {
            if (key.gasto == "Música") {
                contagem += 1;
                precoTotalGasto += key.preco;
            }
        });
        if (contagem >= 1) {
            /*PORCENTAGEM ITEM*/
            var itensTotal = $scope.lista.length + $scope.listaFixa.length;
            var resultadoPorcentagemContagem = (contagem * 100) / itensTotal;
            resultadoPorcentagemContagem = parseFloat(resultadoPorcentagemContagem.toFixed(2));
            /*PORCENTAGEM ITEM*/

            /* PORCENTAGEM PRECO*/
            var precoTotal = $scope.precoTotalSomado();
            var resultadoPorcentagemPreco = (precoTotalGasto * 100) / precoTotal;
            resultadoPorcentagemPreco = parseFloat(resultadoPorcentagemPreco.toFixed(2));
            /* PORCENTAGEM PRECO*/

            /*TOTAL PRECO */
            precoTotalGasto = precoTotalGasto.toFixed(2);
            /*TOTAL PRECO */

            var itemExistente = { categoria: "Música", totalDeItens: contagem, porcentoItens: resultadoPorcentagemContagem, porcentoPreco: resultadoPorcentagemPreco, precoTotal: precoTotalGasto }
            $scope.ListarStatsCategorias.push(itemExistente);
        }
    }

    $scope.ObterTipoEsportes = function () {
        var contagem = 0;
        var precoTotalGasto = 0;
        angular.forEach($scope.lista, function (key, value) {
            if (key.gasto == "Esportes") {
                contagem += 1;
                precoTotalGasto += key.preco;
            }
        });
        angular.forEach($scope.listaFixa, function (key, value) {
            if (key.gasto == "Esportes") {
                contagem += 1;
                precoTotalGasto += key.preco;
            }
        });
        if (contagem >= 1) {
            /*PORCENTAGEM ITEM*/
            var itensTotal = $scope.lista.length + $scope.listaFixa.length;
            var resultadoPorcentagemContagem = (contagem * 100) / itensTotal;
            resultadoPorcentagemContagem = parseFloat(resultadoPorcentagemContagem.toFixed(2));
            /*PORCENTAGEM ITEM*/

            /* PORCENTAGEM PRECO*/
            var precoTotal = $scope.precoTotalSomado();
            var resultadoPorcentagemPreco = (precoTotalGasto * 100) / precoTotal;
            resultadoPorcentagemPreco = parseFloat(resultadoPorcentagemPreco.toFixed(2));
            /* PORCENTAGEM PRECO*/

            /*TOTAL PRECO */
            precoTotalGasto = precoTotalGasto.toFixed(2);
            /*TOTAL PRECO */

            var itemExistente = { categoria: "Esportes", totalDeItens: contagem, porcentoItens: resultadoPorcentagemContagem, porcentoPreco: resultadoPorcentagemPreco, precoTotal: precoTotalGasto }
            $scope.ListarStatsCategorias.push(itemExistente);
        }
    }

    $scope.ObterTipoJogos = function () {
        var contagem = 0;
        var precoTotalGasto = 0;
        angular.forEach($scope.lista, function (key, value) {
            if (key.gasto == "Jogos") {
                contagem += 1;
                precoTotalGasto += key.preco;
            }
        });
        angular.forEach($scope.listaFixa, function (key, value) {
            if (key.gasto == "Jogos") {
                contagem += 1;
                precoTotalGasto += key.preco;
            }
        });
        if (contagem >= 1) {
            /*PORCENTAGEM ITEM*/
            var itensTotal = $scope.lista.length + $scope.listaFixa.length;
            var resultadoPorcentagemContagem = (contagem * 100) / itensTotal;
            resultadoPorcentagemContagem = parseFloat(resultadoPorcentagemContagem.toFixed(2));
            /*PORCENTAGEM ITEM*/

            /* PORCENTAGEM PRECO*/
            var precoTotal = $scope.precoTotalSomado();
            var resultadoPorcentagemPreco = (precoTotalGasto * 100) / precoTotal;
            resultadoPorcentagemPreco = parseFloat(resultadoPorcentagemPreco.toFixed(2));
            /* PORCENTAGEM PRECO*/

            /*TOTAL PRECO */
            precoTotalGasto = precoTotalGasto.toFixed(2);
            /*TOTAL PRECO */

            var itemExistente = { categoria: "Jogos", totalDeItens: contagem, porcentoItens: resultadoPorcentagemContagem, porcentoPreco: resultadoPorcentagemPreco, precoTotal: precoTotalGasto }
            $scope.ListarStatsCategorias.push(itemExistente);
        }
    }

    $scope.ObterTipoLivros = function () {
        var contagem = 0;
        var precoTotalGasto = 0;
        angular.forEach($scope.lista, function (key, value) {
            if (key.gasto == "Livros") {
                contagem += 1;
                precoTotalGasto += key.preco;
            }
        });
        angular.forEach($scope.listaFixa, function (key, value) {
            if (key.gasto == "Livros") {
                contagem += 1;
                precoTotalGasto += key.preco;
            }
        });
        if (contagem >= 1) {
            /*PORCENTAGEM ITEM*/
            var itensTotal = $scope.lista.length + $scope.listaFixa.length;
            var resultadoPorcentagemContagem = (contagem * 100) / itensTotal;
            resultadoPorcentagemContagem = parseFloat(resultadoPorcentagemContagem.toFixed(2));
            /*PORCENTAGEM ITEM*/

            /* PORCENTAGEM PRECO*/
            var precoTotal = $scope.precoTotalSomado();
            var resultadoPorcentagemPreco = (precoTotalGasto * 100) / precoTotal;
            resultadoPorcentagemPreco = parseFloat(resultadoPorcentagemPreco.toFixed(2));
            /* PORCENTAGEM PRECO*/

            /*TOTAL PRECO */
            precoTotalGasto = precoTotalGasto.toFixed(2);
            /*TOTAL PRECO */

            var itemExistente = { categoria: "Livros", totalDeItens: contagem, porcentoItens: resultadoPorcentagemContagem, porcentoPreco: resultadoPorcentagemPreco, precoTotal: precoTotalGasto }
            $scope.ListarStatsCategorias.push(itemExistente);
        }
    }

    $scope.ObterTipoCerveja = function () {
        var contagem = 0;
        var precoTotalGasto = 0;
        angular.forEach($scope.lista, function (key, value) {
            if (key.gasto == "Cerveja") {
                contagem += 1;
                precoTotalGasto += key.preco;
            }
        });
        angular.forEach($scope.listaFixa, function (key, value) {
            if (key.gasto == "Cerveja") {
                contagem += 1;
                precoTotalGasto += key.preco;
            }
        });
        if (contagem >= 1) {
            /*PORCENTAGEM ITEM*/
            var itensTotal = $scope.lista.length + $scope.listaFixa.length;
            var resultadoPorcentagemContagem = (contagem * 100) / itensTotal;
            resultadoPorcentagemContagem = parseFloat(resultadoPorcentagemContagem.toFixed(2));
            /*PORCENTAGEM ITEM*/

            /* PORCENTAGEM PRECO*/
            var precoTotal = $scope.precoTotalSomado();
            var resultadoPorcentagemPreco = (precoTotalGasto * 100) / precoTotal;
            resultadoPorcentagemPreco = parseFloat(resultadoPorcentagemPreco.toFixed(2));
            /* PORCENTAGEM PRECO*/

            /*TOTAL PRECO */
            precoTotalGasto = precoTotalGasto.toFixed(2);
            /*TOTAL PRECO */

            var itemExistente = { categoria: "Cerveja", totalDeItens: contagem, porcentoItens: resultadoPorcentagemContagem, porcentoPreco: resultadoPorcentagemPreco, precoTotal: precoTotalGasto }
            $scope.ListarStatsCategorias.push(itemExistente);
        }
    }

    /*Lista Cores */

    $scope.ObterCorVermelho = function () {
        var contagem = 0;
        var precoTotalGasto = 0;
        angular.forEach($scope.lista, function (key, value) {
            if (key.cor == "Vermelho") {
                contagem += 1;
                precoTotalGasto += key.preco;
            }
        });
        angular.forEach($scope.listaFixa, function (key, value) {
            if (key.cor == "Vermelho") {
                contagem += 1;
                precoTotalGasto += key.preco;
            }
        });
        if (contagem >= 1) {
            /*PORCENTAGEM ITEM*/
            var itensTotal = $scope.lista.length + $scope.listaFixa.length;
            var resultadoPorcentagemContagem = (contagem * 100) / itensTotal;
            resultadoPorcentagemContagem = parseFloat(resultadoPorcentagemContagem.toFixed(2));
            /*PORCENTAGEM ITEM*/

            /* PORCENTAGEM PRECO*/
            var precoTotal = $scope.precoTotalSomado();
            var resultadoPorcentagemPreco = (precoTotalGasto * 100) / precoTotal;
            resultadoPorcentagemPreco = parseFloat(resultadoPorcentagemPreco.toFixed(2));
            /* PORCENTAGEM PRECO*/

            /*TOTAL PRECO */
            precoTotalGasto = precoTotalGasto.toFixed(2);
            /*TOTAL PRECO */

            var itemExistenteCor = { corDigitada: "Vermelho", totalDeItens: contagem, cor: "#c0392b", porcentoItens: resultadoPorcentagemContagem, porcentoPreco: resultadoPorcentagemPreco, precoTotal: precoTotalGasto }
            $scope.ListarStatsCor.push(itemExistenteCor);
        }
    }
    $scope.ObterCorRoxo = function () {
        var contagem = 0;
        var precoTotalGasto = 0;
        angular.forEach($scope.lista, function (key, value) {
            if (key.cor == "Roxo") {
                contagem += 1;
                precoTotalGasto += key.preco;
            }
        });
        angular.forEach($scope.listaFixa, function (key, value) {
            if (key.cor == "Roxo") {
                contagem += 1;
                precoTotalGasto += key.preco;
            }
        });
        if (contagem >= 1) {
            /*PORCENTAGEM ITEM*/
            var itensTotal = $scope.lista.length + $scope.listaFixa.length;
            var resultadoPorcentagemContagem = (contagem * 100) / itensTotal;
            resultadoPorcentagemContagem = parseFloat(resultadoPorcentagemContagem.toFixed(2));
            /*PORCENTAGEM ITEM*/

            /* PORCENTAGEM PRECO*/
            var precoTotal = $scope.precoTotalSomado();
            var resultadoPorcentagemPreco = (precoTotalGasto * 100) / precoTotal;
            resultadoPorcentagemPreco = parseFloat(resultadoPorcentagemPreco.toFixed(2));
            /* PORCENTAGEM PRECO*/

            /*TOTAL PRECO */
            precoTotalGasto = precoTotalGasto.toFixed(2);
            /*TOTAL PRECO */

            var itemExistenteCor = { corDigitada: "Roxo", totalDeItens: contagem, cor: "#8e44ad", porcentoItens: resultadoPorcentagemContagem, porcentoPreco: resultadoPorcentagemPreco, precoTotal: precoTotalGasto }
            $scope.ListarStatsCor.push(itemExistenteCor);
        }
    }
    $scope.ObterCorVerde = function () {
        var contagem = 0;
        var precoTotalGasto = 0;
        angular.forEach($scope.lista, function (key, value) {
            if (key.cor == "Verde") {
                contagem += 1;
                precoTotalGasto += key.preco;
            }
        });
        angular.forEach($scope.listaFixa, function (key, value) {
            if (key.cor == "Verde") {
                contagem += 1;
                precoTotalGasto += key.preco;
            }
        });
        if (contagem >= 1) {
            /*PORCENTAGEM ITEM*/
            var itensTotal = $scope.lista.length + $scope.listaFixa.length;
            var resultadoPorcentagemContagem = (contagem * 100) / itensTotal;
            resultadoPorcentagemContagem = parseFloat(resultadoPorcentagemContagem.toFixed(2));
            /*PORCENTAGEM ITEM*/

            /* PORCENTAGEM PRECO*/
            var precoTotal = $scope.precoTotalSomado();
            var resultadoPorcentagemPreco = (precoTotalGasto * 100) / precoTotal;
            resultadoPorcentagemPreco = parseFloat(resultadoPorcentagemPreco.toFixed(2));
            /* PORCENTAGEM PRECO*/

            /*TOTAL PRECO */
            precoTotalGasto = precoTotalGasto.toFixed(2);
            /*TOTAL PRECO */

            var itemExistenteCor = { corDigitada: "Verde", totalDeItens: contagem, cor: "#27ae60", porcentoItens: resultadoPorcentagemContagem, porcentoPreco: resultadoPorcentagemPreco, precoTotal: precoTotalGasto }
            $scope.ListarStatsCor.push(itemExistenteCor);
        }
    }
    $scope.ObterCorLaranja = function () {
        var contagem = 0;
        var precoTotalGasto = 0;
        angular.forEach($scope.lista, function (key, value) {
            if (key.cor == "Laranja") {
                contagem += 1;
                precoTotalGasto += key.preco;
            }
        });
        angular.forEach($scope.listaFixa, function (key, value) {
            if (key.cor == "Laranja") {
                contagem += 1;
                precoTotalGasto += key.preco;
            }
        });
        if (contagem >= 1) {
            /*PORCENTAGEM ITEM*/
            var itensTotal = $scope.lista.length + $scope.listaFixa.length;
            var resultadoPorcentagemContagem = (contagem * 100) / itensTotal;
            resultadoPorcentagemContagem = parseFloat(resultadoPorcentagemContagem.toFixed(2));
            /*PORCENTAGEM ITEM*/

            /* PORCENTAGEM PRECO*/
            var precoTotal = $scope.precoTotalSomado();
            var resultadoPorcentagemPreco = (precoTotalGasto * 100) / precoTotal;
            resultadoPorcentagemPreco = parseFloat(resultadoPorcentagemPreco.toFixed(2));
            /* PORCENTAGEM PRECO*/

            /*TOTAL PRECO */
            precoTotalGasto = precoTotalGasto.toFixed(2);
            /*TOTAL PRECO */

            var itemExistenteCor = { corDigitada: "Laranja", totalDeItens: contagem, cor: "#f39c12", porcentoItens: resultadoPorcentagemContagem, porcentoPreco: resultadoPorcentagemPreco, precoTotal: precoTotalGasto }
            $scope.ListarStatsCor.push(itemExistenteCor);
        }
    }
    $scope.ObterCorAzul = function () {
        var contagem = 0;
        var precoTotalGasto = 0;
        angular.forEach($scope.lista, function (key, value) {
            if (key.cor == "Azul") {
                contagem += 1;
                precoTotalGasto += key.preco;
            }
        });
        angular.forEach($scope.listaFixa, function (key, value) {
            if (key.cor == "Azul") {
                contagem += 1;
                precoTotalGasto += key.preco;
            }
        });
        if (contagem >= 1) {
            /*PORCENTAGEM ITEM*/
            var itensTotal = $scope.lista.length + $scope.listaFixa.length;
            var resultadoPorcentagemContagem = (contagem * 100) / itensTotal;
            resultadoPorcentagemContagem = parseFloat(resultadoPorcentagemContagem.toFixed(2));
            /*PORCENTAGEM ITEM*/

            /* PORCENTAGEM PRECO*/
            var precoTotal = $scope.precoTotalSomado();
            var resultadoPorcentagemPreco = (precoTotalGasto * 100) / precoTotal;
            resultadoPorcentagemPreco = parseFloat(resultadoPorcentagemPreco.toFixed(2));
            /* PORCENTAGEM PRECO*/

            /*TOTAL PRECO */
            precoTotalGasto = precoTotalGasto.toFixed(2);
            /*TOTAL PRECO */

            var itemExistenteCor = { corDigitada: "Azul", totalDeItens: contagem, cor: "#2980b9", porcentoItens: resultadoPorcentagemContagem, porcentoPreco: resultadoPorcentagemPreco, precoTotal: precoTotalGasto }
            $scope.ListarStatsCor.push(itemExistenteCor);
        }
    }
})