app.controller('listaItemCtrl', function ($scope, Util, $ionicModal) {
    $scope.lista = [];
    $scope.listaFixa = [];

    $scope.shouldShowDelete = false;
    $scope.shouldShowReorder = false;
    $scope.listCanSwipe = true

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

    $scope.fixarItem = function(item, from, to) {
        var idx=from.indexOf(item);
        if (idx != -1) {
            from.splice(idx, 1);
            to.unshift(item);     
        }
        Util.salvarObjeto('ItensDaListaFixa', $scope.listaFixa);
        Util.salvarObjeto('ItensDaLista', $scope.lista);
    };

    $scope.desfixarItem = function(item, from, to) {
        var idx=from.indexOf(item);
        if (idx != -1) {
            from.splice(idx, 1);
            to.push(item);      
        }
        Util.salvarObjeto('ItensDaListaFixa', $scope.listaFixa);
        Util.salvarObjeto('ItensDaLista', $scope.lista);
    };

    $scope.atualizarLista = function () {
        setTimeout(function () {
            location.reload();
        }, 1500);
    }

    $scope.sum = function() {
        var total = 0;
        var totalLista = 0;
        var totalListaFixa = 0;
        angular.forEach($scope.lista, function(key, value) {
            totalLista += key.preco;
        });
        angular.forEach($scope.listaFixa, function(key, value) {
            totalListaFixa += key.preco;
        });
        total = totalLista + totalListaFixa;
        return "R$"+total.toFixed(2);
      }

    $scope.deleteItem = function (index) {
        $scope.lista.splice(index, 1);
        Util.salvarObjeto('ItensDaLista', $scope.lista);
    }

    $scope.deleteItemFixado = function (index) {
        $scope.listaFixa.splice(index, 1);
        Util.salvarObjeto('ItensDaListaFixa', $scope.listaFixa);
    }
    // $(document).ready(function () {
    //     $('.card-item').click(function () {
    //         $('#comentario').toggleClass('comentarioHeight');
    //     });
    // });

    $ionicModal.fromTemplateUrl('my-modal.html', {
        scope: $scope,
        animation: 'slide-in-right'
      }).then(function(modal) {
        $scope.modal = modal;
      });
      $scope.openModal = function() {
        $scope.modal.show();
      };
      $scope.closeModal = function() {
        $scope.modal.hide();
      };
})