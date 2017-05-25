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

        this.openModal = function() {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl as modal'      
            });

        };
}


    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
