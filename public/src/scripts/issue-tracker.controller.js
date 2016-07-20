(function (angular) {
    'use strict';

    angular
        .module('issueTrackerApp')
        .controller('IssueTrackerCtrl', IssueTrackerCtrl);

    IssueTrackerCtrl.$inject = ['$scope', '$window', '$rootScope', '$uibModal', '$log', '$http', '$q', 'issuesService', 'issueEditService', 'issueAddService', 'commentAddService', 'helpService', 'settingsService', 'dialogService'];

    function IssueTrackerCtrl($scope, $window, $rootScope, $uibModal, $log, $http, $q, issuesService, issueEditService, issueAddService, commentAddService, helpService, settingsService, dialogService) {
        var vm = this;

        vm.searchQuery = '';
        vm.log = true;

        $http.get("./src/json/issues.json")
            .then(function (response) {
                vm.issueList = response.data;
                vm.initIssue = vm.copyIssue();
            });

        $http.get("./src/json/comments.json")
            .then(function (response) {
                vm.comments = response.data;
            });

        $http.get("./src/json/poll.json")
            .then(function (response) {
                vm.poll = response.data;
            });

        vm.copyIssue = function () {
            return angular.copy(vm.issueList)
        };

        vm.sendIssueData = function () {

            $http.post("./issues", vm.issueList).then(function (response) {
            });
        };

        vm.sendCommentData = function () {

            $http.post("./comments", vm.comments).then(function (response) {
            });
        };

        vm.priorities = [{id: 1, name: 'low'},
            {id: 2, name: 'medium'},
            {id: 3, name: 'high'}];

        vm.stasuses = [{id: 1, name: 'new'},
            {id: 2, name: 'assigned'},
            {id: 3, name: 'closed'}];

        vm.colorScheme = [{name: 'first'},
            {name: 'second'},
            {name: 'third'}];

        vm.scheme = 'first';

        vm.remain = function () {
            var count = 0;

            angular.forEach(vm.issueList, function (issue) {

                (issue.status.id == 3) ? '' : count += 1;
            });
            return count;
        };

        vm.getId = function () {
            var max = 0;

            angular.forEach(vm.issueList, function (issue) {

                (max >= issue.id) ? '' : max = issue.id;
            });
            return ++max;
        };

        vm.getCommentId = function () {
            var max = 0;

            angular.forEach(vm.comments, function (comment) {

                (max >= comment.id) ? '' : max = comment.id;
            });
            return ++max;
        };

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

        vm.addComment = function (issue_id) {

            var modalInstance = commentAddService.create(vm.getCommentId(), issue_id);
            modalInstance.result.then(function (comments) {

                if (comments !== null) {
                    vm.comments.push(comments);
                    vm.sendCommentData();
                }
            });
        };

        vm.deleteComment = function (id) {

            angular.forEach(vm.comments, function (value, index) {
                if (value.id == id) {
                    var modalInstance = dialogService.create('d');

                    modalInstance.result.then(function (result) {

                        if (result !== null) {
                            vm.comments.splice(index, 1);
                            vm.sendCommentData();
                        }
                    });
                }
            });
        };

        vm.addIssue = function () {
            var modalInstance = issueAddService.create(vm.getId(), vm.priorities, vm.stasuses);

            modalInstance.result.then(function (issueList) {

                if (issueList !== null) {
                    vm.issueList.push(issueList);
                    vm.initIssue = vm.copyIssue();
                    vm.sendIssueData();
                }
            });
        };

        vm.editIssue = function (issue, index) {
            var modalInstance = issueEditService.create(issue, vm.priorities, vm.stasuses, index);

            modalInstance.result.then(function (issueList) {

                if (issueList !== null) {
                    _.extend(issue, issueList);
                    vm.initIssue = vm.copyIssue();
                    vm.sendIssueData();
                } else {
                    var modalInstance = dialogService.create('d');

                    modalInstance.result.then(function (result) {

                        if (result !== null) {
                            vm.issueList.splice(index, 1);
                            vm.sendIssueData();
                        }
                    });
                }
                vm.sendIssueData();
            });
        };

        vm.deleteIssue = function (index) {

            var modalInstance = dialogService.create('d');

            modalInstance.result.then(function (result) {

                if (result !== null) {
                    vm.issueList.splice(index, 1);
                    vm.sendIssueData();
                }
            });
        };

        vm.help = function () {
            var modalInstance = helpService.create(vm.poll, vm.count, vm.log);

            modalInstance.result.then(function (count) {
                if (count !== null) {
                    vm.count = count;
                    vm.sendPoll();
                }
            });
        };

        vm.settings = function () {
            var modalInstance = settingsService.create(vm.colorScheme, vm.stasuses, vm.scheme);

            modalInstance.result.then(function (scheme) {
                if (scheme !== null) {
                    vm.scheme = scheme;
                }
            });
        };

        vm.addAlert = function () {
            vm.alerts.push({msg: 'Rate my app!'});
        };

        vm.closeAlert = function (index) {
            vm.alerts.splice(index, 1);
        };

        vm.dialog = function (issue, index) {

            var modalInstance = dialogService.create('c');

            modalInstance.result.then(function (result) {

                if (result !== null) {
                    vm.issueList[index] = vm.initIssue[index];
                    vm.sendIssueData();
                }
                else if (result == null) {
                    vm.initIssue = vm.copyIssue();
                }

            });
        };

    }

})
(angular);