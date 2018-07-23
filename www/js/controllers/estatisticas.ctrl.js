app.controller('statsCtrl', function ($scope, Util, $ionicPopup, $timeout) {
    $scope.listaFixa = [];
    $scope.lista = [];
    $scope.ListarStatsCategorias = [];
    $scope.ListarStatsCor = [];
    $scope.listaCartao = [];
    $scope.listaCartaoEstatistica = [];

    //relatorios
    $scope.listaRelatorios = [];
    $scope.relatoriosCartao = [];
    $scope.relatoriosCategoria = [];
    $scope.relatoriosCor = [];


    $scope.init = function () {
        var listaAux = Util.obterObjeto('ItensDaLista');
        var listaAuxFixa = Util.obterObjeto('ItensDaListaFixa');
        var listaAuxExcluir = Util.obterObjeto('listaExcluir');
        var listaAuxCartao = Util.obterObjeto('listaCartao');

        //relatorios
        var listaAuxRelatorio = Util.obterObjeto('listaRelatorio');
        var listaAuxRelatorioCartao = Util.obterObjeto('listaRelatorioCartao');
        var listaAuxRelatorioCategoria = Util.obterObjeto('listaRelatorioCategoria');
        var listaAuxRelatorioCor = Util.obterObjeto('listaRelatorioCor');

        if (listaAux != '') {
            $scope.lista = Util.converterParaObjeto(listaAux);
        }
        if (listaAuxFixa != '') {
            $scope.listaFixa = Util.converterParaObjeto(listaAuxFixa);
        }
        if (listaAuxExcluir != '') {
            $scope.listaExcluir = Util.converterParaObjeto(listaAuxExcluir);
        }
        if (listaAuxCartao != '') {
            $scope.listaCartao = Util.converterParaObjeto(listaAuxCartao);
        }

        //relatorios
        if (listaAuxRelatorio != '') {
            $scope.listaRelatorios = Util.converterParaObjeto(listaAuxRelatorio);
        }
        if (listaAuxRelatorioCartao != '') {
            $scope.relatoriosCartao = Util.converterParaObjeto(listaAuxRelatorioCartao);
        }
        if (listaAuxRelatorioCategoria != '') {
            $scope.relatoriosCategoria = Util.converterParaObjeto(listaAuxRelatorioCategoria);
        }
        if (listaAuxRelatorioCor != '') {
            $scope.relatoriosCor = Util.converterParaObjeto(listaAuxRelatorioCor);
        }

        //CARTAO
        //$scope.ObterListaDeComprasCartao();
        $scope.infoCartao();

        //LISTAS CATEGORIA
        $scope.ObterTipoLazer();
        $scope.ObterTipoLanche();
        $scope.ObterTipoTransporte();
        $scope.ObterTipoRestaurante();
        $scope.ObterTipoCinema();
        $scope.ObterTipoRoupa();
        $scope.ObterTipoInfantil();
        $scope.ObterTipoPresente();
        $scope.ObterTipoEssencial();
        $scope.ObterTipoUtilitarios();
        $scope.ObterTipoMercado();
        $scope.ObterTipoCafe();
        //
        // //LISTAS COR
        $scope.ObterCorRoxo();
        $scope.ObterCorVermelho();
        $scope.ObterCorVerde();
        $scope.ObterCorLaranja();
        $scope.ObterCorAzul();

        //RELATORIO
        // $scope.ObterRelatorio();

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

    $scope.contagemItensCartao = 0;
    $scope.contagemPrecoTotalCartao = 0;
    $scope.ObterListaDeComprasCartao = function () {
        var contagem = 0;
        var count = 0;
        $scope.lista.forEach(item => {
            if (item.itemCartao == true) {
                contagem += 1;
                count += item.preco;

            }
        });
        $scope.listaFixa.forEach(item => {
            if (item.itemCartao == true) {
                contagem += 1;
                count += item.preco;
            }
        });
        $scope.contagemPrecoTotalCartao = count;
        $scope.contagemItensCartao = contagem;
    }

    $scope.infoCartao = function () {
        var i;
        for (i = 0; i <= $scope.listaCartao.length - 1; i++) {
            var contagemPreco = 0;
            var contagemItem = 0;
            var contagemItemFixo = 0;
            var nomeCartao;
            var corCartao;
            $scope.lista.forEach(item => {
                if ($scope.listaCartao[i].nomeCartao == item.cartao) {
                    contagemPreco += item.preco;
                    contagemItem += 1;
                    nomeCartao = item.cartao;
                    corCartao = item.corCartaoItem;
                }
            });
            $scope.listaFixa.forEach(item => {
                if ($scope.listaCartao[i].nomeCartao == item.cartao) {
                    contagemPreco += item.preco;
                    contagemItemFixo += 1;
                    nomeCartao = item.cartao;
                    corCartao = item.corCartaoItem;
                }
            });
            var precoTotal = $scope.precoTotalSomado();
            var porcentagemPrecoTotal = (contagemPreco * 100) / precoTotal;

            if (contagemItemFixo != 0 || contagemItem != 0) {
                var item = { fatura: contagemPreco, contagemItem: contagemItem, contagemItemFixo: contagemItemFixo, corCartaoItem: corCartao, nomeCartao: nomeCartao, porcentagemPrecoTotal: porcentagemPrecoTotal }
                $scope.listaCartaoEstatistica.push(item);
            }
        }
    }

    function voltarIndex() {
        window.location.href = "#!/listaRelatorios";
    }

    $scope.obterRelatorioCartao = function () {
        var i;
        for (i = 0; i <= $scope.listaCartao.length - 1; i++) {
            var contagemPreco = 0;
            var contagemItem = 0;
            var contagemItemFixo = 0;
            var nomeCartao;
            var corCartao;
            var cartaoLimite;
            var porcUso;
            $scope.lista.forEach(item => {
                if ($scope.listaCartao[i].nomeCartao == item.cartao) {
                    contagemPreco += item.preco;
                    contagemItem += 1;
                    nomeCartao = item.cartao;
                    corCartao = item.corCartaoItem;
                }
            });
            $scope.listaFixa.forEach(item => {
                if ($scope.listaCartao[i].nomeCartao == item.cartao) {
                    contagemPreco += item.preco;
                    contagemItemFixo += 1;
                    nomeCartao = item.cartao;
                    corCartao = item.corCartaoItem;
                }
            });
            var precoTotal = $scope.precoTotalSomado();
            var porcentagemPrecoTotal = (contagemPreco * 100) / precoTotal;

            if (contagemItemFixo != 0 || contagemItem != 0) {
                cartaoLimite = $scope.listaCartao[i].limite;
                porcUso = (contagemPreco * 100) / cartaoLimite;
                if (porcUso > 100) {
                    porcUso = 100;
                }
                var item = {
                    guid: $scope.data.guid, fatura: contagemPreco, contagemItem: contagemItem,
                    contagemItemFixo: contagemItemFixo, corCartaoItem: corCartao, nomeCartao: nomeCartao,
                    porcentagemPrecoTotal: porcentagemPrecoTotal, limiteCartao: cartaoLimite, porcUso: porcUso
                }
                $scope.relatoriosCartao.push(item);
            }
        }
    }

    $scope.obterRelatorioCategoria = function () {
        $scope.ListarStatsCategorias.forEach(item => {
            var categoria = item.categoria;
            var contagem = item.totalDeItens;
            var corIten = item.corIten;
            var icon = item.icon;

            var resultadoPorcentagemContagem = item.porcentoItens;
            resultadoPorcentagemContagem = Math.round(resultadoPorcentagemContagem);

            var resultadoPorcentagemPreco = item.porcentoPreco;
            resultadoPorcentagemPreco = Math.round(resultadoPorcentagemPreco);

            // var resultadoPorcentagemPreco = item.porcentoPreco;
            // if (resultadoPorcentagemPreco < 1) {
            //     resultadoPorcentagemPreco = Math.ceil(resultadoPorcentagemPreco)
            // }

            // if (resultadoPorcentagemPreco > 99) {
            //     resultadoPorcentagemPreco = Math.floor(resultadoPorcentagemPreco);
            // }

            var precoTotalGasto = item.precoTotal;
            var contagemFixados = item.itensFixados;
            var contagemAdicionados = item.itensAdicionados;

            var itemExistente = {
                guid: $scope.data.guid,
                categoria: categoria,
                totalDeItens: contagem,
                porcentoItens: resultadoPorcentagemContagem,
                porcentoPreco: resultadoPorcentagemPreco,
                precoTotal: precoTotalGasto,
                itensFixados: contagemFixados,
                itensAdicionados: contagemAdicionados,
                corIten: corIten,
                icon: icon,
            }

            $scope.relatoriosCategoria.push(itemExistente);
            Util.salvarObjeto('listaRelatorioCategoria', $scope.relatoriosCategoria);
        });
    }

    $scope.obterRelatorioCor = function(){
        $scope.ListarStatsCor.forEach(item => {
            var porcPreco = item.porcentoPreco;
            porcPreco = Math.round(porcPreco);

            var porcItens = item.porcentoItens;
            porcItens = Math.round(porcItens);
            
            var itemExistente = {
                guid: $scope.data.guid,
                itensFixados: item.itensFixados, 
                itensAdicionados: item.itensAdicionados, 
                contagemTipoTransporte: item.contagemTipoTransporte,
                contagemTipoLazer: item.contagemTipoLazer, 
                contagemTipoLanche: item.contagemTipoLanche, 
                contagemTipoRestaurante: item.contagemTipoRestaurante, 
                contagemTipoCinema: item.contagemTipoCinema,
                contagemTipoRoupa: item.contagemTipoRoupa, 
                contagemTipoInfantil: item.contagemTipoInfantil, 
                contagemTipoPresente: item.contagemTipoPresente, 
                contagemTipoEssencial: item.contagemTipoEssencial,
                contagemTipoUtilitarios: item.contagemTipoUtilitarios, 
                contagemTipoMercado: item.contagemTipoMercado, 
                contagemTipoCafe: item.contagemTipoCafe,
                corDigitada: item.corDigitada, 
                totalDeItens: item.totalDeItens, 
                cor: item.cor, 
                porcentoItens: porcItens, 
                porcentoPreco: porcPreco, 
                precoTotal: item.precoTotal
            }

            $scope.relatoriosCor.push(itemExistente);
            Util.salvarObjeto('listaRelatorioCor', $scope.relatoriosCor);
        });
    }

    $scope.showPopup = function () {
        $scope.data = {}
        var myPopup = $ionicPopup.show({
            template: '<input type="text" ng-model="data.relatorioNome">',
            title: 'Salvar relatório',
            subTitle: 'Digite o nome do relatório',
            scope: $scope,
            buttons: [
                { text: 'Voltar' },
                {
                    text: '<b>Salvar</b>',
                    type: 'button-positive',
                    onTap: function (e) {

                        $scope.data.guid = Util.criarGuid();

                        //estatisticas cor

                        $scope.obterRelatorioCor();
                        Util.salvarObjeto('listaRelatorioCor', $scope.relatoriosCor);

                        //estatisticas categoria

                        $scope.obterRelatorioCategoria();
                        Util.salvarObjeto('listaRelatorioCategoria', $scope.relatoriosCategoria);

                        //estatisticas cartao

                        $scope.obterRelatorioCartao();
                        Util.salvarObjeto('listaRelatorioCartao', $scope.relatoriosCartao);


                        //estatisticas gerais
                        $scope.obterCompras = function () {
                            var contListaDinheiro = 0;
                            var contGastoDinheiro = 0;

                            var contListaCartao = 0;
                            var contGastoCartao = 0;
                            $scope.lista.forEach(item => {
                                if (item.itemCartao == false) {
                                    contListaDinheiro += 1;
                                    contGastoDinheiro += item.preco;
                                }
                                if (item.itemCartao == true) {
                                    contListaCartao += 1;
                                    contGastoCartao += item.preco;
                                }
                            });
                            $scope.listaFixa.forEach(item => {
                                if (item.itemCartao == false) {
                                    contListaDinheiro += 1;
                                    contGastoDinheiro += item.preco;
                                }
                                if (item.itemCartao == true) {
                                    contListaCartao += 1;
                                    contGastoCartao += item.preco;
                                }
                            });

                            $scope.comprasDinheiro = contListaDinheiro;
                            $scope.comprasCartao = contListaCartao;
                            $scope.gastoTotalComDinheiro = contGastoDinheiro;
                            $scope.gastoTotalComCartao = contGastoCartao;
                        }
                        $scope.obterCompras();
                        $scope.porcComprasDinheiro = ($scope.comprasDinheiro * 100) / $scope.lista.length + $scope.listaFixa.length;
                        $scope.porcComprasCartao = 100 - $scope.porcComprasDinheiro;

                        $scope.precoItensFixado = $scope.somarFixados();
                        $scope.precoItensAdc = $scope.somarAdc();
                        $scope.precoItensTotal = $scope.precoTotalSomado();
                        $scope.data.data = new Date();

                        var relatorio = {
                            guid: $scope.data.guid, nomeRelatorio: $scope.data.relatorioNome, qtdLista: $scope.lista.length, qtdListaFixa: $scope.listaFixa.length, data: $scope.data.data,
                            precoAdc: $scope.precoItensAdc, precoFixados: $scope.precoItensFixado, precoTotal: $scope.precoItensTotal,
                            porcComprasDinheiro: $scope.porcComprasDinheiro, porcComprasCartao: $scope.porcComprasCartao,
                            comprasDinheiro: $scope.comprasDinheiro, comprasCartao: $scope.comprasCartao, gastoTotalComDinheiro: $scope.gastoTotalComDinheiro, gastoTotalComCartao: $scope.gastoTotalComCartao
                        }

                        $scope.listaRelatorios.unshift(relatorio);
                        Util.salvarObjeto('listaRelatorio', $scope.listaRelatorios);
                        voltarIndex();
                    }
                }
            ]
        });
    };

    /*Lista Categorias */
    $scope.ObterTipoTransporte = function () {
        var contagem = 0;
        var contagemFixados = 0;
        var contagemAdicionados = 0;
        var precoTotalGasto = 0;
        angular.forEach($scope.lista, function (key, value) {
            if (key.gasto == "Transporte") {
                contagem += 1;
                contagemAdicionados += 1;
                precoTotalGasto += key.preco;
            }
        });
        angular.forEach($scope.listaFixa, function (key, value) {
            if (key.gasto == "Transporte") {
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
            var itemExistente = {
                categoria: "Transporte",
                corIten: "#1abc9c",
                totalDeItens: contagem,
                icon: "onibus.png",
                porcentoItens: resultadoPorcentagemContagem,
                porcentoPreco: resultadoPorcentagemPreco,
                precoTotal: precoTotalGasto,
                itensFixados: contagemFixados,
                itensAdicionados: contagemAdicionados
            }
            $scope.ListarStatsCategorias.push(itemExistente);
        }
    }
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
            var itemExistente = { categoria: "Lazer", icon: "lazer.png", corIten: "#2ecc71", totalDeItens: contagem, porcentoItens: resultadoPorcentagemContagem, porcentoPreco: resultadoPorcentagemPreco, precoTotal: precoTotalGasto, itensFixados: contagemFixados, itensAdicionados: contagemAdicionados }
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
            var itemExistente = { itensFixados: contagemFixados, icon: "lanche.png", corIten: "#3498db", itensAdicionados: contagemAdicionados, categoria: "Lanche", totalDeItens: contagem, porcentoItens: resultadoPorcentagemContagem, porcentoPreco: resultadoPorcentagemPreco, precoTotal: precoTotalGasto }
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
            var itemExistente = { itensFixados: contagemFixados, icon: "restaurante.png", corIten: "#9b59b6", itensAdicionados: contagemAdicionados, categoria: "Restaurante", totalDeItens: contagem, porcentoItens: resultadoPorcentagemContagem, porcentoPreco: resultadoPorcentagemPreco, precoTotal: precoTotalGasto }
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
            var itemExistente = { itensFixados: contagemFixados, icon: "cinema.png", corIten: "#34495e", itensAdicionados: contagemAdicionados, categoria: "Cinema", totalDeItens: contagem, porcentoItens: resultadoPorcentagemContagem, porcentoPreco: resultadoPorcentagemPreco, precoTotal: precoTotalGasto }
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
            var itemExistente = { itensFixados: contagemFixados, icon: "roupa.png", corIten: "#f1c40f", itensAdicionados: contagemAdicionados, categoria: "Roupa", totalDeItens: contagem, porcentoItens: resultadoPorcentagemContagem, porcentoPreco: resultadoPorcentagemPreco, precoTotal: precoTotalGasto }
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
            var itemExistente = { itensFixados: contagemFixados, icon: "infantil.png", corIten: "#e67e22", itensAdicionados: contagemAdicionados, categoria: "Infantil", totalDeItens: contagem, porcentoItens: resultadoPorcentagemContagem, porcentoPreco: resultadoPorcentagemPreco, precoTotal: precoTotalGasto }
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
            var itemExistente = { itensFixados: contagemFixados, icon: "present.png", corIten: "#e74c3c", itensAdicionados: contagemAdicionados, categoria: "Presente", totalDeItens: contagem, porcentoItens: resultadoPorcentagemContagem, porcentoPreco: resultadoPorcentagemPreco, precoTotal: precoTotalGasto }
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
            var itemExistente = { itensFixados: contagemFixados, icon: "essencial.png", corIten: "#bdc3c7", itensAdicionados: contagemAdicionados, categoria: "Essencial", totalDeItens: contagem, porcentoItens: resultadoPorcentagemContagem, porcentoPreco: resultadoPorcentagemPreco, precoTotal: precoTotalGasto }
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
            var itemExistente = { itensFixados: contagemFixados, icon: "utilitarios.png", corIten: "#00d2d3", itensAdicionados: contagemAdicionados, categoria: "Utilitários", totalDeItens: contagem, porcentoItens: resultadoPorcentagemContagem, porcentoPreco: resultadoPorcentagemPreco, precoTotal: precoTotalGasto }
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
            var itemExistente = { itensFixados: contagemFixados, icon: "mercado.png", corIten: "#44bd32", itensAdicionados: contagemAdicionados, categoria: "Mercado", totalDeItens: contagem, porcentoItens: resultadoPorcentagemContagem, porcentoPreco: resultadoPorcentagemPreco, precoTotal: precoTotalGasto }
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
            var itemExistente = { itensFixados: contagemFixados, icon: "cafe.png", corIten: "#353b48", itensAdicionados: contagemAdicionados, categoria: "Café", totalDeItens: contagem, porcentoItens: resultadoPorcentagemContagem, porcentoPreco: resultadoPorcentagemPreco, precoTotal: precoTotalGasto }
            $scope.ListarStatsCategorias.push(itemExistente);
        }
    }

    /*Lista Cores */

    $scope.ObterCorVermelho = function () {
        var contagem = 0;
        var contagemFixados = 0;
        var contagemAdicionados = 0;
        var precoTotalGasto = 0;
        var contagemTipoTransporte = 0;
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
                if (key.gasto == "Transporte") {
                    contagemTipoTransporte += key.preco;
                }
                if (key.gasto == "Lazer") {
                    contagemTipoLazer += key.preco;
                }
                if (key.gasto == "Lanche") {
                    contagemTipoLanche += key.preco;
                }
                if (key.gasto == "Restaurante") {
                    contagemTipoRestaurante += key.preco;
                }
                if (key.gasto == "Cinema") {
                    contagemTipoCinema += key.preco;
                }
                if (key.gasto == "Roupa") {
                    contagemTipoRoupa += key.preco;
                }
                if (key.gasto == "Infantil") {
                    contagemTipoInfantil += key.preco;
                }
                if (key.gasto == "Presente") {
                    contagemTipoPresente += key.preco;
                }
                if (key.gasto == "Essencial") {
                    contagemTipoEssencial += key.preco;
                }
                if (key.gasto == "Utilitários") {
                    contagemTipoUtilitarios += key.preco;
                }
                if (key.gasto == "Mercado") {
                    contagemTipoMercado += key.preco;
                }
                if (key.gasto == "Café") {
                    contagemTipoCafe += key.preco;
                }
            }
        });
        angular.forEach($scope.listaFixa, function (key, value) {
            if (key.cor == "Vermelho") {
                contagem += 1;
                contagemFixados += 1;
                precoTotalGasto += key.preco;
                if (key.gasto == "Transporte") {
                    contagemTipoTransporte += key.preco;
                }
                if (key.gasto == "Lazer") {
                    contagemTipoLazer += key.preco;
                }
                if (key.gasto == "Lanche") {
                    contagemTipoLanche += key.preco;
                }
                if (key.gasto == "Restaurante") {
                    contagemTipoRestaurante += key.preco;
                }
                if (key.gasto == "Cinema") {
                    contagemTipoCinema += key.preco;
                }
                if (key.gasto == "Roupa") {
                    contagemTipoRoupa += key.preco;
                }
                if (key.gasto == "Infantil") {
                    contagemTipoInfantil += key.preco;
                }
                if (key.gasto == "Presente") {
                    contagemTipoPresente += key.preco;
                }
                if (key.gasto == "Essencial") {
                    contagemTipoEssencial += key.preco;
                }
                if (key.gasto == "Utilitários") {
                    contagemTipoUtilitarios += key.preco;
                }
                if (key.gasto == "Mercado") {
                    contagemTipoMercado += key.preco;
                }
                if (key.gasto == "Café") {
                    contagemTipoCafe += key.preco;
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

            var itemExistenteCor = {
                itensFixados: contagemFixados, 
                itensAdicionados: contagemAdicionados, 
                contagemTipoTransporte: contagemTipoTransporte,
                contagemTipoLazer: contagemTipoLazer, 
                contagemTipoLanche: contagemTipoLanche, 
                contagemTipoRestaurante: contagemTipoRestaurante, 
                contagemTipoCinema: contagemTipoCinema,
                contagemTipoRoupa: contagemTipoRoupa, 
                contagemTipoInfantil: contagemTipoInfantil, 
                contagemTipoPresente: contagemTipoPresente, 
                contagemTipoEssencial: contagemTipoEssencial,
                contagemTipoUtilitarios: contagemTipoUtilitarios, 
                contagemTipoMercado: contagemTipoMercado, 
                contagemTipoCafe: contagemTipoCafe,
                corDigitada: "Vermelho", 
                totalDeItens: contagem, 
                cor: "#c0392b", 
                porcentoItens: resultadoPorcentagemContagem, 
                porcentoPreco: resultadoPorcentagemPreco, 
                precoTotal: precoTotalGasto
            }
            $scope.ListarStatsCor.push(itemExistenteCor);
        }
    }
    $scope.ObterCorRoxo = function () {
        var contagem = 0;
        var contagemFixados = 0;
        var contagemAdicionados = 0;
        var precoTotalGasto = 0;
        var contagemTipoTransporte = 0;
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
                if (key.gasto == "Transporte") {
                    contagemTipoTransporte += key.preco;
                }
                if (key.gasto == "Lazer") {
                    contagemTipoLazer += key.preco;
                }
                if (key.gasto == "Lanche") {
                    contagemTipoLanche += key.preco;
                }
                if (key.gasto == "Restaurante") {
                    contagemTipoRestaurante += key.preco;
                }
                if (key.gasto == "Cinema") {
                    contagemTipoCinema += key.preco;
                }
                if (key.gasto == "Roupa") {
                    contagemTipoRoupa += key.preco;
                }
                if (key.gasto == "Infantil") {
                    contagemTipoInfantil += key.preco;
                }
                if (key.gasto == "Presente") {
                    contagemTipoPresente += key.preco;
                }
                if (key.gasto == "Essencial") {
                    contagemTipoEssencial += key.preco;
                }
                if (key.gasto == "Utilitários") {
                    contagemTipoUtilitarios += key.preco;
                }
                if (key.gasto == "Mercado") {
                    contagemTipoMercado += key.preco;
                }
                if (key.gasto == "Café") {
                    contagemTipoCafe += key.preco;
                }
            }
        });
        angular.forEach($scope.listaFixa, function (key, value) {
            if (key.cor == "Roxo") {
                contagem += 1;
                contagemFixados += 1;
                precoTotalGasto += key.preco;
                if (key.gasto == "Transporte") {
                    contagemTipoTransporte += key.preco;
                }
                if (key.gasto == "Lazer") {
                    contagemTipoLazer += key.preco;
                }
                if (key.gasto == "Lanche") {
                    contagemTipoLanche += key.preco;
                }
                if (key.gasto == "Restaurante") {
                    contagemTipoRestaurante += key.preco;
                }
                if (key.gasto == "Cinema") {
                    contagemTipoCinema += key.preco;
                }
                if (key.gasto == "Roupa") {
                    contagemTipoRoupa += key.preco;
                }
                if (key.gasto == "Infantil") {
                    contagemTipoInfantil += key.preco;
                }
                if (key.gasto == "Presente") {
                    contagemTipoPresente += key.preco;
                }
                if (key.gasto == "Essencial") {
                    contagemTipoEssencial += key.preco;
                }
                if (key.gasto == "Utilitários") {
                    contagemTipoUtilitarios += key.preco;
                }
                if (key.gasto == "Mercado") {
                    contagemTipoMercado += key.preco;
                }
                if (key.gasto == "Café") {
                    contagemTipoCafe += key.preco;
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

            var itemExistenteCor = {
                itensFixados: contagemFixados, itensAdicionados: contagemAdicionados, contagemTipoTransporte: contagemTipoTransporte,
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
        var contagemTipoTransporte = 0;
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
                if (key.gasto == "Transporte") {
                    contagemTipoTransporte += key.preco;
                }
                if (key.gasto == "Lazer") {
                    contagemTipoLazer += key.preco;
                }
                if (key.gasto == "Lanche") {
                    contagemTipoLanche += key.preco;
                }
                if (key.gasto == "Restaurante") {
                    contagemTipoRestaurante += key.preco;
                }
                if (key.gasto == "Cinema") {
                    contagemTipoCinema += key.preco;
                }
                if (key.gasto == "Roupa") {
                    contagemTipoRoupa += key.preco;
                }
                if (key.gasto == "Infantil") {
                    contagemTipoInfantil += key.preco;
                }
                if (key.gasto == "Presente") {
                    contagemTipoPresente += key.preco;
                }
                if (key.gasto == "Essencial") {
                    contagemTipoEssencial += key.preco;
                }
                if (key.gasto == "Utilitários") {
                    contagemTipoUtilitarios += key.preco;
                }
                if (key.gasto == "Mercado") {
                    contagemTipoMercado += key.preco;
                }
                if (key.gasto == "Café") {
                    contagemTipoCafe += key.preco;
                }
            }
        });
        angular.forEach($scope.listaFixa, function (key, value) {
            if (key.cor == "Verde") {
                contagem += 1;
                contagemFixados += 1;
                precoTotalGasto += key.preco;
                if (key.gasto == "Transporte") {
                    contagemTipoTransporte += key.preco;
                }
                if (key.gasto == "Lazer") {
                    contagemTipoLazer += key.preco;
                }
                if (key.gasto == "Lanche") {
                    contagemTipoLanche += key.preco;
                }
                if (key.gasto == "Restaurante") {
                    contagemTipoRestaurante += key.preco;
                }
                if (key.gasto == "Cinema") {
                    contagemTipoCinema += key.preco;
                }
                if (key.gasto == "Roupa") {
                    contagemTipoRoupa += key.preco;
                }
                if (key.gasto == "Infantil") {
                    contagemTipoInfantil += key.preco;
                }
                if (key.gasto == "Presente") {
                    contagemTipoPresente += key.preco;
                }
                if (key.gasto == "Essencial") {
                    contagemTipoEssencial += key.preco;
                }
                if (key.gasto == "Utilitários") {
                    contagemTipoUtilitarios += key.preco;
                }
                if (key.gasto == "Mercado") {
                    contagemTipoMercado += key.preco;
                }
                if (key.gasto == "Café") {
                    contagemTipoCafe += key.preco;
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

            var itemExistenteCor = {
                itensFixados: contagemFixados, itensAdicionados: contagemAdicionados, contagemTipoTransporte: contagemTipoTransporte,
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
        var contagemTipoTransporte = 0;
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
                if (key.gasto == "Transporte") {
                    contagemTipoTransporte += key.preco;
                }
                if (key.gasto == "Lazer") {
                    contagemTipoLazer += key.preco;
                }
                if (key.gasto == "Lanche") {
                    contagemTipoLanche += key.preco;
                }
                if (key.gasto == "Restaurante") {
                    contagemTipoRestaurante += key.preco;
                }
                if (key.gasto == "Cinema") {
                    contagemTipoCinema += key.preco;
                }
                if (key.gasto == "Roupa") {
                    contagemTipoRoupa += key.preco;
                }
                if (key.gasto == "Infantil") {
                    contagemTipoInfantil += key.preco;
                }
                if (key.gasto == "Presente") {
                    contagemTipoPresente += key.preco;
                }
                if (key.gasto == "Essencial") {
                    contagemTipoEssencial += key.preco;
                }
                if (key.gasto == "Utilitários") {
                    contagemTipoUtilitarios += key.preco;
                }
                if (key.gasto == "Mercado") {
                    contagemTipoMercado += key.preco;
                }
                if (key.gasto == "Café") {
                    contagemTipoCafe += key.preco;
                }
            }
        });
        angular.forEach($scope.listaFixa, function (key, value) {
            if (key.cor == "Laranja") {
                contagem += 1;
                contagemFixados += 1;
                precoTotalGasto += key.preco;
                if (key.gasto == "Transporte") {
                    contagemTipoTransporte += key.preco;
                }
                if (key.gasto == "Lazer") {
                    contagemTipoLazer += key.preco;
                }
                if (key.gasto == "Lanche") {
                    contagemTipoLanche += key.preco;
                }
                if (key.gasto == "Restaurante") {
                    contagemTipoRestaurante += key.preco;
                }
                if (key.gasto == "Cinema") {
                    contagemTipoCinema += key.preco;
                }
                if (key.gasto == "Roupa") {
                    contagemTipoRoupa += key.preco;
                }
                if (key.gasto == "Infantil") {
                    contagemTipoInfantil += key.preco;
                }
                if (key.gasto == "Presente") {
                    contagemTipoPresente += key.preco;
                }
                if (key.gasto == "Essencial") {
                    contagemTipoEssencial += key.preco;
                }
                if (key.gasto == "Utilitários") {
                    contagemTipoUtilitarios += key.preco;
                }
                if (key.gasto == "Mercado") {
                    contagemTipoMercado += key.preco;
                }
                if (key.gasto == "Café") {
                    contagemTipoCafe += key.preco;
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

            var itemExistenteCor = {
                itensFixados: contagemFixados, itensAdicionados: contagemAdicionados, contagemTipoTransporte: contagemTipoTransporte,
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
        var contagemTipoTransporte = 0;
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
                if (key.gasto == "Transporte") {
                    contagemTipoTransporte += key.preco;
                }
                if (key.gasto == "Lazer") {
                    contagemTipoLazer += key.preco;
                }
                if (key.gasto == "Lanche") {
                    contagemTipoLanche += key.preco;
                }
                if (key.gasto == "Restaurante") {
                    contagemTipoRestaurante += key.preco;
                }
                if (key.gasto == "Cinema") {
                    contagemTipoCinema += key.preco;
                }
                if (key.gasto == "Roupa") {
                    contagemTipoRoupa += key.preco;
                }
                if (key.gasto == "Infantil") {
                    contagemTipoInfantil += key.preco;
                }
                if (key.gasto == "Presente") {
                    contagemTipoPresente += key.preco;
                }
                if (key.gasto == "Essencial") {
                    contagemTipoEssencial += key.preco;
                }
                if (key.gasto == "Utilitários") {
                    contagemTipoUtilitarios += key.preco;
                }
                if (key.gasto == "Mercado") {
                    contagemTipoMercado += key.preco;
                }
                if (key.gasto == "Café") {
                    contagemTipoCafe += key.preco;
                }
            }
        });
        angular.forEach($scope.listaFixa, function (key, value) {
            if (key.cor == "Azul") {
                contagem += 1;
                contagemFixados += 1;
                precoTotalGasto += key.preco;
                if (key.gasto == "Transporte") {
                    contagemTipoTransporte += key.preco;
                }
                if (key.gasto == "Lazer") {
                    contagemTipoLazer += key.preco;
                }
                if (key.gasto == "Lanche") {
                    contagemTipoLanche += key.preco;
                }
                if (key.gasto == "Restaurante") {
                    contagemTipoRestaurante += key.preco;
                }
                if (key.gasto == "Cinema") {
                    contagemTipoCinema += key.preco;
                }
                if (key.gasto == "Roupa") {
                    contagemTipoRoupa += key.preco;
                }
                if (key.gasto == "Infantil") {
                    contagemTipoInfantil += key.preco;
                }
                if (key.gasto == "Presente") {
                    contagemTipoPresente += key.preco;
                }
                if (key.gasto == "Essencial") {
                    contagemTipoEssencial += key.preco;
                }
                if (key.gasto == "Utilitários") {
                    contagemTipoUtilitarios += key.preco;
                }
                if (key.gasto == "Mercado") {
                    contagemTipoMercado += key.preco;
                }
                if (key.gasto == "Café") {
                    contagemTipoCafe += key.preco;
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

            var itemExistenteCor = {
                itensFixados: contagemFixados, itensAdicionados: contagemAdicionados, contagemTipoTransporte: contagemTipoTransporte,
                contagemTipoLazer: contagemTipoLazer, contagemTipoLanche: contagemTipoLanche, contagemTipoRestaurante: contagemTipoRestaurante, contagemTipoCinema: contagemTipoCinema,
                contagemTipoRoupa: contagemTipoRoupa, contagemTipoInfantil: contagemTipoInfantil, contagemTipoPresente: contagemTipoPresente, contagemTipoEssencial: contagemTipoEssencial,
                contagemTipoUtilitarios: contagemTipoUtilitarios, contagemTipoMercado: contagemTipoMercado, contagemTipoCafe: contagemTipoCafe,
                corDigitada: "Azul", totalDeItens: contagem, cor: "#2980b9", porcentoItens: resultadoPorcentagemContagem, porcentoPreco: resultadoPorcentagemPreco, precoTotal: precoTotalGasto
            }
            $scope.ListarStatsCor.push(itemExistenteCor);
        }
    }
})