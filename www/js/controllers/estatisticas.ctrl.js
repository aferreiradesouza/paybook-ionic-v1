app.controller('statsCtrl', function ($scope, Util) {
    $scope.listaFixa = [];
    $scope.lista = [];

    $scope.init = function () {
        var listaAux = Util.obterObjeto('ItensDaLista');
        var listaAuxFixa = Util.obterObjeto('ItensDaListaFixa');

        if (listaAux != '') {
            $scope.lista = Util.converterParaObjeto(listaAux);
        }
        if (listaAuxFixa != '') {
            $scope.listaFixa = Util.converterParaObjeto(listaAuxFixa);
        }
    }

    $scope.platform = ionic.Platform.platform();

    $scope.ListarStatsCategorias = [
        { categoria: 'COMIDA', totalDeItens: '5', porcentoItens: '62%', porcentoPreco: '47%', precoTotal: '500.00' },
        { categoria: 'MÚSICA', totalDeItens: '5', porcentoItens: '62%', porcentoPreco: '47%', precoTotal: '500.00' },
        { categoria: 'LANCHE', totalDeItens: '5', porcentoItens: '62%', porcentoPreco: '47%', precoTotal: '500.00' }
    ];

    $scope.ListarStatsCor = [
        { categoria: 'VERMELHO', cor: '#c0392b', totalDeItens: '5', porcentoItens: '62%', porcentoPreco: '47%', precoTotal: '500.00' },
        { categoria: 'LARANJA', cor: '#f39c12', totalDeItens: '5', porcentoItens: '62%', porcentoPreco: '47%', precoTotal: '500.00' },
        { categoria: 'ROXO', cor: '#8e44ad', totalDeItens: '5', porcentoItens: '62%', porcentoPreco: '47%', precoTotal: '500.00' }
    ];

    /*SCOPES*/

    /*SCOPES*/

    /*VARIAVEIS*/

    /*VARIAVEIS*/

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
    // $scope.totalItensComida = function () {
    //     var contagem = 0;
    //     angular.forEach($scope.lista, function (key, value) {
    //         if (key.gasto == "Comida") {
    //             contagem += 1;
    //         }
    //     });
    //     angular.forEach($scope.listaFixa, function (key, value) {
    //         if (key.gasto == "Comida") {
    //             contagem += 1;
    //         }
    //     });
    //     return contagem;
    // }

    // function ObterEstatisticasCategoria{

    // }
})