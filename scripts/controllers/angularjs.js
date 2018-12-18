    angular.module('todoListApp')
        .controller('angularJs', function($scope) {



            $scope.phones = [{
                name: 'Nexus S',
                snippet: 'Fast just got faster with Nexus S.'
            }, {
                name: 'Motorola XOOM™ with Wi-Fi',
                snippet: 'The Next, Next Generation tablet.'
            }, {
                name: 'MOTOROLA XOOM™',
                snippet: 'The Next, Next Generation tablet.'
            }];

            $scope.addItem = function() {
       
                    $scope.phones.push({
                        name: 'One Plus',
                        snippet: 'Never Settle'
                    });
                },

                $scope.removeItem = function(index) {
                    $scope.phones.splice(index, 1);
                }
            $scope.open = false;

        });