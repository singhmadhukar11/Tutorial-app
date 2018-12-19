angular.module('todoListApp')
    .controller('TutorialCtrl', function($scope, $http, $state) {
        var columnDefs = [
            { headerName: "Athlete", field: "athlete", width: 150 },
            { headerName: "Age", field: "age", width: 90 },
            { headerName: "Country", field: "country", width: 120 },
            { headerName: "Year", field: "year", width: 90 },
            { headerName: "Date", field: "date", width: 110 },
            { headerName: "Sport", field: "sport", width: 110 },
            { headerName: "Gold", field: "gold", width: 100 },
            { headerName: "Silver", field: "silver", width: 100 },
            // { headerName: "Bronze", field: "bronze", width: 100 },
            { headerName: "Menu", field: "bronze", width: 200, cellRenderer: ageCellRendererFunc },
        ];

        $scope.gridOptions = {
            columnDefs: columnDefs,
            rowData: null,
            angularCompileRows: true,
            rowSelection: 'single',
        };



        function ageCellRendererFunc(params) {
            params.$scope.ageClicked = ageClicked;
            return '<button ng-click="ageClicked(data.bronze)" ng-bind="data.bronze"></button>';
        }

        function ageClicked(bronze) {
            alert(bronze)
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