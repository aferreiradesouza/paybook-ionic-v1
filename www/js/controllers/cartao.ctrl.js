app.controller('cartaoCtrl', function ($scope, Util, $ionicModal) {
    $scope.data = {};
    $scope.lista = [];
    $scope.listaFixa = [];
    $scope.listaExcluir = [];
    $scope.listaCartao = [];
    $scope.listaCartaoItemFixados = [];
    $scope.listaCartaoItemAdicionados = [];
    $scope.listaFaturaCartao = [];


    $scope.init = function () {
        var listaAux = Util.obterObjeto('ItensDaLista');
        var listaAuxFixa = Util.obterObjeto('ItensDaListaFixa');
        var listaAuxExcluir = Util.obterObjeto('listaExcluir');
        var listaAuxCartao = Util.obterObjeto('listaCartao');

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
            $scope.listaCartao.forEach(item => {
                if (item.id == null) {
                    item.id = Util.criarGuid();
                }
            });
        }
        $scope.data.filtro = 'Todos';

        $scope.infoCartao();
        $scope.ObterListaGastosCartao();
        $scope.ObterListaFixaGastosCartao();

    }

    $scope.activeDelete = $scope.listaCartao[0];
    $scope.setActive = function (cardItem) {
        $scope.activeDelete = cardItem
    }

    $scope.setDesactive = function () {
        $scope.activeDelete = 'nada';
    }

    $scope.platform = ionic.Platform.platform();


    $scope.deleteCartao = function (index) {
        var i;
        var n;
        for (i = 0; i <= $scope.lista.length -1; i++) {
            if($scope.lista[i].cartao == $scope.listaCartao[index].nomeCartao){
                $scope.lista.splice(i, 1);
            }
        }
        for (n = 0; n <= $scope.listaFixa.length -1; n++) {
            if($scope.listaFixa[n].cartao == $scope.listaCartao[index].nomeCartao){
                $scope.listaFixa.splice(n, 1);
            }
        }
        $scope.listaCartao.splice(index, 1);
        Util.salvarObjeto('ItensDaLista', $scope.lista);
        Util.salvarObjeto('listaCartao', $scope.listaCartao);
        Util.salvarObjeto('ItensDaListaFixa', $scope.listaFixa);
        $scope.infoCartao();
        $scope.ObterListaGastosCartao();
        $scope.ObterListaFixaGastosCartao();
    }

    $scope.downUp = true;
    $scope.abrirFiltro = function () {
        $scope.downUp = !$scope.downUp;
    }

    $ionicModal.fromTemplateUrl('filtro.html', {
        scope: $scope,
        animation: 'slide-in-right'
    }).then(function (modal) {
        $scope.modalFiltro = modal;
    });
    $scope.openModalFiltro = function () {
        $scope.modalFiltro.show();
    };
    $scope.closeModalFiltro = function () {
        $scope.modalFiltro.hide();
        $scope.ObterListaGastosCartao();
        $scope.ObterListaFixaGastosCartao();
    };

    $scope.ObterListaGastosCartao = function () {
        $scope.listaCartaoItemAdicionados = [];
        $scope.lista.forEach(item => {
            if (item.itemCartao == true) {
                if ($scope.data.filtro == 'Todos') {
                    var item = { corCartaoItem: item.corCartaoItem, item: item.item, gasto: item.gasto, gastoImg: item.gastoConv, dia: item.hora, preco: item.preco }
                    $scope.listaCartaoItemAdicionados.push(item);

                } else {
                    if (item.cartao == $scope.data.filtro) {
                        var item = { corCartaoItem: item.corCartaoItem, item: item.item, gasto: item.gasto, gastoImg: item.gastoConv, dia: item.hora, preco: item.preco }
                        $scope.listaCartaoItemAdicionados.push(item);
                    }
                }
            }
        });
    }

    $scope.ObterListaFixaGastosCartao = function () {
        $scope.listaCartaoItemFixados = [];
        $scope.listaFixa.forEach(item => {
            if (item.itemCartao == true) {
                if ($scope.data.filtro == 'Todos') {
                    var item = { corCartaoItem: item.corCartaoItem, item: item.item, gasto: item.gasto, gastoImg: item.gastoConv, dia: item.hora, preco: item.preco }
                    $scope.listaCartaoItemFixados.push(item);

                }
                if (item.cartao == $scope.data.filtro) {
                    var item = { corCartaoItem: item.corCartaoItem, item: item.item, gasto: item.gasto, gastoImg: item.gastoConv, dia: item.hora, preco: item.preco }
                    $scope.listaCartaoItemFixados.push(item);
                }

            }
        });
    }

    $scope.infoCartao = function () {
        var i;
        for (i = 0; i <= $scope.listaCartao.length - 1; i++) {
            var contagemPreco = 0;
            var contagemItem = 0;
            $scope.lista.forEach(item => {
                if ($scope.listaCartao[i].nomeCartao == item.cartao) {
                    contagemPreco += item.preco;
                    contagemItem += 1;
                }
            });
            $scope.listaFixa.forEach(item => {
                if ($scope.listaCartao[i].nomeCartao == item.cartao) {
                    contagemPreco += item.preco;
                    contagemItem += 1;
                }
            });
            var item = { fatura: contagemPreco, contagemItem : contagemItem }
            $scope.listaFaturaCartao.push(item);
        }
    }
})