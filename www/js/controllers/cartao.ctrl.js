app.controller('cartaoCtrl', function ($scope, Util, $ionicModal) {
    $scope.data = {};
    $scope.lista = [];
    $scope.listaFixa = [];
    $scope.listaExcluir = [];
    $scope.listaCartao = [];
    $scope.listaCartaoItemFixados = [];
    $scope.listaCartaoItemAdicionados = [];


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

        $scope.ObterListaGastosCartao();
        $scope.ObterListaFixaGastosCartao();
        $scope.calculoPreco();

    }

    $scope.platform = ionic.Platform.platform();

    $scope.deleteCartao = function (index) {
        $scope.listaCartao.splice(index, 1);
        Util.salvarObjeto('listaCartao', $scope.listaCartao);
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


    // $scope.calculoPreco = function () {
    //     $scope.listaCartao.forEach(item => {
    //         $scope.lista.forEach(itemLista => {
    //             var contagemPreco = 0;
    //             if (item.nomeCartao == itemLista.cartao) {
    //                 contagemPreco += itemLista.preco;
    //             }
    //             $scope.fatura = contagemPreco;
    //         });
    //     });
    // }
})