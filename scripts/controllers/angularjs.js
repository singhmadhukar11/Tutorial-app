    angular.module('todoListApp')
        .controller('angularJs', function($scope) {
            // $scope.phones = [{
            //     name: 'Nexus S',
            //     snippet: 'Fast just got faster with Nexus S.'
            // }, {
            //     name: 'Motorola XOOM™ with Wi-Fi',
            //     snippet: 'The Next, Next Generation tablet.'
            // }, {
            //     name: 'MOTOROLA XOOM™',
            //     snippet: 'The Next, Next Generation tablet.'
            // }];
            $scope.phonesmob = [];
            $scope.addItem = function(data) {

                    $scope.phonesmob.push({
                        name: data.name,
                        snippet: data.snippet
                    });
                },

                $scope.removeItem = function(index) {
                    $scope.phonesmob.splice(index, 1);
                }
            $scope.open = false;

        });