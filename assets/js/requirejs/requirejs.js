requirejs.config({
  // appUrl: '/',
  baseUrl: '/',
  paths: {
    'jquery': '/assets/lib/jquery/jquery.min',
    'jquery-migrate': '/assets/plugins/jquery-migrate-1.2.1.min',
    // 'jquery-ui': '/assets/plugins/jquery-ui/jquery-ui-1.10.3.custom.min',
    'jquery-custom': '/assets/js/custom/custom.min',
    'bootstrap': '/assets/js/bootstrap/bootstrap.min',
    'ui-bootstrap': '/assets/js/bootstrap/ui-bootstrap-tpls-2.4.0.min',
    
    'response': '',
    'excanvas': '',
    
    // jQuery plugins
    'jquery.slimscroll': '/assets/plugins/jquery-slimscroll/jquery.slimscroll.min',
    'jquery.blockui': '/assets/plugins/jquery.blockui.min',
    'jquery.cookie': '/assets/plugins/jquery.cokie.min',
    'jquery.uniform': '/assets/plugins/uniform/jquery.uniform.min',
    'jquery.back-to-top': '/assets/plugins/back-to-top',
    'jquery.select2': '/assets/plugins/select2/select2.min',
    'jquery.fullcalendar': '/assets/plugins/fullcalendar/fullcalendar/fullcalendar.min',
    'jquery.inputmask': '/assets/plugins/jquery-inputmask/jquery.inputmask.bundle.min',
    'datatables': '/assets/plugins/data-tables/jquery.dataTables.min',
    
    // save to csv
    'ng-csv': '/lib/ng-csv',
    'angular-sanitize': '/lib/angular-sanitize',
    
    // ChartJS
    'globalize': '/lib/chartjs/globalize.min',
    'chartjs': '/lib/chartjs/dx.chartjs',
    
    // Map angular
    'ng-map': '/directives/ng-map.min',
    
    // Boostrap plugins
    'bootstrap.hover-dropdown': '/assets/plugins/bootstrap-hover-dropdown/bootstrap-hover-dropdown.min',
    
    // Theme apps
    'theme-app': '/assets/scripts/core/app',
    
    // AngularJS
    'angular': 'assets/lib/angular/angular.min',
    'angular-animate': 'assets/lib/angular/angular-animate.min.1.2.1',
    'angular-route': 'assets/lib/angular/angular-route.min',
    'angular-resource': 'assets/lib/angular/angular-resource.min',
    
    // AngularJS plugins
    'ui.bootstrap': '/lib/ui-bootstrap-tpls-0.10.0.min',
    // 'ui.bootstrap': '/lib/ui-bootstrap-tpls-0.10.0',
    'ui.select2': '/lib/ui-select2',
    'ui.fullcalendar': '/lib/ui-calendar',
    'ng.datatables': '/lib/datatables/angular-datatables',
    'ng.datatables.bootstrap': '/lib/datatables/plugins/bootstrap/angular-datatables.bootstrap.min',
    
    // AngularJS file upload
    // 'ng.fileupload.shim': '/lib/angular-file-upload/angular-file-upload-shim.min',
    // 'ng.fileupload': '/lib/angular-file-upload/angular-file-upload.min',
    'jquery.fileupload': '/lib/fileupload/jquery.fileupload',
    'jquery.fileupload-process': '/lib/fileupload/jquery.fileupload-process',
    'jquery.fileupload-angular': '/lib/fileupload/jquery.fileupload-angular',
    'jquery.iframe-transport': '/lib/fileupload/jquery.iframe-transport'
  },
  shim: {
    'jquery': {
      exports: '$'
    },
    'jquery-migrate': {
      deps: ['jquery']
    },
    'jquery-ui': {
      deps: ['jquery']
    },
    'bootstrap': {
      // deps: ['jquery', 'jquery-ui']
      deps: ['jquery']
    },
    
    // Theme App
    'theme-app': {
      deps: ['jquery', 'bootstrap']
    },
    'jquery.slimscroll': {
      deps: ['jquery']
    },
    'jquery.blockui': {
      deps: ['jquery']
    },
    'jquery.cookie': {
      deps: ['jquery']
    },
    'jquery.uniform': {
      deps: ['jquery']
    },
    'jquery.back-to-top': {
      deps: ['jquery']
    },
    'jquery.select2': {
      deps: ['jquery']
    },
    'jquery.fullcalendar': {
      deps: ['jquery']
    },
    
    // csv    
    'angular-sanitize': {
      deps: ['jquery', 'angular']
    },
    'ng-csv': {
      deps: ['jquery', 'angular', 'angular-sanitize']
    },
    
    // ChartJS
    'globalize': {
      deps: ['jquery']
    },
    'chartjs': {
      deps: ['jquery', 'angular', 'globalize']
    },
    'ng-map': {
      deps: ['jquery', 'angular']
    },
    
    // AngularJS
    'angular': {
      exports: 'angular',
      deps: ['jquery']
    },
    'angular-animate': {
      deps: ['angular']
    },
    'angular-route': {
      deps: ['angular']
    },
    'angular-resource': {
      deps: ['angular']
    },
    
    // AngularJS plugins
    'ui.bootstrap': {
      deps: ['angular']
    },
    'ui.select2': {
      deps: ['angular', 'jquery.select2']
    },
    'ui.fullcalendar': {
      deps: ['angular', 'jquery.fullcalendar']
    },
    // 'ng.fileupload': {
      // deps: ['ng.fileupload.shim', 'angular']
    // }
    'jquery.fileupload': {
      deps: ['jquery-ui']
    },
    'jquery.fileupload-process': {
      deps: ['jquery.fileupload']
    },
    'jquery.fileupload-angular': {
      deps: ['angular', 'jquery.fileupload', 'jquery.fileupload-process']
    },
    'jquery.iframe-transport': {
      deps: ['jquery.fileupload-angular']
    },
    'datatables': {
      deps: ['jquery']
    },
    'ng.datatables': {
      deps: ['angular', 'datatables']
    },
    'ng.datatables.bootstrap': {
      deps: ['ng.datatables']
    }
  },
  waitSeconds: 0
  // ,
  // urlArgs: '_' + Date.now()
});