(function() {
    function HomeCtrl(Room, Message, $uibModal,$cookies) {
        var home = this;
         home.rooms = Room.all;


    /** No longer need this code as I will be adding a room with
      a Modal and not this function  below
    this.addRoom = function() {
        var newRoomName = this.roomName;
        Room.add({name: newRoomName });
        this.roomName = '';
    }
**/

        home.addRoom = function(size) {
               $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl as modal',
                size: size
            });

        };

        home.setCurrentRoom = function(room) {
               home.currentRoom = room;
               home.messages = Message.getByRoomId(home.currentRoom.$id);
           }
        home.sendMessage = function () {
          home.newMessage.roomId = home.currentRoom.$id;
          home.newMessage.userName = $cookies.get('BlocChatCurrentUser');
          Message.send(home.newMessage);
      }
    }


    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', '$cookies', HomeCtrl]);
})();
