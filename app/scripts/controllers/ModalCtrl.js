(function() {

    function ModalCtrl(Room,$uibModalInstance, $cookies) {
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

        modal.createUserName = function() {
           $cookies.put('BlocChatCurrentUser', modal.userName);
           $uibModalInstance.close();
       }



    }



    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room','$uibModalInstance','$cookies', ModalCtrl]);


})();
