(function (angular) {
    'use strict';

    angular
        .module('issueTrackerApp')
        .service('helpService', helpService);

    helpService.$inject = ['$uibModal', '$log'];

    function helpService($uibModal, $log) {
        function modalWindow () {};

        modalWindow.create = function (poll, count, log) {
            return $uibModal.open({
                animation: true,
                templateUrl: './src/templates/modal-help.htm',
                controller:  'HelpCtrl',
                controllerAs: 'ModalCtrl',
                resolve: {
                    poll: function () {
                        return poll;
                    },
                    count: function () {
                        return count;
                    },
                    log: function () {
                        return log;
                    }
                }
            });

        };

        return modalWindow;
    }
})(angular);