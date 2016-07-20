(function (angular) {
    'use strict';
    
    angular
        .module('issueTrackerApp.nav-menu')
        .directive('navMenu', navMenu);

    function navMenu() {
        return {
            templateUrl: 'src/templates/nav-menu.html'
        };
    }
})(angular);
