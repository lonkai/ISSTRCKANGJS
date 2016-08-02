class settingsService {

    constructor($uibModal, $log) {
        
        var modalWindow = {};

        modalWindow.create = function (colorScheme, status, scheme) {
            return $uibModal.open({
                animation: true,
                templateUrl: 'templates/modal-settings.htm',
                controller: 'SettingsCtrl',
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
}
settingsService.$inject = ['$uibModal', '$log'];
export {settingsService}