var app = angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'angular.filter', 'ngAnimate', 'ui.utils.masks', 'ngTouch'])
  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
        alert('foi fora');
        cordova.plugins.Keyboard.shrinkView(true, () => {
          alert('foi cord');
        });
        Keyboard.shrinkView(true, () => {
          alert('foi');
        });
      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleLightContent();
      }
    });
  })


  .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    $ionicConfigProvider.views.maxCache(0);
    $stateProvider.state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html'
    })

      .state('tab.lista-item', {
        url: '/lista-item',
        views: {
          'tab-lista-item': {
            templateUrl: 'templates/lista-item.html',
            controller: 'listaItemCtrl'
          }
        }
      })

      .state('add-item', {
        url: '/add-item',
        templateUrl: 'templates/add-item.html',
        controller: 'addItemCtrl'
      })

      .state('add-cartao', {
        url: '/add-cartao',
        templateUrl: 'templates/add-cartao.html',
        controller: 'addCartaoCtrl'
      })


      .state('tutorial', {
        url: '/tutorial',
        templateUrl: 'templates/tutorial.html',
        controller: 'tutorialCtrl'
      })

      .state('tab.estatisticas', {
        url: '/estatisticas',
        views: {
          'tab-estatisticas': {
            templateUrl: 'templates/estatisticas.html',
            controller: 'statsCtrl'
          }
        }
      })

      .state('listaRelatorios', {
        url: '/listaRelatorios',
        templateUrl: 'templates/listaRelatorios.html',
        controller: 'listaRelatorioCtrl'
      })

      .state('Relatorios', {
        url: '/Relatorios/:guid',
        templateUrl: 'templates/relatorioIndividual.html',
        controller: 'relatorioCtrl'
      })

      .state('tab.cartao', {
        url: '/cartao',
        views: {
          'tab-cartao': {
            templateUrl: 'templates/cartao.html',
            controller: 'cartaoCtrl'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/lista-item');

  });
