(function() {
    function HomeCtrl(Room, $uibModal) {

        this.rooms = Room.all;

    /** No longer need this code as I will be adding a room with
      a Modal and not this function  below
    this.addRoom = function() {
        var newRoomName = this.roomName;
        Room.add({name: newRoomName });
        this.roomName = '';
    }
**/

        this.addRoom = function(size) {
               $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl as modal',
                size: size
            });

        };

    }


    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
