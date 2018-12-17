angular.module('todoListApp')
    .controller('MapCtrl', function($scope) {

        angular.extend($scope, {
            center: {
                lat: 22.7196,
                lng: 75.8577,
                zoom: 6
            },
            layers: {
                baselayers: {
                    googleTerrain: {
                        name: 'Google Terrain',
                        layerType: 'TERRAIN',
                        type: 'google'
                    },
                    googleHybrid: {
                        name: 'Google Hybrid',
                        layerType: 'HYBRID',
                        type: 'google'
                    },
                    googleRoadmap: {
                        name: 'Google Streets',
                        layerType: 'ROADMAP',
                        type: 'google'
                    }
                }
            },
            defaults: {
                scrollWheelZoom: false
            }
        })

        $scope._map = null;
        $scope.addLayer = function(item) {
                leafletData.getMap(this.mapid).then(function(currentMap) {
                    if (that._layer) {
                        that.removeLayer
                    }
                    that._map = currentMap;
                    that._stage = currentMap.easelCanvas._stage;
                    that._layer = currentMap.easelCanvas._layer;
                    that._pixelRatio = currentMap.easelCanvas._pixelRatio;
                });
            };
        // var canvas = document.getElementById("testCanvas");
        // var stage = new createjs.Stage(canvas);

        // function drawRectangle() {
        //     var rect = new createjs.Shape();
        //     rect.graphics.beginFill("#000").drawRect(10, 10, 100, 100);
        //     stage.addChild(rect);
        // }

        // function drawShapes() {
        //     drawRectangle();
        //     stage.update();
        // }
        // drawShapes();
    });