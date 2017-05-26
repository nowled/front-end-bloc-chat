(function() {
    function HomeCtrl(Room, $uibModal) {

        this.rooms = Room.all;

        this.addRoom = function() {
            var newRoomName = this.roomName;

            Room.add({
                name: newRoomName
            });
            this.roomName = '';
        }

        this.openModal = function(size) {
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
