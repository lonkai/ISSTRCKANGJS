(function (angular) {
    'use strict';

    angular
        .module('issueTrackerApp.commentsAdd-service')
        .service('commentAddService', commentAddService);

    commentAddService.$inject = ['$uibModal', '$log'];

    function commentAddService($uibModal, $log) {
        function modalWindow () {};

        modalWindow.create = function (comment_id, id) {
            return $uibModal.open({
                animation: true,
                templateUrl: './src/templates/modal-comment.htm',
                controller:  'CommentAddCtrl',
                controllerAs: 'ModalCtrl',
                resolve: {
                    comment_id: function () {
                        return comment_id
                    },
                    id: function () {
                        return id;
                    }
                },
                backdrop: 'static'
            });

        };

        return modalWindow;
    }
})(angular);