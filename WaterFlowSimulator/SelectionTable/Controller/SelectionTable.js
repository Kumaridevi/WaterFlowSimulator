angular.module('waterFlow.selection',
    ['ngMaterial', 'ngMessages', 'ui.router', 'ngMdIcons', 'ngAnimate', 'material.svgAssetsCache'
    ])
    .controller('SelectionTableCtrl', function ($scope, $rootScope, $window, $state, $http) {
        $scope.color = { red: 0, green: 0, black: 0 };
        $scope.checkParams = function () {
            if ($scope.color.red == 0 | $scope.color.green == 0 | $scope.color.black == 0) {
                alert("Please select all values");
            }
            else {
                localStorage.setItem("rows", $scope.color.red);
                localStorage.setItem("columns", $scope.color.green);
                localStorage.setItem("obstructions", $scope.color.black);
                $state.go("zoomrx.selection.waterFlow");
            }
        }
    }); 