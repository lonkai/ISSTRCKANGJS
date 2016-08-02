class helpService {

    constructor($uibModal, $log) {

        var modalWindow = {};

        modalWindow.create = function (poll, count, log) {
            return $uibModal.open({
                animation: true,
                templateUrl: 'templates/modal-help.htm',
                controller: 'HelpCtrl',
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
}

helpService.$inject = ['$uibModal', '$log'];
export {helpService}