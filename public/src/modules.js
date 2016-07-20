(function (angular) {
    'use strict';

    angular.module('issueTrackerApp', [
        // directives
        'issueTrackerApp.nav-menu',

        // services
        'issueTrackerApp.issues-service',
        'issueTrackerApp.issuesEdit-service',
        'issueTrackerApp.issuesAdd-service',
        'issueTrackerApp.commentsAdd-service',
        // libs
        'ui.bootstrap'
    ]);
})(angular);
