(function() {
    function HomeCtrl(Room) {

        this.rooms = Room.all;
        this.addRoom = Room.add;
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
