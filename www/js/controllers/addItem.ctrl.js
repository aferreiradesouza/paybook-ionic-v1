app.controller('addItemCtrl', function ($scope, Util, $ionicModal) {
    $scope.data = {};
    $scope.lista = [];
    $scope.listaFixa = [];

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

    $ionicModal.fromTemplateUrl('Gasto.html', {
        scope: $scope,
        animation: 'slide-in-right'
    }).then(function (modal) {
        $scope.modalGasto = modal;
    });
    $scope.openModalGasto = function () {
        $scope.modalGasto.show();
    };
    $scope.closeModalGasto = function () {
        $scope.modalGasto.hide();
    };

    $ionicModal.fromTemplateUrl('Cor.html', {
        scope: $scope,
        animation: 'slide-in-right'
    }).then(function (modal) {
        $scope.modalCor = modal;
    });
    $scope.openModalCor = function () {
        $scope.modalCor.show();
    };
    $scope.closeModalCor = function () {
        $scope.modalCor.hide();
    };

    $("#preco").maskMoney();

    $scope.platform = ionic.Platform.platform();

    window.addEventListener('native.keyboardshow', function () {
        document.body.classList.add('keyboard-open');
    });

    $scope.addItem = function () {
        $scope.data.gastoConv = converterGasto($scope.data.gasto);
        $scope.data.corConv = converterCor($scope.data.cor);
        $scope.data.dia = new Date();
        $scope.data.hora = new Date();
        // $scope.data.preco = parseFloat($scope.data.preco);
        $scope.data.preco = parseFloat($scope.data.preco);


        $scope.data.id = Util.criarGuid();

        if ($scope.data.itemFixo == true) {
            $scope.data.itemFixo = true;
            $scope.listaFixa.unshift($scope.data);
            Util.salvarObjeto('ItensDaListaFixa', $scope.listaFixa);
        } else {
            $scope.data.itemFixo = false;
            $scope.lista.unshift($scope.data);
            Util.salvarObjeto('ItensDaLista', $scope.lista);
        }

        voltarIndex();
    }

    function voltarIndex() {
        setTimeout(function () {
            window.location.href = "#/tab/lista-item";
        }, 100);
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
        if (gasto == 'Lazer') {
            var tipoGasto = 'lazer.png';
        }
        if (gasto == 'Café') {
            var tipoGasto = 'cafe.png';
        }
        if (gasto == 'Lanche') {
            var tipoGasto = 'lanche.png';
        }
        if (gasto == 'Essencial') {
            var tipoGasto = 'essencial.png';
        }
        if (gasto == 'Infantil') {
            var tipoGasto = 'infantil.png';
        }
        if (gasto == 'Presente') {
            var tipoGasto = 'present.png';
        }
        if (gasto == 'Cinema') {
            var tipoGasto = 'cinema.png';
        }
        if (gasto == 'Mercado') {
            var tipoGasto = 'mercado.png';
        }
        if (gasto == 'Roupa') {
            var tipoGasto = 'roupa.png';
        }
        if (gasto == 'Utilitários') {
            var tipoGasto = 'utilitarios.png';
        }
        if (gasto == 'Restaurante') {
            var tipoGasto = 'restaurante.png';
        }
        return tipoGasto;
    }

    // function precoConvertido(gasto){
    //     if(gasto.charAt(1) == "."){
    //         gasto.charAt(1) = ",";
    //         return gasto;
    //     }
    // }
})