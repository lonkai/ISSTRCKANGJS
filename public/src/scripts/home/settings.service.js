(function (angular) {
    'use strict';

    angular
        .module('issueTrackerApp')
        .service('settingsService', settingsService);

    settingsService.$inject = ['$uibModal', '$log'];

    function settingsService($uibModal, $log) {
        function modalWindow () {};

        modalWindow.create = function (colorScheme, status, scheme) {
            return $uibModal.open({
                animation: true,
                templateUrl: './src/templates/modal-settings.htm',
                controller:  'SettingsCtrl',
                controllerAs: 'ModalCtrl',
                resolve: {
                    colorScheme: function () {
                        return colorScheme;
                    },
                    status: function () {
                        return status;
                    },
                    scheme: function () {
                        return scheme;
                    }

                },
                backdrop: 'static'
            });

        };

        return modalWindow;
    }
})(angular);