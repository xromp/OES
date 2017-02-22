angular.module('oesapp.exam',['ngRoute'])
.controller('examCtrl',['$scope', 'examSrvcs','$http', function ($scope, examSrvcs,$http) {
  examSrvcs.get()
  .success( function(response){
    if (response.status == 'success') {
      $scope.personList = response.data;
    }
  });

  // $scope.submit = function (data){
  //   var dataCopy = angular.toJson(data);
  //   examSrvcs.save(dataCopy)
  //   .success( function(response){
  //     if (response.status == 'success') {
  //       alert('success!');
  //     }
  //   });
  // };
  $scope.data = [
    {'id':1,'name':'rom','selected':0},
    {'id':2,'name':'son','selected':0},
    {'id':3,'name':'bry','selected':0},
    {'id':4,'name':'bry1','selected':0},
    {'id':5,'name':'bry2','selected':0}
  ];
  $scope.items = [
    {'data':$scope.data,'itemid':1,'pick':''},
    {'data':$scope.data,'itemid':2,'pick':''},
    {'data':$scope.data,'itemid':3,'pick':''}
  ];
  $scope.$watch('items', function (newValue, oldValue){
    var items = newValue;
    if (items) {
      var pickList = [];
      angular.forEach(items, function (v,k){
        pickList.push({'pick':v.pick,'itemid':v.itemid});
      });
      angular.forEach(items, function (v,k){
        angular.forEach(v.data, function (v1,k1) {
          v1.selected = 0;
        });
      });
      angular.forEach(pickList, function (v,k) {
        angular.forEach(items, function (v1,k1) {
          if (v1.itemid != v.itemid) {
            angular.forEach(v1.data, function (v2,k2) {
              if (v.pick == v2.id) {
                v2.selected = 1;
              }
            });
          }
        });
      });
      // angular.forEach (items, function (v,k){
      //   angular.forEach(pickList, function (v1,k1){
      //     if (v.pick == v1.pick && v.itemid != v1.itemid) {
      //       angular.forEach(v.data, function (v2,k2) {
      //         if (v1.pick == v2.id) {
      //           v2.selected = 1;
      //         } else {
      //           v2.selected = 0;
      //         }
      //       });
      //     }
      //   });
      // });
    }
  },true);

  $scope.submit = function (data) {
    var pick = [];
    angular.forEach (data, function (v,k ){
      pick.push({"itemid":v.pick});
    });
    
  };

  $scope.selectedFilter = function (datum){
    return datum.selected == 0;
  };
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