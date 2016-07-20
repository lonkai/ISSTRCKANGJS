(function (angular) {
    'use strict';

    angular
        .module('issueTrackerApp')
        .service('dialogService', dialogService);

    dialogService.$inject = ['$uibModal', '$log'];

    function dialogService($uibModal, $log) {

        function modalWindow () {};

        modalWindow.create = function (param) {
            return $uibModal.open({
                animation: true,
                templateUrl: './src/templates/modal-dialog.htm',
                controller:  'DialogCtrl',
                controllerAs: 'ModalCtrl',
                keyboard: false,
                backdrop: 'static',
                size: 'sm',
                resolve: {
                    param: function () {
                        return param;
                    }
                }
            });
        };

        return modalWindow;
    }
})(angular);