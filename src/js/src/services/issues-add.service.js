class issueAddService {

    constructor($uibModal, $log) {

        var modalWindow = {};

        modalWindow.create = function (id, priorities, stasuses) {

            return $uibModal.open({
                animation: true,
                templateUrl: 'templates/modal-content.htm',
                controller: 'ModalAddCtrl',
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
}

issueAddService.$inject = ['$uibModal', '$log'];
export {issueAddService}