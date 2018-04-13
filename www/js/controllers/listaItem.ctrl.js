app.controller('listaItemCtrl', function ($scope, Util) {
    $scope.lista = [];

    $scope.init = function () {
        var listaAux = Util.obterObjeto('ItensDaLista');

        if (listaAux != '') {
            $scope.lista = Util.converterParaObjeto(listaAux);
        }
    }

    $scope.atualizarLista = function () {
        setTimeout(function () {
            location.reload();
        }, 1500);
    }

    $scope.deleteItem = function (index) {
        $scope.lista.splice(index, 1);
        Util.salvarObjeto('ItensDaLista', $scope.lista);
    }
    $(document).ready(function () {
        $('.card-item').click(function () {
            $('#comentario').toggleClass('comentarioHeight');
        });
    });
})