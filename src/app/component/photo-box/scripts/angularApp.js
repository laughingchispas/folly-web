var myApp = angular.module('angularApp', []);

myApp.controller('albaController', function($scope, $http) {

    $scope.names = [
        {name: "Meg"},
        {name: "Maia"},
        {name: "Nicole"},
        {name: "Annemie"}
    ];

    $scope.bios = [
            {bio: "Meg"},
            {bio: "Maia"},
            {bio: "Nicole"},
            {bio: "Annemie"}
    ];

});





