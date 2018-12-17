angular.module('todoListApp')
    .directive('todos', function () {
        return {
            templateUrl: 'template/todos.html',
            controller: 'mainCtrl',
            replace: true
        }
    })
