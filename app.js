var app = angular.module('waterFlow', ['ngMaterial', 'ngMessages', 'ui.router', 'ngMdIcons', 'ngAnimate', 'material.svgAssetsCache', 'waterFlow.zoomrx', 'waterFlow.selection','waterFlow.waterFlow']);
app.controller('waterFlow', function ($scope, $rootScope, $window, $http, $timeout,$mdDialog) {

});
   app. config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/zoomrx');
        $stateProvider

            .state('zoomrx', {
                url: '/zoomrx',
                views: {
                    content: {
                        templateUrl: 'Home/view/LandingPage.html',
                        controller: 'LandCtrl'
                    }
                }
            })
            .state('zoomrx.selection', {
                url: '/selectionTable',
                views: {
                    'content@': {
                        templateUrl: 'SelectionTable/View/SelectionTable.html',
                        controller: 'SelectionTableCtrl'
                    },
                    result: {

                    }
                }
            })

            .state('zoomrx.selection.waterFlow', {
                url: '/waterFlowSimulator',
                views: {
                    'result@': {
                        templateUrl: 'WaterFlow/View/waterFlow.html',
                        controller: 'waterFlowCtrl'
                    }
                }
            })
   }).config(['$locationProvider', function ($locationProvider) {

       $locationProvider.html5Mode(false).hashPrefix('');

   }]);