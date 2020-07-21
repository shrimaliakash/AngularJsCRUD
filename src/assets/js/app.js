/**
 * INSPINIA - Responsive Admin Theme
 *
 */
(function () {
    angular.module('inspinia', [
        'ui.router',                    // Routing
        'oc.lazyLoad',                  // ocLazyLoad
        'ui.bootstrap',                 // Ui Bootstrap
        'pascalprecht.translate',       // Angular Translate
        'ngIdle',                       // Idle timer
        'ngSanitize'                    // ngSanitize
    ])
})();


angular.module('VSPLConfApp', ['Flash',function($scope,Flash){
    $scope.showWarning = function(){
        Flash.warning('This is warning message.',{title: 'Warning!'});
    }
    $scope.showError = function(){
        Flash.error('This is error message.',{title: 'Error!'});
    }
    $scope.showSuccess = function(){
        Flash.success('This is success message.',{title: 'Success!'});
    }
    $scope.showInfo = function(){
        Flash.info('This is an info message.',{title: 'Info!'});
    }
}]);

// Other libraries are loaded dynamically in the config.js file using the library ocLazyLoad