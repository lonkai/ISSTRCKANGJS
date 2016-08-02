class ModalEditCtrl {

    constructor($scope, $uibModalInstance, $log, issue, priorities, stasuses) {

        var vm = this;

        vm.issueList = issue;
        vm.priorities = priorities;
        vm.stasuses = stasuses;

        vm.ok = function () {
            $uibModalInstance.close(vm.issueList);
        };

        vm.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };

        vm.delete = function () {
            $uibModalInstance.close(null);
        };

        vm.edit = true;
    };
}

ModalEditCtrl.$inject = ['$scope', '$uibModalInstance', '$log', 'issue', 'priorities', 'stasuses'];
export {ModalEditCtrl}