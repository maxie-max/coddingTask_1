(function(angular) {
var processSchemeDrtv = function($timeout) {
	return {
		templateUrl: 'views/processSchemeView',
		scope: {
            options: '='
		},
		link: function (scope, element, attrs, rectanglesCtrl) {
        $timeout(function() {
            var stateMachineConnector = {				
                connector:"StateMachine",
                paintStyle:{lineWidth:1,strokeStyle:"#228B22"},
                endpoint:"Blank",
                anchor:"Continuous",
                overlays:[ ["PlainArrow", {location:1, width:10, length:8} ]]
            };
            for (var key in scope.options.transitions) {
                jsPlumb.connect(scope.options.transitions[key], stateMachineConnector);
            }
        }, 100);
		}
	}
}
angular.module('schemesApp').directive('processSchemeDrtv', ['$timeout', processSchemeDrtv])
}(angular))