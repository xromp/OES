'use strict';

angular.module('oesapp')
  .config(['$locationProvider' ,'$routeProvider', function config($locationProvider, $routeProvider) {

    $routeProvider
      .when('/dashboard', {
        templateUrl: 'app/dashboard/dashboard/dashboard-tpl.html'
      })
      .when('/exam', {
        templateUrl: 'app/exam/exam-tpl.html',
        controller:'examCtrl'
      })
    .otherwise('/dashboard');
    //   // 404
    // $locationProvider.html5Mode({
    //   enabled: true,
    //   requireBase: false
    // }).hashPrefix('!');

    }
    ]);