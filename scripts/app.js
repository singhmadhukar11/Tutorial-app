agGrid.initialiseAgGridWithAngular1(angular);
angular.module("todoListApp", ['ui.router', 'ngMaterial', 'leaflet-directive', 'md.data.table', 'highcharts-ng', 'agGrid'])
.config(function($stateProvider, $urlRouterProvider, $locationProvider, $mdThemingProvider) {

        $urlRouterProvider.otherwise("/App");

        $stateProvider
            .state("Dashboard", {
                url: "/App",
                templateUrl: "template/dashboard.html",
                controller: "TutorialCtrl"
            })
            .state("Canvas", {
                url: "/App",
                templateUrl: "template/canvas.html",
                controller: "CanvasCtrl"
            })
            .state("Grid", {
                url: "/App",
                templateUrl: "template/grid.html",
                controller: "GridCtrl"
            })
            .state("Map", {
                url: "/App",
                templateUrl: "template/Map.html",
                controller: "MapCtrl"
            });

            
    })