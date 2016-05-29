var app = angular.module('Socket.io', ['ngMaterial']);
var socket = io.connect('http://raspafari.xyz:8080');

app.controller('DataCtrl', function ($scope){

    //$scope.sensors = ['Temperature', 'pH', 'Nitrites', 'Lumiere', 'Pompe', 'Nourriture'];
    socket.emit('getDataHandlers');
    socket.on('dataHandlersSent', function(dataHandlers) {
        $scope.dataHandlers = dataHandlers;
        $scope.$apply();
        console.log(dataHandlers);
        $scope.TempSensor = dataHandlers[findDataHandlerIndex("Temperature")].sensor;
        $scope.PhSensor = dataHandlers[findDataHandlerIndex("pH")].sensor;
        $scope.NiSensor = dataHandlers[findDataHandlerIndex("Nitrites")].sensor;
        $scope.LumiereActuator = dataHandlers[findDataHandlerIndex("Lumiere")].sensor;
        $scope.PompeActuator = dataHandlers[findDataHandlerIndex("Pompe")].sensor;
        $scope.NourritureActuator = dataHandlers[findDataHandlerIndex("Nourriture")].sensor;
        $scope.$apply();
    });


    function findDataHandlerIndex(name) {
        for (var i = 0; i < $scope.dataHandlers.length; i++) {
            if($scope.dataHandlers[i].name == name) return i;
        }
    }







    $scope.setSensor = function(name, value){
        console.log(value);
        socket.emit('setSensor', name, value);
    };

});
