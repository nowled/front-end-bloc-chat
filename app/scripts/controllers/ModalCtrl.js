(function() {

    function ModalCtrl($uibModalInstance, Room) {
      // set the variable Modal to object this in order to retrieve functions
      var modal = this;


        // create a room
        modal.createRoom = function() {
            Room.add(this.newRoom);
            this.newRoom = "";
            $uibModalInstance.close();
        };


        //to close our modal window
        modal.close = function() {
            $uibModalInstance.close();

        };



    }



    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModalInstance', 'Room', ModalCtrl]);


})();
