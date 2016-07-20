(function (angular) {
    'use strict';
    angular
        .module('issueTrackerApp')
        .controller('ModalEditCtrl', ModalEditCtrl);

    ModalEditCtrl.$inject = ['$scope', '$uibModalInstance', '$log', 'issuesService', 'issue', 'priorities', 'stasuses'];

    function ModalEditCtrl($scope, $uibModalInstance, $log, issuesService, issue, priorities, stasuses) {

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
})(angular);