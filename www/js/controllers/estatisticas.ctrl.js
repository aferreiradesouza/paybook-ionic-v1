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
        $scope.ObterTipoLazer();
        $scope.ObterTipoLanche();
        $scope.ObterTipoRestaurante();
        $scope.ObterTipoCinema();
        $scope.ObterTipoRoupa();
        $scope.ObterTipoInfantil();
        $scope.ObterTipoPresente();
        $scope.ObterTipoEssencial();
        $scope.ObterTipoUtilitarios();
        $scope.ObterTipoMercado();
        $scope.ObterTipoCafe();

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
    $scope.ObterTipoLazer = function () {
        var contagem = 0;
        var contagemFixados = 0;
        var contagemAdicionados = 0;
        var precoTotalGasto = 0;
        angular.forEach($scope.lista, function (key, value) {
            if (key.gasto == "Lazer") {
                contagem += 1;
                contagemAdicionados += 1;
                precoTotalGasto += key.preco;
            }
        });
        angular.forEach($scope.listaFixa, function (key, value) {
            if (key.gasto == "Lazer") {
                contagem += 1;
                contagemFixados += 1;
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

            var itemExistente = { categoria: "Lazer", totalDeItens: contagem, porcentoItens: resultadoPorcentagemContagem, porcentoPreco: resultadoPorcentagemPreco, precoTotal: precoTotalGasto, itensFixados: contagemFixados, itensAdicionados: contagemAdicionados }
            $scope.ListarStatsCategorias.push(itemExistente);
        }
    }

    $scope.ObterTipoLanche = function () {
        var contagem = 0;
        var precoTotalGasto = 0;
        var contagemFixados = 0;
        var contagemAdicionados = 0;
        angular.forEach($scope.lista, function (key, value) {
            if (key.gasto == "Lanche") {
                contagem += 1;
                contagemAdicionados += 1;
                precoTotalGasto += key.preco;
            }
        });
        angular.forEach($scope.listaFixa, function (key, value) {
            if (key.gasto == "Lanche") {
                contagem += 1;
                contagemFixados += 1;
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

            var itemExistente = { itensFixados: contagemFixados, itensAdicionados: contagemAdicionados, categoria: "Lanche", totalDeItens: contagem, porcentoItens: resultadoPorcentagemContagem, porcentoPreco: resultadoPorcentagemPreco, precoTotal: precoTotalGasto }
            $scope.ListarStatsCategorias.push(itemExistente);
        }
    }

    $scope.ObterTipoRestaurante = function () {
        var contagem = 0;
        var precoTotalGasto = 0;
        var contagemAdicionados = 0;
        var contagemFixados = 0;
        angular.forEach($scope.lista, function (key, value) {
            if (key.gasto == "Restaurante") {
                contagem += 1;
                contagemAdicionados += 1;
                precoTotalGasto += key.preco;
            }
        });
        angular.forEach($scope.listaFixa, function (key, value) {
            if (key.gasto == "Restaurante") {
                contagem += 1;
                contagemFixados += 1;
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

            var itemExistente = { itensFixados: contagemFixados, itensAdicionados: contagemAdicionados, categoria: "Restaurante", totalDeItens: contagem, porcentoItens: resultadoPorcentagemContagem, porcentoPreco: resultadoPorcentagemPreco, precoTotal: precoTotalGasto }
            $scope.ListarStatsCategorias.push(itemExistente);
        }
    }

    $scope.ObterTipoCinema = function () {
        var contagem = 0;
        var contagemAdicionados = 0;
        var contagemFixados = 0;
        var precoTotalGasto = 0;
        angular.forEach($scope.lista, function (key, value) {
            if (key.gasto == "Cinema") {
                contagemAdicionados += 1;
                contagem += 1;
                precoTotalGasto += key.preco;
            }
        });
        angular.forEach($scope.listaFixa, function (key, value) {
            if (key.gasto == "Cinema") {
                contagemFixados += 1;
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

            var itemExistente = { itensFixados: contagemFixados, itensAdicionados: contagemAdicionados, categoria: "Cinema", totalDeItens: contagem, porcentoItens: resultadoPorcentagemContagem, porcentoPreco: resultadoPorcentagemPreco, precoTotal: precoTotalGasto }
            $scope.ListarStatsCategorias.push(itemExistente);
        }
    }

    $scope.ObterTipoRoupa = function () {
        var contagem = 0;
        var precoTotalGasto = 0;
        var contagemAdicionados = 0;
        var contagemFixados = 0;
        angular.forEach($scope.lista, function (key, value) {
            if (key.gasto == "Roupa") {
                contagem += 1;
                contagemAdicionados += 1;
                precoTotalGasto += key.preco;
            }
        });
        angular.forEach($scope.listaFixa, function (key, value) {
            if (key.gasto == "Roupa") {
                contagem += 1;
                contagemFixados += 1;
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

            var itemExistente = { itensFixados: contagemFixados, itensAdicionados: contagemAdicionados, categoria: "Roupa", totalDeItens: contagem, porcentoItens: resultadoPorcentagemContagem, porcentoPreco: resultadoPorcentagemPreco, precoTotal: precoTotalGasto }
            $scope.ListarStatsCategorias.push(itemExistente);
        }
    }

    $scope.ObterTipoInfantil = function () {
        var contagem = 0;
        var contagemFixados = 0;
        var contagemAdicionados = 0;
        var precoTotalGasto = 0;
        angular.forEach($scope.lista, function (key, value) {
            if (key.gasto == "Infantil") {
                contagem += 1;
                contagemAdicionados += 1;
                precoTotalGasto += key.preco;
            }
        });
        angular.forEach($scope.listaFixa, function (key, value) {
            if (key.gasto == "Infantil") {
                contagem += 1;
                contagemFixados += 1;
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

            var itemExistente = { itensFixados: contagemFixados, itensAdicionados: contagemAdicionados, categoria: "Infantil", totalDeItens: contagem, porcentoItens: resultadoPorcentagemContagem, porcentoPreco: resultadoPorcentagemPreco, precoTotal: precoTotalGasto }
            $scope.ListarStatsCategorias.push(itemExistente);
        }
    }

    $scope.ObterTipoPresente = function () {
        var contagem = 0;
        var contagemAdicionados = 0;
        var contagemFixados = 0;
        var precoTotalGasto = 0;
        angular.forEach($scope.lista, function (key, value) {
            if (key.gasto == "Presente") {
                contagem += 1;
                contagemAdicionados += 1;
                precoTotalGasto += key.preco;
            }
        });
        angular.forEach($scope.listaFixa, function (key, value) {
            if (key.gasto == "Presente") {
                contagem += 1;
                contagemFixados += 1;
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

            var itemExistente = { itensFixados: contagemFixados, itensAdicionados: contagemAdicionados, categoria: "Presente", totalDeItens: contagem, porcentoItens: resultadoPorcentagemContagem, porcentoPreco: resultadoPorcentagemPreco, precoTotal: precoTotalGasto }
            $scope.ListarStatsCategorias.push(itemExistente);
        }
    }

    $scope.ObterTipoEssencial = function () {
        var contagem = 0;
        var contagemFixados = 0;
        var contagemAdicionados = 0;
        var precoTotalGasto = 0;
        angular.forEach($scope.lista, function (key, value) {
            if (key.gasto == "Essencial") {
                contagem += 1;
                contagemAdicionados += 1;
                precoTotalGasto += key.preco;
            }
        });
        angular.forEach($scope.listaFixa, function (key, value) {
            if (key.gasto == "Essencial") {
                contagem += 1;
                contagemFixados += 1;
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

            var itemExistente = { itensFixados: contagemFixados, itensAdicionados: contagemAdicionados, categoria: "Essencial", totalDeItens: contagem, porcentoItens: resultadoPorcentagemContagem, porcentoPreco: resultadoPorcentagemPreco, precoTotal: precoTotalGasto }
            $scope.ListarStatsCategorias.push(itemExistente);
        }
    }

    $scope.ObterTipoUtilitarios = function () {
        var contagem = 0;
        var contagemFixados = 0;
        var contagemAdicionados = 0;
        var precoTotalGasto = 0;
        angular.forEach($scope.lista, function (key, value) {
            if (key.gasto == "Utilitários") {
                contagem += 1;
                contagemAdicionados += 1;
                precoTotalGasto += key.preco;
            }
        });
        angular.forEach($scope.listaFixa, function (key, value) {
            if (key.gasto == "Utilitários") {
                contagem += 1;
                contagemFixados += 1;
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

            var itemExistente = { itensFixados: contagemFixados, itensAdicionados: contagemAdicionados, categoria: "Utilitários", totalDeItens: contagem, porcentoItens: resultadoPorcentagemContagem, porcentoPreco: resultadoPorcentagemPreco, precoTotal: precoTotalGasto }
            $scope.ListarStatsCategorias.push(itemExistente);
        }
    }

    $scope.ObterTipoMercado = function () {
        var contagem = 0;
        var contagemFixados = 0;
        var contagemAdicionados = 0;
        var precoTotalGasto = 0;
        angular.forEach($scope.lista, function (key, value) {
            if (key.gasto == "Mercado") {
                contagem += 1;
                contagemAdicionados += 1;
                precoTotalGasto += key.preco;
            }
        });
        angular.forEach($scope.listaFixa, function (key, value) {
            if (key.gasto == "Mercado") {
                contagem += 1;
                contagemFixados += 1;
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

            var itemExistente = { itensFixados: contagemFixados, itensAdicionados: contagemAdicionados, categoria: "Mercado", totalDeItens: contagem, porcentoItens: resultadoPorcentagemContagem, porcentoPreco: resultadoPorcentagemPreco, precoTotal: precoTotalGasto }
            $scope.ListarStatsCategorias.push(itemExistente);
        }
    }

    $scope.ObterTipoCafe = function () {
        var contagem = 0;
        var contagemFixados = 0;
        var contagemAdicionados = 0;
        var precoTotalGasto = 0;
        angular.forEach($scope.lista, function (key, value) {
            if (key.gasto == "Café") {
                contagem += 1;
                contagemAdicionados += 1;
                precoTotalGasto += key.preco;
            }
        });
        angular.forEach($scope.listaFixa, function (key, value) {
            if (key.gasto == "Café") {
                contagem += 1;
                contagemFixados += 1;
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

            var itemExistente = { itensFixados: contagemFixados, itensAdicionados: contagemAdicionados, categoria: "Café", totalDeItens: contagem, porcentoItens: resultadoPorcentagemContagem, porcentoPreco: resultadoPorcentagemPreco, precoTotal: precoTotalGasto }
            $scope.ListarStatsCategorias.push(itemExistente);
        }
    }

    /*Lista Cores */

    $scope.ObterCorVermelho = function () {
        var contagem = 0;
        var contagemFixados = 0;
        var contagemAdicionados = 0;
        var precoTotalGasto = 0;
        var contagemTipoLazer = 0;
        var contagemTipoLanche = 0;
        var contagemTipoCinema = 0;
        var contagemTipoRestaurante = 0;
        var contagemTipoCinema = 0;
        var contagemTipoRoupa = 0;
        var contagemTipoInfantil = 0;
        var contagemTipoPresente = 0;
        var contagemTipoEssencial = 0;
        var contagemTipoUtilitarios = 0;
        var contagemTipoMercado = 0;
        var contagemTipoCafe = 0;
        angular.forEach($scope.lista, function (key, value) {
            if (key.cor == "Vermelho") {
                contagem += 1;
                contagemAdicionados += 1;
                precoTotalGasto += key.preco;
                if (key.gasto == "Lazer") {
                    contagemTipoLazer += 1;
                }
                if (key.gasto == "Lanche") {
                    contagemTipoLanche += 1;
                }
                if (key.gasto == "Restaurante") {
                    contagemTipoRestaurante += 1;
                }
                if (key.gasto == "Cinema") {
                    contagemTipoCinema += 1;
                }
                if (key.gasto == "Roupa") {
                    contagemTipoRoupa += 1;
                }
                if (key.gasto == "Infantil") {
                    contagemTipoInfantil += 1;
                }
                if (key.gasto == "Presente") {
                    contagemTipoPresente += 1;
                }
                if (key.gasto == "Essencial") {
                    contagemTipoEssencial += 1;
                }
                if (key.gasto == "Utilitários") {
                    contagemTipoUtilitarios += 1;
                }
                if (key.gasto == "Mercado") {
                    contagemTipoMercado += 1;
                }
                if (key.gasto == "Café") {
                    contagemTipoCafe += 1;
                }
            }
        });
        angular.forEach($scope.listaFixa, function (key, value) {
            if (key.cor == "Vermelho") {
                contagem += 1;
                contagemAdicionados += 1;
                precoTotalGasto += key.preco;
                if (key.gasto == "Lazer") {
                    contagemTipoLazer += 1;
                }
                if (key.gasto == "Lanche") {
                    contagemTipoLanche += 1;
                }
                if (key.gasto == "Restaurante") {
                    contagemTipoRestaurante += 1;
                }
                if (key.gasto == "Cinema") {
                    contagemTipoCinema += 1;
                }
                if (key.gasto == "Roupa") {
                    contagemTipoRoupa += 1;
                }
                if (key.gasto == "Infantil") {
                    contagemTipoInfantil += 1;
                }
                if (key.gasto == "Presente") {
                    contagemTipoPresente += 1;
                }
                if (key.gasto == "Essencial") {
                    contagemTipoEssencial += 1;
                }
                if (key.gasto == "Utilitários") {
                    contagemTipoUtilitarios += 1;
                }
                if (key.gasto == "Mercado") {
                    contagemTipoMercado += 1;
                }
                if (key.gasto == "Café") {
                    contagemTipoCafe += 1;
                }
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

            var itemExistenteCor = { itensFixados: contagemFixados, itensAdicionados: contagemAdicionados,
                contagemTipoLazer: contagemTipoLazer, contagemTipoLanche: contagemTipoLanche, contagemTipoRestaurante: contagemTipoRestaurante, contagemTipoCinema: contagemTipoCinema,
                contagemTipoRoupa: contagemTipoRoupa, contagemTipoInfantil: contagemTipoInfantil, contagemTipoPresente: contagemTipoPresente, contagemTipoEssencial: contagemTipoEssencial,
                contagemTipoUtilitarios: contagemTipoUtilitarios, contagemTipoMercado: contagemTipoMercado, contagemTipoCafe: contagemTipoCafe,
                corDigitada: "Vermelho", totalDeItens: contagem, cor: "#c0392b", porcentoItens: resultadoPorcentagemContagem, porcentoPreco: resultadoPorcentagemPreco, precoTotal: precoTotalGasto
            }
            $scope.ListarStatsCor.push(itemExistenteCor);
        }
    }
    $scope.ObterCorRoxo = function () {
        var contagem = 0;
        var contagemFixados = 0;
        var contagemAdicionados = 0;
        var precoTotalGasto = 0;
        var contagemTipoLazer = 0;
        var contagemTipoLanche = 0;
        var contagemTipoCinema = 0;
        var contagemTipoRestaurante = 0;
        var contagemTipoCinema = 0;
        var contagemTipoRoupa = 0;
        var contagemTipoInfantil = 0;
        var contagemTipoPresente = 0;
        var contagemTipoEssencial = 0;
        var contagemTipoUtilitarios = 0;
        var contagemTipoMercado = 0;
        var contagemTipoCafe = 0;
        angular.forEach($scope.lista, function (key, value) {
            if (key.cor == "Roxo") {
                contagem += 1;
                contagemAdicionados += 1;
                precoTotalGasto += key.preco;
                if (key.gasto == "Lazer") {
                    contagemTipoLazer += 1;
                }
                if (key.gasto == "Lanche") {
                    contagemTipoLanche += 1;
                }
                if (key.gasto == "Restaurante") {
                    contagemTipoRestaurante += 1;
                }
                if (key.gasto == "Cinema") {
                    contagemTipoCinema += 1;
                }
                if (key.gasto == "Roupa") {
                    contagemTipoRoupa += 1;
                }
                if (key.gasto == "Infantil") {
                    contagemTipoInfantil += 1;
                }
                if (key.gasto == "Presente") {
                    contagemTipoPresente += 1;
                }
                if (key.gasto == "Essencial") {
                    contagemTipoEssencial += 1;
                }
                if (key.gasto == "Utilitários") {
                    contagemTipoUtilitarios += 1;
                }
                if (key.gasto == "Mercado") {
                    contagemTipoMercado += 1;
                }
                if (key.gasto == "Café") {
                    contagemTipoCafe += 1;
                }
            }
        });
        angular.forEach($scope.listaFixa, function (key, value) {
            if (key.cor == "Roxo") {
                contagem += 1;
                contagemAdicionados += 1;
                precoTotalGasto += key.preco;
                if (key.gasto == "Lazer") {
                    contagemTipoLazer += 1;
                }
                if (key.gasto == "Lanche") {
                    contagemTipoLanche += 1;
                }
                if (key.gasto == "Restaurante") {
                    contagemTipoRestaurante += 1;
                }
                if (key.gasto == "Cinema") {
                    contagemTipoCinema += 1;
                }
                if (key.gasto == "Roupa") {
                    contagemTipoRoupa += 1;
                }
                if (key.gasto == "Infantil") {
                    contagemTipoInfantil += 1;
                }
                if (key.gasto == "Presente") {
                    contagemTipoPresente += 1;
                }
                if (key.gasto == "Essencial") {
                    contagemTipoEssencial += 1;
                }
                if (key.gasto == "Utilitários") {
                    contagemTipoUtilitarios += 1;
                }
                if (key.gasto == "Mercado") {
                    contagemTipoMercado += 1;
                }
                if (key.gasto == "Café") {
                    contagemTipoCafe += 1;
                }
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

            var itemExistenteCor = { itensFixados: contagemFixados, itensAdicionados: contagemAdicionados,
                contagemTipoLazer: contagemTipoLazer, contagemTipoLanche: contagemTipoLanche, contagemTipoRestaurante: contagemTipoRestaurante, contagemTipoCinema: contagemTipoCinema,
                contagemTipoRoupa: contagemTipoRoupa, contagemTipoInfantil: contagemTipoInfantil, contagemTipoPresente: contagemTipoPresente, contagemTipoEssencial: contagemTipoEssencial,
                contagemTipoUtilitarios: contagemTipoUtilitarios, contagemTipoMercado: contagemTipoMercado, contagemTipoCafe: contagemTipoCafe,
                corDigitada: "Roxo", totalDeItens: contagem, cor: "#8e44ad", porcentoItens: resultadoPorcentagemContagem, porcentoPreco: resultadoPorcentagemPreco, precoTotal: precoTotalGasto
            }
            $scope.ListarStatsCor.push(itemExistenteCor);
        }
    }
    $scope.ObterCorVerde = function () {
        var contagem = 0;
        var contagemFixados = 0;
        var contagemAdicionados = 0;
        var precoTotalGasto = 0;
        var contagemTipoLazer = 0;
        var contagemTipoLanche = 0;
        var contagemTipoCinema = 0;
        var contagemTipoRestaurante = 0;
        var contagemTipoCinema = 0;
        var contagemTipoRoupa = 0;
        var contagemTipoInfantil = 0;
        var contagemTipoPresente = 0;
        var contagemTipoEssencial = 0;
        var contagemTipoUtilitarios = 0;
        var contagemTipoMercado = 0;
        var contagemTipoCafe = 0;
        angular.forEach($scope.lista, function (key, value) {
            if (key.cor == "Verde") {
                contagem += 1;
                contagemAdicionados += 1;
                precoTotalGasto += key.preco;
                if (key.gasto == "Lazer") {
                    contagemTipoLazer += 1;
                }
                if (key.gasto == "Lanche") {
                    contagemTipoLanche += 1;
                }
                if (key.gasto == "Restaurante") {
                    contagemTipoRestaurante += 1;
                }
                if (key.gasto == "Cinema") {
                    contagemTipoCinema += 1;
                }
                if (key.gasto == "Roupa") {
                    contagemTipoRoupa += 1;
                }
                if (key.gasto == "Infantil") {
                    contagemTipoInfantil += 1;
                }
                if (key.gasto == "Presente") {
                    contagemTipoPresente += 1;
                }
                if (key.gasto == "Essencial") {
                    contagemTipoEssencial += 1;
                }
                if (key.gasto == "Utilitários") {
                    contagemTipoUtilitarios += 1;
                }
                if (key.gasto == "Mercado") {
                    contagemTipoMercado += 1;
                }
                if (key.gasto == "Café") {
                    contagemTipoCafe += 1;
                }
            }
        });
        angular.forEach($scope.listaFixa, function (key, value) {
            if (key.cor == "Verde") {
                contagem += 1;
                contagemAdicionados += 1;
                precoTotalGasto += key.preco;
                if (key.gasto == "Lazer") {
                    contagemTipoLazer += 1;
                }
                if (key.gasto == "Lanche") {
                    contagemTipoLanche += 1;
                }
                if (key.gasto == "Restaurante") {
                    contagemTipoRestaurante += 1;
                }
                if (key.gasto == "Cinema") {
                    contagemTipoCinema += 1;
                }
                if (key.gasto == "Roupa") {
                    contagemTipoRoupa += 1;
                }
                if (key.gasto == "Infantil") {
                    contagemTipoInfantil += 1;
                }
                if (key.gasto == "Presente") {
                    contagemTipoPresente += 1;
                }
                if (key.gasto == "Essencial") {
                    contagemTipoEssencial += 1;
                }
                if (key.gasto == "Utilitários") {
                    contagemTipoUtilitarios += 1;
                }
                if (key.gasto == "Mercado") {
                    contagemTipoMercado += 1;
                }
                if (key.gasto == "Café") {
                    contagemTipoCafe += 1;
                }
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

            var itemExistenteCor = { itensFixados: contagemFixados, itensAdicionados: contagemAdicionados,
                contagemTipoLazer: contagemTipoLazer, contagemTipoLanche: contagemTipoLanche, contagemTipoRestaurante: contagemTipoRestaurante, contagemTipoCinema: contagemTipoCinema,
                contagemTipoRoupa: contagemTipoRoupa, contagemTipoInfantil: contagemTipoInfantil, contagemTipoPresente: contagemTipoPresente, contagemTipoEssencial: contagemTipoEssencial,
                contagemTipoUtilitarios: contagemTipoUtilitarios, contagemTipoMercado: contagemTipoMercado, contagemTipoCafe: contagemTipoCafe,
                corDigitada: "Verde", totalDeItens: contagem, cor: "#27ae60", porcentoItens: resultadoPorcentagemContagem, porcentoPreco: resultadoPorcentagemPreco, precoTotal: precoTotalGasto
            }
            $scope.ListarStatsCor.push(itemExistenteCor);
        }
    }
    $scope.ObterCorLaranja = function () {
        var contagem = 0;
        var contagemFixados = 0;
        var contagemAdicionados = 0;
        var precoTotalGasto = 0;
        var contagemTipoLazer = 0;
        var contagemTipoLanche = 0;
        var contagemTipoCinema = 0;
        var contagemTipoRestaurante = 0;
        var contagemTipoCinema = 0;
        var contagemTipoRoupa = 0;
        var contagemTipoInfantil = 0;
        var contagemTipoPresente = 0;
        var contagemTipoEssencial = 0;
        var contagemTipoUtilitarios = 0;
        var contagemTipoMercado = 0;
        var contagemTipoCafe = 0;
        angular.forEach($scope.lista, function (key, value) {
            if (key.cor == "Laranja") {
                contagem += 1;
                contagemAdicionados += 1;
                precoTotalGasto += key.preco;
                if (key.gasto == "Lazer") {
                    contagemTipoLazer += 1;
                }
                if (key.gasto == "Lanche") {
                    contagemTipoLanche += 1;
                }
                if (key.gasto == "Restaurante") {
                    contagemTipoRestaurante += 1;
                }
                if (key.gasto == "Cinema") {
                    contagemTipoCinema += 1;
                }
                if (key.gasto == "Roupa") {
                    contagemTipoRoupa += 1;
                }
                if (key.gasto == "Infantil") {
                    contagemTipoInfantil += 1;
                }
                if (key.gasto == "Presente") {
                    contagemTipoPresente += 1;
                }
                if (key.gasto == "Essencial") {
                    contagemTipoEssencial += 1;
                }
                if (key.gasto == "Utilitários") {
                    contagemTipoUtilitarios += 1;
                }
                if (key.gasto == "Mercado") {
                    contagemTipoMercado += 1;
                }
                if (key.gasto == "Café") {
                    contagemTipoCafe += 1;
                }
            }
        });
        angular.forEach($scope.listaFixa, function (key, value) {
            if (key.cor == "Laranja") {
                contagem += 1;
                contagemAdicionados += 1;
                precoTotalGasto += key.preco;
                if (key.gasto == "Lazer") {
                    contagemTipoLazer += 1;
                }
                if (key.gasto == "Lanche") {
                    contagemTipoLanche += 1;
                }
                if (key.gasto == "Restaurante") {
                    contagemTipoRestaurante += 1;
                }
                if (key.gasto == "Cinema") {
                    contagemTipoCinema += 1;
                }
                if (key.gasto == "Roupa") {
                    contagemTipoRoupa += 1;
                }
                if (key.gasto == "Infantil") {
                    contagemTipoInfantil += 1;
                }
                if (key.gasto == "Presente") {
                    contagemTipoPresente += 1;
                }
                if (key.gasto == "Essencial") {
                    contagemTipoEssencial += 1;
                }
                if (key.gasto == "Utilitários") {
                    contagemTipoUtilitarios += 1;
                }
                if (key.gasto == "Mercado") {
                    contagemTipoMercado += 1;
                }
                if (key.gasto == "Café") {
                    contagemTipoCafe += 1;
                }
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

            var itemExistenteCor = { itensFixados: contagemFixados, itensAdicionados: contagemAdicionados,
                contagemTipoLazer: contagemTipoLazer, contagemTipoLanche: contagemTipoLanche, contagemTipoRestaurante: contagemTipoRestaurante, contagemTipoCinema: contagemTipoCinema,
                contagemTipoRoupa: contagemTipoRoupa, contagemTipoInfantil: contagemTipoInfantil, contagemTipoPresente: contagemTipoPresente, contagemTipoEssencial: contagemTipoEssencial,
                contagemTipoUtilitarios: contagemTipoUtilitarios, contagemTipoMercado: contagemTipoMercado, contagemTipoCafe: contagemTipoCafe,
                corDigitada: "Laranja", totalDeItens: contagem, cor: "#f39c12", porcentoItens: resultadoPorcentagemContagem, porcentoPreco: resultadoPorcentagemPreco, precoTotal: precoTotalGasto
            }
            $scope.ListarStatsCor.push(itemExistenteCor);
        }
    }
    $scope.ObterCorAzul = function () {
        var contagem = 0;
        var contagemFixados = 0;
        var contagemAdicionados = 0;
        var precoTotalGasto = 0;
        var contagemTipoLazer = 0;
        var contagemTipoLanche = 0;
        var contagemTipoCinema = 0;
        var contagemTipoRestaurante = 0;
        var contagemTipoCinema = 0;
        var contagemTipoRoupa = 0;
        var contagemTipoInfantil = 0;
        var contagemTipoPresente = 0;
        var contagemTipoEssencial = 0;
        var contagemTipoUtilitarios = 0;
        var contagemTipoMercado = 0;
        var contagemTipoCafe = 0;
        angular.forEach($scope.lista, function (key, value) {
            if (key.cor == "Azul") {
                contagem += 1;
                contagemAdicionados += 1;
                precoTotalGasto += key.preco;
                if (key.gasto == "Lazer") {
                    contagemTipoLazer += 1;
                }
                if (key.gasto == "Lanche") {
                    contagemTipoLanche += 1;
                }
                if (key.gasto == "Restaurante") {
                    contagemTipoRestaurante += 1;
                }
                if (key.gasto == "Cinema") {
                    contagemTipoCinema += 1;
                }
                if (key.gasto == "Roupa") {
                    contagemTipoRoupa += 1;
                }
                if (key.gasto == "Infantil") {
                    contagemTipoInfantil += 1;
                }
                if (key.gasto == "Presente") {
                    contagemTipoPresente += 1;
                }
                if (key.gasto == "Essencial") {
                    contagemTipoEssencial += 1;
                }
                if (key.gasto == "Utilitários") {
                    contagemTipoUtilitarios += 1;
                }
                if (key.gasto == "Mercado") {
                    contagemTipoMercado += 1;
                }
                if (key.gasto == "Café") {
                    contagemTipoCafe += 1;
                }
            }
        });
        angular.forEach($scope.listaFixa, function (key, value) {
            if (key.cor == "Azul") {
                contagem += 1;
                contagemAdicionados += 1;
                precoTotalGasto += key.preco;
                if (key.gasto == "Lazer") {
                    contagemTipoLazer += 1;
                }
                if (key.gasto == "Lanche") {
                    contagemTipoLanche += 1;
                }
                if (key.gasto == "Restaurante") {
                    contagemTipoRestaurante += 1;
                }
                if (key.gasto == "Cinema") {
                    contagemTipoCinema += 1;
                }
                if (key.gasto == "Roupa") {
                    contagemTipoRoupa += 1;
                }
                if (key.gasto == "Infantil") {
                    contagemTipoInfantil += 1;
                }
                if (key.gasto == "Presente") {
                    contagemTipoPresente += 1;
                }
                if (key.gasto == "Essencial") {
                    contagemTipoEssencial += 1;
                }
                if (key.gasto == "Utilitários") {
                    contagemTipoUtilitarios += 1;
                }
                if (key.gasto == "Mercado") {
                    contagemTipoMercado += 1;
                }
                if (key.gasto == "Café") {
                    contagemTipoCafe += 1;
                }
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

            var itemExistenteCor = { itensFixados: contagemFixados, itensAdicionados: contagemAdicionados,
                contagemTipoLazer: contagemTipoLazer, contagemTipoLanche: contagemTipoLanche, contagemTipoRestaurante: contagemTipoRestaurante, contagemTipoCinema: contagemTipoCinema,
                contagemTipoRoupa: contagemTipoRoupa, contagemTipoInfantil: contagemTipoInfantil, contagemTipoPresente: contagemTipoPresente, contagemTipoEssencial: contagemTipoEssencial,
                contagemTipoUtilitarios: contagemTipoUtilitarios, contagemTipoMercado: contagemTipoMercado, contagemTipoCafe: contagemTipoCafe,
                corDigitada: "Azul", totalDeItens: contagem, cor: "#2980b9", porcentoItens: resultadoPorcentagemContagem, porcentoPreco: resultadoPorcentagemPreco, precoTotal: precoTotalGasto
            }
            $scope.ListarStatsCor.push(itemExistenteCor);
        }
    }
})