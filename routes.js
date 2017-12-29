angular.module('App').config(function($stateProvider, $urlRouterProvider){

    $stateProvider.state('home', {
        url:'/',
        templateUrl: './views/select/select.html',
        controller: 'selectCtrl'
    }).state('trivia', {
        url: '/trivia',
        templateUrl: './views/trivia/trivia.html',
        controller: 'triviaCtrl'
    })


    $urlRouterProvider.otherwise('/')
})