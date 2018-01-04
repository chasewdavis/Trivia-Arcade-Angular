angular.module('App').config(function($stateProvider, $urlRouterProvider){

    $stateProvider.state('home', {
        url:'/',
        templateUrl: './views/select/select.html',
        controller: 'selectCtrl'
    }).state('trivia', {
        url: '/trivia',
        templateUrl: './views/trivia/trivia.html',
        controller: 'triviaCtrl'
    }).state('results', {
        url: '/results',
        templateUrl: './views/results/results.html',
        controller: 'results'
    }).state('questions', {
        url: '/questions',
        templateUrl: './views/questions/questions.html',
        controller: 'finishedQuestions'
    }).state('demo', {
        url: '/demo',
        templateUrl: './views/demo/demo.html',
        controller: 'demoCtrl'
    })

    $urlRouterProvider.otherwise('/')
})