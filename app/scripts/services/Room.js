(function() {
    function Room($firebaseArray) {

        var Room = {};
        var ref = firebase.database().ref().child('rooms');
        var rooms = $firebaseArray(ref);
        Room.all = rooms;

        Room.add = function(room) {
            //Use the firebase method $add here
            Room.$add({value: 'rooms'}).then(function(room) {
            var id = room.key;
            Room.$indexFor(id);
        });
      }
        return Room;
    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();
