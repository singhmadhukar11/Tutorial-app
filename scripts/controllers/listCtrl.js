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
            { headerName: "Bronze", field: "bronze", width: 100 },
            { headerName: "Total", field: "total", width: 100 }
        ];

        $scope.gridOptions = {
            columnDefs: columnDefs,
            rowData: null,
            angularCompileRows: true,
            rowSelection: 'single',
            onRowClicked: function map(event) {
                $state.go('Map');
                console.log('Row Clicked')
            },
        };

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