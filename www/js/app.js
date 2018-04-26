var app = angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'angular.filter', 'ngAnimate'])
  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
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

      .state('tab.add-item', {
        url: '/add-item',
        views: {
          'tab-add-item': {
            templateUrl: 'templates/add-item.html',
            controller: 'addItemCtrl'
          }
        }
      })

      .state('add-item', {
        url: '/add-item',
        templateUrl: 'templates/add-item.html',
        controller: 'addItemCtrl'
      })

      .state('tab.chat-detail', {
        url: '/chats/:chatId',
        views: {
          'tab-chats': {
            templateUrl: 'templates/chat-detail.html',
            controller: 'ChatDetailCtrl'
          }
        }
      })

      .state('tab.account', {
        url: '/account',
        views: {
          'tab-account': {
            templateUrl: 'templates/tab-account.html',
            controller: 'AccountCtrl'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/lista-item');

  });
