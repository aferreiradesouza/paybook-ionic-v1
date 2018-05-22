app.controller('cartaoCtrl', function ($scope, Util, $ionicModal) {
    $scope.data = {};
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

        $scope.data.filtro = 'TODOS';
    }

    $scope.platform = ionic.Platform.platform();
    
    $scope.deleteCartao = function (index) {
        $scope.listaCartao.splice(index, 1);
        Util.salvarObjeto('listaCartao', $scope.listaCartao);
    }

    $scope.downUp = true;
    $scope.abrirFiltro = function(){
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
    };

    angular.forEach($scope.lista, function (key, value) {
        
    });
})