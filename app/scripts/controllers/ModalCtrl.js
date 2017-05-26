(function() {

    function ModalCtrl($uibModalInstance, Room) {
      // set the variable Modal to object this in order to retrieve functions
        var Modal = {};

        // create a room
        Modal.createRoom = function() {
            Room.add(this.newRoom);
            $uibModalInstance.close();
        };


        //to close our modal window
        Modal.close = function() {
            $uibModalInstance.close();

        };

        return Modal;

    }



    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModalInstance', 'Room', ModalCtrl]);


})();
