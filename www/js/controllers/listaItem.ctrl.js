app.controller('listaItemCtrl', function ($scope, Util) {
    $scope.lista = [];

    $scope.init = function () {
        var listaAux = Util.obterObjeto('ItensDaLista');

        if (listaAux != '') {
            $scope.lista = Util.converterParaObjeto(listaAux);
        }
    }

    $scope.deleteItem = function (index) {
        $scope.lista.splice(index, 1);
        Util.salvarObjeto('ItensDaLista', $scope.lista);
    }
})