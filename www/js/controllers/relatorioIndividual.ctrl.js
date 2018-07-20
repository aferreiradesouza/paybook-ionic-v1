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

    $scope.relatorioGeral = {};
    $scope.relatorioCartao = {};
    $scope.relatorioCategoria = {};

    $scope.init = function () {
        var listaAux = Util.obterObjeto('ItensDaLista');
        var listaAuxFixa = Util.obterObjeto('ItensDaListaFixa');
        var listaAuxExcluir = Util.obterObjeto('listaExcluir');
        var listaAuxCartao = Util.obterObjeto('listaCartao');

        //relatorios
        var listaAuxRelatorio = Util.obterObjeto('listaRelatorio');
        var listaAuxRelatorioCartao = Util.obterObjeto('listaRelatorioCartao');
        var listaAuxRelatorioCategoria = Util.obterObjeto('listaRelatorioCategoria');

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

        iniciar();

        $scope.tabAtual = 'cartao';

        $scope.categoriaAtual = 'todos';

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
    }

    $scope.mudancaTab = function(tabDeMudanca){
        $scope.tabAtual = tabDeMudanca;
    }

    $scope.mudancaCategoria = function(categoria, cor){
        $scope.categoriaAtual = categoria;
        $scope.corAtual = cor;
    }

    $scope.desfazerMudancaCategoria = function(categoria, cor){
        if($scope.categoriaAtual == categoria){
            $scope.categoriaAtual = 'todos';
        }
        $scope.categoriaAtual = categoria;
        $scope.corAtual = cor;
    }
})