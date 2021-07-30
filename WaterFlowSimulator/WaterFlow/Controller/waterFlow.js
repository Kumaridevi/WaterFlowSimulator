angular.module('waterFlow.waterFlow',
    ['ngMaterial', 'ngMessages', 'ui.router', 'ngMdIcons', 'ngAnimate', 'material.svgAssetsCache'
    ])
    .controller('waterFlowCtrl', function ($scope, $rootScope, $window, $state, $http) {
      
            rn = localStorage.getItem("rows");
            cn = localStorage.getItem("columns");
        on = localStorage.getItem("obstructions");

        for (var r = 0; r < parseInt(1, 10); r++) {
           
            var x = document.getElementById('myTableDef').insertRow(r);
            for (var c = 0; c < parseInt(cn, 10); c++) {
                var y = x.insertCell(c);
                y.innerHTML = "Row-" + r + " Column-" + c;
            }
        }

            for (var r = 0; r < parseInt(rn, 10); r++) {
                var x = document.getElementById('myTable').insertRow(r);
                for (var c = 0; c < parseInt(cn, 10); c++) {
                    var y = x.insertCell(c);
                    y.innerHTML = "Row-" + r + " Column-" + c;
                }
            }
        
      

        max_columns = 2;
        count = 0;
        for (var i = 0; i < on; i++) {
            var content = 'column';
            if (count == max_columns || !$('#maintable tr').length) {
                $("#maintable").append("<tr>");
                count = 0;
            }
            if (count != max_columns)
                $("#maintable tr:last").append("<td>" + content + "</td>");
            else
                $("#maintable tr:first").append("<td>" + content + "</td>");
            count++;
        }

        $scope.obstruct = [];
        for (var i = 0; i < on; i++) {
            $scope.obstruct.push(i);
        }
        debugger;
        console.log($scope.obstruct);
        $(function () {
            $("span").draggable();
            $("td").droppable({
                drop: function (event, ui) {
                    $this = $(this);
                    $span = $(ui.draggable);
                    $this
                        .addClass("ui-state-highlight")
                        .text($span.html());

                    $span.remove();
                }
            });
        });
    });