app.controller('addItemCtrl', function ($scope, Util) {
    $scope.data = {};
    $scope.lista = [];

    $scope.init = function () {
        var listaAux = Util.obterObjeto('ItensDaLista');

        if (listaAux != '') {
            $scope.lista = Util.converterParaObjeto(listaAux);
        }
    }

    $scope.addItem = function () {
        $scope.data.gastoConv = converterGasto($scope.data.gasto);
        $scope.data.cor = converterCor($scope.data.cor);
        $scope.data.dia = new Date();
        $scope.data.hora = convHora();
        $scope.data.preco = parseFloat($scope.data.preco);

        $scope.data.id = Util.criarGuid();
        $scope.lista.unshift($scope.data);
        Util.salvarObjeto('ItensDaLista', $scope.lista);
    }

    function convHora() {
        var h = new Date();
        var hora = h.getHours() + ':' + h.getMinutes();
        if (hora.length == 4) {
            // var hora = h.getHours() + ':0' + h.getMinutes();
            if (hora.charAt(0) != 0) {
                var hora = '0' + h.getHours() + ':' + h.getMinutes();
            }
            if (hora.charAt(3) != 0) {
                var hora = h.getHours() + ':0' + h.getMinutes();
            }
        }
        if (hora.length == 3) {
            var hora = '0' + h.getHours() + ':0' + h.getMinutes();
        }
        return hora;
    }

    // function formatarData(dado) {
    //     var data = dado;
    //     var dia = data.getDate();

    //     if (dia.toString().length == 1) {
    //         dia = "0" + dia;
    //     }
    //     var mes = data.getMonth() + 1;

    //     if (mes.toString().length == 1) {
    //         mes = "0" + mes;
    //     }
    //     var ano = data.getFullYear();

    //     return dia + "/" + mes;
    // }

    function converterCor(cor) {
        if (cor == 'Vermelho') {
            var ConvCor = '#c0392b';
        }
        if (cor == 'Roxo') {
            var ConvCor = '#8e44ad';
        }
        if (cor == 'Verde') {
            var ConvCor = '#27ae60';
        }
        if (cor == 'Laranja') {
            var ConvCor = '#f39c12';
        }
        if (cor == 'Azul') {
            var ConvCor = '#2980b9';
        }
        return ConvCor;
    }

    function converterGasto(gasto) {
        if (gasto == 'Comida') {
            var tipoGasto = 'ion-pizza';
        }
        if (gasto == 'Lanche') {
            var tipoGasto = 'ion-coffee';
        }
        if (gasto == 'Jogos') {
            var tipoGasto = 'ion-ios-game-controller-a';
        }
        if (gasto == 'Cinema') {
            var tipoGasto = 'ion-ios-videocam';
        }
        if (gasto == 'Livros') {
            var tipoGasto = 'ion-ios-book';
        }
        if (gasto == 'Música') {
            var tipoGasto = 'ion-headphone';
        }
        if (gasto == 'Esportes') {
            var tipoGasto = 'ion-ios-football';
        }
        if (gasto == 'Cerveja') {
            var tipoGasto = 'ion-beer';
        }
        return tipoGasto;
    }
})