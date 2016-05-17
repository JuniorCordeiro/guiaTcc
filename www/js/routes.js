angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.home', {
    url: '/Home - page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.regulamento', {
    url: '/Regulamento - page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/regulamento.html',
        controller: 'regulamentoCtrl'
      }
    }
  })

  .state('menu.modeloFSico', {
    url: '/Modelo Físico - page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/modeloFSico.html',
        controller: 'modeloFSicoCtrl'
      }
    }
  })

  .state('menu.desenvolvimento', {
    url: '/Desenvolvimento - page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/desenvolvimento.html',
        controller: 'desenvolvimentoCtrl'
      }
    }
  })

  .state('menu.downloads', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/downloads.html',
        controller: 'downloadsCtrl'
      }
    }
  })

  .state('menu.referNcias', {
    url: '/Referências - page9',
    views: {
      'side-menu21': {
        templateUrl: 'templates/referNcias.html',
        controller: 'referNciasCtrl'
      }
    }
  })

  .state('menu.sobre', {
    url: '/Sobre - page16',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sobre.html',
        controller: 'sobreCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('login', {
    url: '/page4',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('cadastro', {
    url: '/page5',
    templateUrl: 'templates/cadastro.html',
    controller: 'cadastroCtrl'
  })

  .state('menu.capTuloI', {
    url: '/Capitulo I - page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/capTuloI.html',
        controller: 'capTuloICtrl'
      }
    }
  })

  .state('menu.capTuloII', {
    url: '/Capítulo II - page11',
    views: {
      'side-menu21': {
        templateUrl: 'templates/capTuloII.html',
        controller: 'capTuloIICtrl'
      }
    }
  })

  .state('menu.capTuloIII', {
    url: '/Capítulo III - page12',
    views: {
      'side-menu21': {
        templateUrl: 'templates/capTuloIII.html',
        controller: 'capTuloIIICtrl'
      }
    }
  })

  .state('menu.capTuloIV', {
    url: '/Capítulo IV - page13',
    views: {
      'side-menu21': {
        templateUrl: 'templates/capTuloIV.html',
        controller: 'capTuloIVCtrl'
      }
    }
  })

  .state('menu.capTuloV', {
    url: '/Capítulo V - page14',
    views: {
      'side-menu21': {
        templateUrl: 'templates/capTuloV.html',
        controller: 'capTuloVCtrl'
      }
    }
  })

  .state('menu.capTuloVI', {
    url: '/Capítulo VI - page15',
    views: {
      'side-menu21': {
        templateUrl: 'templates/capTuloVI.html',
        controller: 'capTuloVICtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page4')

  

});