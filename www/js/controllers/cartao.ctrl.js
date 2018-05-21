app.controller('cartaoCtrl', function ($scope, Util, $ionicModal) {
    $scope.lista = [];
    $scope.listaFixa = [];
    $scope.listaExcluir = [];
    $scope.listaCartao = [];


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
    }

    $scope.deleteCartao = function (index) {
        $scope.listaCartao.splice(index, 1);
        Util.salvarObjeto('listaCartao', $scope.listaCartao);
    }

    $scope.downUp = true;
    $scope.abrirFiltro = function(){
        $scope.downUp = !$scope.downUp;
    }
})