class commentAddService {

    constructor($uibModal, $log) {

        var modalWindow = {};

        modalWindow.create = function (comment_id, id) {
            return $uibModal.open({
                animation: true,
                templateUrl: 'templates/modal-comment.htm',
                controller: 'CommentAddCtrl',
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
}

commentAddService.$inject = ['$uibModal', '$log'];
export {commentAddService}