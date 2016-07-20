(function (angular) {
    'use strict';
    angular
        .module('issueTrackerApp')
        .controller('DialogCtrl', DialogCtrl);

    DialogCtrl.$inject = ['$scope', '$uibModalInstance', '$log', 'param'];

    function DialogCtrl($scope, $uibModalInstance, $log, param) {
        var vm = this;

        vm.param = param;

        if (vm.param == 'c') {
            vm.change = true;
            vm.delete = false;
        }
        else if (vm.param == 'd') {
            vm.delete = true;
            vm.change = false;
        }

        vm.result = 'ok';

        vm.ok = function () {
            $uibModalInstance.close(vm.result);
        };

        vm.cancel = function () {
            $uibModalInstance.close(null);
        };

    };
})(angular);