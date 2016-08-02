class dialogService {


    constructor($uibModal, $log) {

        var modalWindow = {};

        modalWindow.create = function (param) {
            return $uibModal.open({
                animation: true,
                templateUrl: 'templates/modal-dialog.htm',
                controller: 'DialogCtrl',
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
}

dialogService.$inject = ['$uibModal', '$log'];
export {dialogService}