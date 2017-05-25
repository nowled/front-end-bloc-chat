(function() {

    function ModalCtrl($uibModalInstance, Room) {
        var Modal = {};

        //to grab the Room factory services in order to add to firebase
        this.room = Room.all;
        //to close our modal window
        this.close = function() {
            $uibModalInstance.close();

        };

    }



    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModalInstance', 'Room', ModalCtrl]);


})();
