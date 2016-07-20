(function (angular) {
    'use strict';
    angular
        .module('issueTrackerApp')
        .controller('SettingsCtrl', SettingsCtrl);

    SettingsCtrl.$inject = ['$scope', '$uibModalInstance', '$log', 'colorScheme', 'status', 'scheme'];

    function SettingsCtrl($scope, $uibModalInstance, $log, colorScheme, status, scheme) {
        var vm = this;
        vm.colorScheme = colorScheme;
        vm.statuses = status;
        vm.scheme = scheme;

        vm.setClass = function (status) {

            switch (status.id) {
                case 1:
                    switch (vm.scheme) {
                        case "first":
                            return "danger";
                            break;
                        case "second":
                            return "info";
                            break;
                        default:
                            return "success";
                            break;
                    }
                    break;

                case 2:
                    switch (vm.scheme) {
                        case "first":
                            return "info";
                            break;
                        case "second":
                            return "success";
                            break;
                        default:
                            return "danger";
                            break;
                    }
                    break;

                case 3:
                    switch (vm.scheme) {
                        case "first":
                            return "success";
                            break;
                        case "second":
                            return "danger";
                            break;
                        default:
                            return "info";
                            break;
                    }
                    break;

                default:
                    return "";
                    break;

            }
        };
        
        vm.ok = function () {
            $uibModalInstance.close(vm.scheme);

        };

        vm.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };

    };
})(angular);