    angular.module('todoListApp')
        .controller('CanvasCtrl', function($scope) {
            var c = document.getElementById("myCanvas");
            var ctx = c.getContext("2d");
            ctx.beginPath();
            ctx.arc(100, 75, 70, 0, 2 * Math.PI);
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(100, 75, 50, 0.5, 0.85 * Math.PI);
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(65, 45, 10, 0, 2 * Math.PI);
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(130, 45, 10, 0, 2 * Math.PI);
            ctx.stroke();
        });