var app = angular.module("myApp", ['ui.router']);
// app.controller("firstCtrl", function($scope, ) {
//     $scope.states = ["Andhra pradesh", "T.S", "Tamilnadu", "Karnataka", "Maherasta", "harayana", "Gujarath", "Rajastahan", "Madhyapradesh", "Behaar"];
//     $scope


// });
app.config(function($stateProvider) {
    var homeState = {
        name: "home",
        url: "/home",
        templateUrl: "../home.html",
        controller: "homeCtrl",
    };
    var contactState = {
        name: "contact",
        url: "/contact",
        templateUrl: "../contact.html",
        controller: "contactCtrl",
    };
    var emailState = {
        name: "email",
        url: "/email",
        templateUrl: "../email.html",
        controller: "emailCtrl",
    };
    $stateProvider.state(homeState);
    $stateProvider.state(contactState);
    $stateProvider.state(emailState);

});