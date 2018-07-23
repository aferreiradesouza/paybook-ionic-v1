app.controller('relatorioCtrl', function ($scope, Util, $ionicPopup, $timeout, $stateParams, $state) {
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

    $scope.relatorioGeral = {};
    $scope.relatorioCartao = {};
    $scope.relatorioCategoria = {};
    $scope.relatorioCor = {};

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

        iniciar();

        $scope.tabAtual = 'categorias';

        $scope.categoriaAtual = 'todos';

        $scope.statCorAtual = 'todas';
    }

    $scope.platform = ionic.Platform.platform();

    function iniciar() {
        if ($stateParams.guid == null || $stateParams.guid == 0) {
            //voltar para tela de itens
            $state.go('tab.lista-item');
        }

        $scope.listaRelatorios.forEach(item => {
            if (item.guid == $stateParams.guid) {
                $scope.relatorioGeral = item;

                return;
            }
        });

        $scope.relatoriosCartao.forEach(item => {
            if (item.guid == $stateParams.guid) {
                $scope.relatorioCartao = $stateParams.guid;

                return;
            }
        });

        $scope.relatoriosCategoria.forEach(item => {
            if (item.guid == $stateParams.guid) {
                $scope.relatorioCategoria = $stateParams.guid;

                return;
            }
        });

        $scope.relatoriosCategoria.forEach(item => {
            if (item.guid == $stateParams.guid) {
                $scope.relatorioCor = $stateParams.guid;

                return;
            }
        });
    }

    $scope.mudancaTab = function(tabDeMudanca){
        $scope.tabAtual = tabDeMudanca;
    }

    $scope.mudancaCategoria = function(categoria, cor){
        $scope.categoriaAtual = categoria;
        $scope.corAtual = cor;
    }

    $scope.mudancaCategoriaLista = function(categoria, cor){
        $scope.categoriaAtual = categoria;
        $scope.corAtual = cor;
    }
    
    $scope.desfazerMudancaCategoria = function(){
        $scope.categoriaAtual = 'todos';
    }

    $scope.mudancaCor = function(cor, corItem){
        $scope.statCorAtual = cor;
        $scope.corItem = corItem;
    }

    $scope.desfazerMudancaCor = function(){
        $scope.statCorAtual = 'todas';
    }
})