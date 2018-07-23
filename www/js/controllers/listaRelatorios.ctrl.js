app.controller('listaRelatorioCtrl', function ($scope, Util, $stateParams, $state, $rootScope) {
    $scope.irDetalheRelatorio = irDetalheRelatorio;
    $scope.guidRelatorioSelecionado = $stateParams.guid;

    $scope.listaFixa = [];
    $scope.lista = [];
    $scope.ListarStatsCategorias = [];
    $scope.ListarStatsCor = [];
    $scope.listaCartao = [];
    $scope.listaCartaoEstatistica = [];

    //relatorios
    $scope.listaRelatorios = [];
    $scope.relatoriosCartao = [];
    $scope.relatoriosCategoria = [];
    $scope.relatoriosCor = [];


    $scope.init = function () {
        var listaAux = Util.obterObjeto('ItensDaLista');
        var listaAuxFixa = Util.obterObjeto('ItensDaListaFixa');
        var listaAuxExcluir = Util.obterObjeto('listaExcluir');
        var listaAuxCartao = Util.obterObjeto('listaCartao');

        //relatorios
        var listaAuxRelatorio = Util.obterObjeto('listaRelatorio');
        var listaAuxRelatorioCartao = Util.obterObjeto('listaRelatorioCartao');
        var listaAuxRelatorioCategoria = Util.obterObjeto('listaRelatorioCategoria');
        var listaAuxRelatorioCor = Util.obterObjeto('listaRelatorioCor');

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

        //relatorios
        if (listaAuxRelatorio != '') {
            $scope.listaRelatorios = Util.converterParaObjeto(listaAuxRelatorio);
        }
        if (listaAuxRelatorioCartao != '') {
            $scope.relatoriosCartao = Util.converterParaObjeto(listaAuxRelatorioCartao);
        }
        if (listaAuxRelatorioCategoria != '') {
            $scope.relatoriosCategoria = Util.converterParaObjeto(listaAuxRelatorioCategoria);
        }
        if (listaAuxRelatorioCor != '') {
            $scope.relatoriosCor = Util.converterParaObjeto(listaAuxRelatorioCor);
        }
    }

    $scope.platform = ionic.Platform.platform();

    function irDetalheRelatorio(listaRelatorios) {
        $state.go('Relatorios', { 'guid': listaRelatorios });
    }

    $scope.shouldShowDelete = false;
    $scope.shouldShowReorder = false;
    $scope.listCanSwipe = true

    $scope.deleteRelatorio = function (index, guid) {
        var n;
        var i;
        var x;
        for (n = $scope.relatoriosCartao.length - 1; n > -1; n=n-1) {
            if($scope.relatoriosCartao[n].guid == guid){
                $scope.relatoriosCartao.splice(n, 1);
            }
        }
        for (i = $scope.relatoriosCategoria.length - 1; i > -1; i=i-1) {
            if($scope.relatoriosCategoria[i].guid == guid){
                $scope.relatoriosCategoria.splice(i, 1);
            }
        }
        for (x = $scope.relatoriosCor.length - 1; x > -1; x=x-1) {
            if($scope.relatoriosCor[x].guid == guid){
                $scope.relatoriosCor.splice(x, 1);
            }
        }

        $scope.listaRelatorios.splice(index, 1);

        Util.salvarObjeto('listaRelatorio', $scope.listaRelatorios);
        Util.salvarObjeto('listaRelatorioCartao', $scope.relatoriosCartao);
        Util.salvarObjeto('listaRelatorioCategoria', $scope.relatoriosCategoria);
        Util.salvarObjeto('listaRelatorioCor', $scope.relatoriosCor);
    }

})