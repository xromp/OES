angular.module('oesapp.exam',['ngRoute'])
.controller('examCtrl',['$scope', 'examSrvcs','$http', function ($scope, examSrvcs,$http) {
  examSrvcs.get()
  .success( function(response){
    if (response.status == 'success') {
      $scope.personList = response.data;
    }
  });
  
}])
.factory('examSrvcs', ['$http', function ($http) {
  return {
    save : function(data) {
      return  $http({
        method: 'POST',
        url: 'http://localhost:8001/user/',
        data: data,
        headers: { 
          'Authorization': 'Basic dGVzdDp0ZXN0',
          'Content-Type': 'application/json'}
      })
    },
    get : function(data) {
      return  $http({
        method: 'GET',
        url: 'http://localhost:8001/user/',
        data: data,
        headers: { 
          'Authorization': 'Basic dGVzdDp0ZXN0',
          'Content-Type': 'application/json'}
      })
    },
  }
}]);