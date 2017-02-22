angular.module('oesapp',['ngAnimate',
  'ngRoute',
  'oesapp.exam',
  'sidebarApp']);
require(['assets/js/requirejs/requirejs'], function () {
  require([
    'jquery',
    'jquery-custom',


    // myHR App here
    // 'myHR.Dashboard',

    // Defaults
  //   'theme-app',
  //   'jquery.slimscroll',
       'bootstrap',
       'ui-bootstrap',
  //   'jquery.cookie',
  //   'jquery.uniform',
  //   'jquery.back-to-top'
  ], function ($, angular, app) {
  });
});