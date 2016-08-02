class ModalAddCtrl {

    constructor($scope, $uibModalInstance, $log, id, priorities, stasuses) {
        var vm = this;
        var today = new Date();
        var month = today.getMonth() + 1;

        vm.issueList = {
            id: '', status: {id: 1, name: 'new'}, summary: '', priority: {id: 1},
            lastupdated: today.getDate() + '.' + month + '.' + today.getFullYear(), assignedto: '', opened: true
        };

        vm.priorities = priorities;
        vm.stasuses = stasuses;
        vm.issueList.id = id;

        vm.ok = function () {
            $uibModalInstance.close(vm.issueList);
        };

        vm.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
        vm.add = true;

    };
}

ModalAddCtrl.$inject = ['$scope', '$uibModalInstance', '$log', 'id', 'priorities', 'stasuses'];
export {ModalAddCtrl}