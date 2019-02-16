    angular.module('todoListApp')
        .controller('CanvasCtrl', function($scope,$http) {
            $http.get("https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/5UXWX7C5*BA?format=json&modelyear=2011")
            .then(function(res) {
                $scope.phonesmob = res.data;
                console.log($scope.phonesmob);
            });
        });