angular.module('todoListApp')
    .controller('TutorialCtrl', function($scope, $http, $state) {
        vm = this;

        var columnDefs = [
            { headerName: "Athlete", field: "athlete", width: 150 },
            { headerName: "Age", field: "age", width: 90 },
            { headerName: "Country", field: "country", width: 120 },
            { headerName: "Year", field: "year", width: 150 },
            { headerName: "Date", field: "date", width: 110 },
            { headerName: "Sport", field: "sport", width: 110 },
            { headerName: "Gold", field: "gold", width: 100 },
            { headerName: "Silver", field: "silver", width: 100 },
            // { headerName: "Bronze", field: "bronze", width: 100 },
            { headerName: "", field: "bronze", width: 150, cellRenderer: ageCellRendererFunc },
        ];

        $scope.gridOptions = {
            columnDefs: columnDefs,
            rowData: null,
            angularCompileRows: true,
            rowSelection: 'single',
            suppressCellSelection: true
        };

        // function ageCellRendererFunc(params) {
        //           var template = '<md-menu md-position-mode="target-right target">' +
        //               '<md-button class="md-icon-button" aria-label="Actions" ng-click="vm.openTableMenu($mdOpenMenu, $event)">' +
        //               '<md-icon aria-label="Actions" class="zmdi zmdi-more-vert zmdi-hc-lg"></md-icon>' +
        //               '</md-button>' +
        //               '<md-menu-content class="padding-0">' +
        //               '<md-menu-item ng-click="vm.onRowClicked(data);">' +
        //               '<md-button>{{"View" | translate}}</md-button>' +
        //               '</md-menu-item>' +
        //               '</md-menu-content>' +
        //               '</md-menu>';
        //           return template;
        //       }

        function ageCellRendererFunc(params) {
            params.$scope.ageClicked = ageClicked;
            return '<button ng-click="ageClicked(data.bronze)" ng-bind="data.bronze"></button>';
        }

        vm.openTableMenu = function($mdOpenMenu, ev) {
            $mdOpenMenu(ev);
        };

        function ageClicked(bronze) {
            alert("bronze Value is " + bronze)
        }

        $http.get("https://raw.githubusercontent.com/ag-grid/ag-grid-docs/master/src/olympicWinners.json")
            .then(function(res) {
                $scope.gridOptions.api.setRowData(res.data);
            });
        $scope.grid = function() {
            $state.go('Grid');
        };

        $scope.canvas = function() {
            $state.go('Canvas');
        };
        $scope.map = function() {
            $state.go('Map');
        };
        $scope.angularjs = function() {
            $state.go('Angularjs');
        };

    });