(function (angular) {
    'use strict';

    angular
        .module('issueTrackerApp.issuesEdit-service')
        .service('issueEditService', issueEditService);

    issueEditService.$inject = ['$uibModal', '$log'];

    function issueEditService($uibModal, $log) {

        var modalWindow = {};

        modalWindow.create = function (issue, priorities, stasuses) {

            return $uibModal.open({
                animation: true,
                templateUrl: './src/templates/modal-content.htm',
                controller:  'ModalEditCtrl',
                controllerAs: 'ModalCtrl',
                resolve: {
                    issue: function () {
                        return angular.copy(issue);
                    },

                    priorities: function () {
                        return priorities;
                    },
                    stasuses: function () {
                        return stasuses;
                    }
                },
                backdrop: 'static'
            });

        };

        return modalWindow;
    }
})(angular);
