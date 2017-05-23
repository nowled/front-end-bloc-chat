(function() {
    function HomeCtrl(Room) {

        this.rooms = Room.all;

        this.addRoom = function(){
          var newRoomName = this.roomName;
          Room.add({ name: newRoomName });

         this.roomName = '';
       }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
