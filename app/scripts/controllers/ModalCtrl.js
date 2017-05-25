(function() {

    function ModalCtrl($uibModalInstance, Room) {
        var modal = this;
        //to grab the Room factory services in order to add to firebase
        modal.room = Room.all;

        //this will hold our new room variable
        modal.newRoom = "";


        modal.close = function() {
            $uibModalInstance.close('Cancel');
        };


        modal.submit = function() {
            modal.add(modal.newRoom);
            modal.close();
        };





    }



    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);


})();
