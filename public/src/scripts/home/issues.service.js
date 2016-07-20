(function (angular) {
    'use strict';

    angular
        .module('issueTrackerApp.issues-service')
        .service('issuesService', issuesService);

    issuesService.$inject = ['$q'];

    function issuesService($q) {
        var list = [
            {
                id: 1, status: {id: 1}, summary: 'blablablabla', priority: {id: 1},
                lastupdated: '23.12.2001', assignedto: ''
            },
            {
                id: 2, status: {id: 3}, summary: 'blablablabla', priority: {id: 2},
                lastupdated: '23.12.2001', assignedto: 'ipidvir'
            },
            {
                id: 3, status: {id: 3}, summary: 'blablablabla', priority: {id: 2},
                lastupdated: '23.12.2001', assignedto: 'yvasyl'
            },
            {
                id: 4, status: {id: 2}, summary: 'blablablabla', priority: {id: 1},
                lastupdated: '23.12.2001', assignedto: 'ipavl'
            },
            {
                id: 5, status: {id: 3}, summary: 'blablablabla', priority: {id: 2},
                lastupdated: '23.12.2001', assignedto: 'ipidvir'
            },
            {
                id: 6, status: {id: 3}, summary: 'blablablabla', priority: {id: 3},
                lastupdated: '23.12.2001', assignedto: ''
            },
            {
                id: 7, status: {id: 2}, summary: 'blablablabla', priority: {id: 3},
                lastupdated: '23.12.2001', assignedto: 'ipidvir'
            },
            {
                id: 8, status: {id: 3}, summary: 'blablablabla', priority: {id: 3},
                lastupdated: '23.12.2001', assignedto: 'ipavl'
            },
            {
                id: 9, status: {id: 3}, summary: 'blablablabla', priority: {id: 1},
                lastupdated: '23.12.2001', assignedto: 'ipidvir'
            },
            {
                id: 10, status: {id: 2}, summary: 'blablablabla', priority: {id: 1},
                lastupdated: '23.12.2001', assignedto: 'yvasyl'
            }
        ];

        function issuesServiceClass() {}

        issuesServiceClass.getAllIssues = function () {
            // var defer = $q.defer();
            //
            // setTimeout(function () {
            //     defer.resolve(list);
            // }, 10000);
            //
            // return defer.promise;

            return $q.when(list);
        };

        return issuesServiceClass;
    }
})(angular);
