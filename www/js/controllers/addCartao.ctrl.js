app.controller('addCartaoCtrl', function ($scope, Util, $ionicModal) {
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
    }

    $scope.platform = ionic.Platform.platform();


    $scope.addCartao = function() {
        $scope.data.bandeiraConv = ObterImagemBandeira($scope.data.bandeira);
        $scope.data.corCartaoConvertida = ObterCorConvertida($scope.data.corCartao);

        $scope.data.id = Util.criarGuid();

        $scope.listaCartao.unshift($scope.data);
        Util.salvarObjeto('listaCartao', $scope.listaCartao);



        voltarIndexCartao();
    }

    function voltarIndexCartao() {
        setTimeout(function () {
            window.location.href = "#!/tab/cartao";
        }, 100);
    }

    $ionicModal.fromTemplateUrl('CorCartao.html', {
        scope: $scope,
        animation: 'slide-in-right'
    }).then(function (modal) {
        $scope.modalCorCartao = modal;
    });
    $scope.openModalCorCartao = function () {
        $scope.modalCorCartao.show();
    };
    $scope.closeModalCorCartao = function () {
        $scope.modalCorCartao.hide();
    };

    $ionicModal.fromTemplateUrl('Bandeira.html', {
        scope: $scope,
        animation: 'slide-in-right'
    }).then(function (modal) {
        $scope.modalBandeira = modal;
    });
    $scope.openModalBandeira = function () {
        $scope.modalBandeira.show();
    };
    $scope.closeModalBandeira = function () {
        $scope.modalBandeira.hide();
    };

    function ObterImagemBandeira(bandeira){
        var imgBandeira;
        if(bandeira == "Visa"){
            imgBandeira = "visa.png"
        }
        if(bandeira == "Mastercard"){
            imgBandeira = "mastercard.png"
        }
        return imgBandeira;
    }

    function ObterCorConvertida(cor){
        var corConvertida;
        if(cor == "Roxo"){
            corConvertida = "#632080"
        }
        if(cor == "Preto"){
            corConvertida = "#3d3d3d"
        }
        if(cor == "Azul"){
            corConvertida = "#192a56"
        }
        if(cor == "Cinza"){
            corConvertida = "#718093"
        }
        if(cor == "Laranja"){
            corConvertida = "#f0932b"
        }
        if(cor == "Vermelho"){
            corConvertida = "#ff3838"
        }
        return corConvertida;
    }
    
})