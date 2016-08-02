class issueEditService {

    constructor($uibModal, $log) {

        var modalWindow = {};

        modalWindow.create = function (issue, priorities, stasuses) {

            return $uibModal.open({
                animation: true,
                templateUrl: 'templates/modal-content.htm',
                controller: 'ModalEditCtrl',
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
}

issueEditService.$inject = ['$uibModal', '$log'];
export {issueEditService}
