app.controller('addItemCtrl', function ($scope, Util, $ionicModal) {
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

    $scope.abrirCompraCartao = false;
    $scope.abrirAddCompraCartao = function () {
        $scope.abrirCompraCartao = !$scope.abrirCompraCartao;
        if ($scope.data.itemCartao == true) {
            $scope.data.itemCartao = false;
            $scope.data.cartao = '';
        }
    }

    $scope.limparCartao = function () {
        if ($scope.data.itemCartao == false) {
            $scope.data.cartao = '';
        }
    }

    window.addEventListener('native.keyboardshow', function () {
        document.body.classList.add('keyboard-open');
    });

    $scope.addItem = function () {
        $scope.data.gastoConvPic = converterGastoPic($scope.data.gasto);
        $scope.data.gastoConv = converterGasto($scope.data.gasto);
        $scope.data.corConv = converterCor($scope.data.cor);
        $scope.data.dia = new Date();
        $scope.data.hora = new Date();
        // $scope.data.preco = parseFloat($scope.data.preco);
        $scope.data.preco = parseFloat($scope.data.preco);
        $scope.data.classificacao = 'nenhuma';

        if ($scope.data.itemCartao == true) {
            $scope.data.itemCartao = true;
            $scope.data.digitoCartao = $scope.digitoCartaoEscolhido;
            $scope.data.bandeiraCartao = $scope.bandeiraCartaoEscolhido;
        } else {
            $scope.data.itemCartao = false;
        }

        if ($scope.data.cartao != '') {
            $scope.data.cartao = $scope.data.cartao;
        }


        $scope.data.corCartaoItem = $scope.ObterCorItemCartao();


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

    $scope.ObterCorItemCartao = function () {
        var n;
        $scope.listaCartao.forEach(item => {
            if ($scope.data.cartao == item.nomeCartao) {
                n = item.corCartaoConvertida;
            }
        });
        return n;
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

    $ionicModal.fromTemplateUrl('Cartao.html', {
        scope: $scope,
        animation: 'slide-in-right'
    }).then(function (modal) {
        $scope.modalCartao = modal;
    });
    $scope.openModalCartao = function () {
        $scope.modalCartao.show();
    };
    $scope.closeModalCartao = function () {
        $scope.modalCartao.hide();
        $scope.ObterDescricaoCartao();
    };

    function voltarIndex() {
        setTimeout(function () {
            window.location.href = "#!/tab/lista-item";
        }, 100);
    }

    $scope.ObterDescricaoCartao = function () {
        $scope.listaCartao.forEach(item => {
            if ($scope.data.cartao == item.nomeCartao) {
                $scope.corCartaoEscolhido = item.corCartaoConvertida;
                $scope.digitoCartaoEscolhido = item.digitos;
                $scope.limiteCartaoEscolhido = item.limite;
                $scope.bandeiraCartaoEscolhido = item.bandeira;
                $scope.nomeCartaoEscolhido = item.pNome;
            }
        });
    }

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
        if (gasto == 'Transporte') {
            var tipoGasto = 'onibus.png';
            var pic = 'transporte.jpg';
        }
        if (gasto == 'Lazer') {
            var tipoGasto = 'lazer.png';
            var pic = 'lazer.jpg';
        }
        if (gasto == 'Café') {
            var tipoGasto = 'cafe.png';
            var pic = 'cafe.jpg';
        }
        if (gasto == 'Lanche') {
            var tipoGasto = 'lanche.png';
            var pic = 'lanche.jpg';
        }
        if (gasto == 'Essencial') {
            var tipoGasto = 'essencial.png';
            var pic = 'essencial.jpg';
        }
        if (gasto == 'Infantil') {
            var tipoGasto = 'infantil.png';
            var pic = 'infantil.jpg';
        }
        if (gasto == 'Presente') {
            var tipoGasto = 'present.png';
            var pic = 'presente.jpg';
        }
        if (gasto == 'Cinema') {
            var tipoGasto = 'cinema.png';
            var pic = 'cinema.jpg';
        }
        if (gasto == 'Mercado') {
            var tipoGasto = 'mercado.png';
            var pic = 'mercado.jpg';
        }
        if (gasto == 'Roupa') {
            var tipoGasto = 'roupa.png';
            var pic = 'roupa.jpg';
        }
        if (gasto == 'Utilitários') {
            var tipoGasto = 'utilitarios.png';
            var pic = 'utilitarios.jpg';
        }
        if (gasto == 'Restaurante') {
            var tipoGasto = 'restaurante.png';
            var pic = 'restaurante.jpg';
        }
        return tipoGasto;
    }

    function converterGastoPic(gasto) {
        if (gasto == 'Transporte') {
            var pic = 'transporte.jpg';
        }
        if (gasto == 'Lazer') {
            var pic = 'lazer.jpg';
        }
        if (gasto == 'Café') {
            var pic = 'cafe.jpg';
        }
        if (gasto == 'Lanche') {
            var pic = 'lanche.jpg';
        }
        if (gasto == 'Essencial') {
            var pic = 'essencial.jpg';
        }
        if (gasto == 'Infantil') {
            var pic = 'infantil.jpg';
        }
        if (gasto == 'Presente') {
            var pic = 'presente.jpg';
        }
        if (gasto == 'Cinema') {
            var pic = 'cinema.jpg';
        }
        if (gasto == 'Mercado') {
            var pic = 'mercado.jpg';
        }
        if (gasto == 'Roupa') {
            var pic = 'roupa.jpg';
        }
        if (gasto == 'Utilitários') {
            var pic = 'utilitarios.jpg';
        }
        if (gasto == 'Restaurante') {
            var pic = 'restaurante.jpg';
        }
        return pic;
    }
})