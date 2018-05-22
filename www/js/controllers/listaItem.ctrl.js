app.controller('listaItemCtrl', function ($scope, Util, $ionicModal) {
    $scope.listaFixa = [];
    $scope.lista = [];
    $scope.listaExcluir = [];
    $scope.listaCartao = [];
    $scope.refresher = true;

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
        }

        $scope.sum();
    }

    $scope.cartaoListaAbrir = false;
    $scope.abrirCartao = function () {
        $scope.cartaoListaAbrir = !$scope.cartaoListaAbrir;
    }

    $scope.shouldShowDelete = false;
    $scope.shouldShowReorder = false;
    $scope.listCanSwipe = true;

    $scope.activeCard = $scope.lista[0];

    $scope.setActive = function (cardItem) {
        $scope.activeCard = cardItem
    }

    $scope.setDesactive = function () {
        $scope.activeCard = 'nada';
    }

    $scope.activeCardFixo = $scope.listaFixa[0];

    $scope.setActiveFixo = function (cardItem) {
        $scope.activeCardFixo = cardItem
    }

    $scope.setDesactiveFixo = function () {
        $scope.activeCardFixo = 'nada';
    }

    $scope.platform = ionic.Platform.platform();

    $scope.limparLista = function () {
        $scope.lista = [];
        Util.salvarObjeto('ItensDaLista', $scope.lista);
    }

    $scope.limparListaFixa = function () {
        $scope.listaFixa = [];
        Util.salvarObjeto('ItensDaListaFixa', $scope.listaFixa);
    }

    $scope.fixarItem = function (item, from, to) {
        var idx = from.indexOf(item);
        if (idx != -1) {
            from.splice(idx, 1);
            item.itemFixo = true;
            to.unshift(item);
        }
        Util.salvarObjeto('ItensDaListaFixa', $scope.listaFixa);
        Util.salvarObjeto('ItensDaLista', $scope.lista);
    };

    $scope.desfixarItem = function (item, from, to) {
        var idx = from.indexOf(item);
        if (idx != -1) {
            from.splice(idx, 1);
            item.itemFixo = false;
            to.unshift(item);
        }
        Util.salvarObjeto('ItensDaListaFixa', $scope.listaFixa);
        Util.salvarObjeto('ItensDaLista', $scope.lista);
    };

    $scope.atualizarLista = function () {
        setTimeout(function () {
            location.reload();
        }, 1500);
    }

    $scope.sum = function () {
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
        $scope.totalSoma = total.toFixed(2);
    }

    $scope.deletarItemLista = function (item, from, to) {
        var idx = from.indexOf(item);
        if (idx != -1) {
            from.splice(idx, 1);
            to.unshift(item);
        }
        Util.salvarObjeto('ItensDaLista', $scope.lista);
        Util.salvarObjeto('ItensDaListaFixa', $scope.listaFixa);
        Util.salvarObjeto('listaExcluir', $scope.listaExcluir);
    }

    $scope.clickDesfazerLista = function (item, from, to) {
        var idx = from.indexOf(item);
        if (idx != -1) {
            from.splice(idx, 1);
            to.unshift(item);
        }
        Util.salvarObjeto('ItensDaLista', $scope.lista);
        Util.salvarObjeto('ItensDaListaFixa', $scope.listaFixa);
        Util.salvarObjeto('listaExcluir', $scope.listaExcluir);
    }

    $scope.clickDesfazerListaFixa = function (item, from, to) {
        var idx = from.indexOf(item);
        if (idx != -1) {
            from.splice(idx, 1);
            to.unshift(item);
        }
        Util.salvarObjeto('ItensDaLista', $scope.lista);
        Util.salvarObjeto('ItensDaListaFixa', $scope.listaFixa);
        Util.salvarObjeto('listaExcluir', $scope.listaExcluir);
    }

    $scope.deleteItem = function (index) {
        $scope.lista.splice(index, 1);
        Util.salvarObjeto('ItensDaLista', $scope.lista);
    }

    $scope.deleteItemFixado = function (index) {
        $scope.listaFixa.splice(index, 1);
        Util.salvarObjeto('ItensDaListaFixa', $scope.listaFixa);
    }

    $(document).ready(function () {
        $('.btnLimpar').click(function () {
            $('.btnLimpar').toggleClass('btnLimparAtivo');
            $('#x').toggleClass('btnSumir');
            $('#limpar').toggleClass('btnSumir');
            setTimeout(function () {
                $('.btnLimpar').removeClass('btnLimparAtivo');
                $('#x').removeClass('btnSumir');
                $('#limpar').addClass('btnSumir');
            }, 2500);
        });
    });

    $(document).ready(function () {
        $('.btnLimparFixo').click(function () {
            $('.btnLimparFixo').toggleClass('btnLimparAtivoFixo');
            $('#xFixo').toggleClass('btnSumirFixo');
            $('#limparFixo').toggleClass('btnSumirFixo');
            setTimeout(function () {
                $('.btnLimparFixo').removeClass('btnLimparAtivoFixo');
                $('#xFixo').removeClass('btnSumirFixo');
                $('#limparFixo').addClass('btnSumirFixo');
            }, 2500);
        });
    });

    $ionicModal.fromTemplateUrl('my-modal.html', {
        scope: $scope,
        animation: 'slide-in-right'
    }).then(function (modal) {
        $scope.modal = modal;
    });
    $scope.openModal = function () {
        $scope.modal.show();
    };
    $scope.closeModal = function () {
        $scope.modal.hide();
    };

    $scope.limparDesfazer = function () {
        $scope.listaExcluir = [];
        Util.salvarObjeto('listaExcluir', $scope.listaExcluir);
    }

    $scope.touchStart = function () {
        $scope.refresher = false;
    }

    $scope.touchEnd = function () {
        $scope.refresher = true;
    }
})