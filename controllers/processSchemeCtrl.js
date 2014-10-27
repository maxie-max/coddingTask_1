(function(angular) {
var processSchemeCtrl = function ($scope, datasourceService) {
    var dataProm = datasourceService.getResource('data.json');
    dataProm.then(function (res) {
        $scope.buildprocessSchemeData(res.data);
    });
    $scope.buildprocessSchemeData = function (data) {
        $scope.processSchemeObj = {
            data: [],
            transitions: []
        };
        var names = data.names;
        for (key in names) {
            var item = {};
            item[key] = {
                name: names[key]
            };
            $scope.processSchemeObj.data.push({
                id: key,
                name: names[key]
            });
        }
        var positions = data.positions;
        for (var i = 0; i < $scope.processSchemeObj.data.length; ++i) {
            var id = $scope.processSchemeObj.data[i].id;
            angular.extend($scope.processSchemeObj.data[i], positions[id]);
        }
        var transitions = data.transitions;
        for (key in transitions) {
            var transition = transitions[key].split(',');
            for (var i = 0; i < transition.length; ++i) {
                var item = {
                    source: key,
                    target: transition[i]
                };
                $scope.processSchemeObj.transitions.push(item);
            }
        }
    }
}
angular.module('schemesApp').controller('processSchemeCtrl', ['$scope', 'datasourceService', processSchemeCtrl])
})(angular);