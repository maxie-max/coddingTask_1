(function (angular) {
    var datasourceService = function ($http) {
        var baseStoragePath = 'storage/';
        this.getResource = function (name) {
            return $http.get(baseStoragePath + name).success(function(data) {
                return data;
            });
        }
    }
    angular.module('schemesApp').service('datasourceService', ['$http', datasourceService])
}(angular))