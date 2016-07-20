(function (angular) {
    'use strict';
    angular
        .module('issueTrackerApp')
        .controller('HelpCtrl', HelpCtrl);

    HelpCtrl.$inject = ['$scope', '$uibModalInstance', '$window', '$log', '$q', '$http', 'poll', 'count', 'log'];

    function HelpCtrl($scope, $uibModalInstance, $window, $log, $q, $http, poll, count, log) {
        var vm = this;
        vm.poll = poll;
        vm.cound = count;
        vm.log = log;

        vm.sendPoll = function () {
            switch (vm.count) {
                case "first":
                {
                    vm.poll.first.value++;
                    vm.poll.people++;
                    vm.log = false;
                }
                    break;
                case "second":
                {
                    vm.poll.second.value++;
                    vm.poll.people++;
                    vm.log = false;
                }
                    break;
                case "third":
                {
                    vm.poll.third.value++;
                    vm.poll.people++;
                    vm.log = false;
                }
                    break;
                case "fourth":
                {
                    vm.ShowConfirm();
                    vm.log = false;
                }
                    break;
                default:
                    return "";
                    break;

            }

            $http.post("./poll", vm.poll).then(function (response) {
            });
        };

        vm.round = function (percent, people) {

            return Math.round(percent * 100 / people);
        };


        vm.ShowConfirm = function () {
            if ($window.confirm("REALLY?!!!")) {
                $window.alert('No vote for ya bitch!');
            } else {
                $window.alert('No vote for ya bitch');
            }
        };

        vm.ok = function () {
        };

        vm.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };

    };
})(angular);