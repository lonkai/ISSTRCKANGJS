(function (angular) {
    'use strict';

    angular
        .module('issueTrackerApp.issuesAdd-service')
        .service('issueAddService', issueAddService);

    issueAddService.$inject = ['$uibModal', '$log'];

    function issueAddService($uibModal, $log) {
        
        var modalWindow = {};

        modalWindow.create = function (id, priorities, stasuses) {

            return $uibModal.open({
                animation: true,
                templateUrl: './src/templates/modal-content.htm',
                controller:  'ModalAddCtrl',
                controllerAs: 'ModalCtrl',
                resolve: {
                    id: function () {
                        return id;
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