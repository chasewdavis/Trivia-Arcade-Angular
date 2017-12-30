angular.module('App').controller('myCtrl', function($scope, $http) {
    
    $http.get("https://opentdb.com/api.php?amount=10&difficulty=easy")
    .then(function(response) {
        $scope.trivia = response.data.results
        $scope.trivia.forEach( e => {
            e.incorrect_answers.push(e.correct_answer)
        });
        $scope.trivia.forEach( e => {
            e.question = e.question.replace(/&#039;/g, "\'");
            e.question = e.question.replace(/&quot;/g, '\"');
            e.incorrect_answers = e.incorrect_answers.map( s => {
                return s.replace(/&#039;/g, '\'' )
            })
            e.incorrect_answers = e.incorrect_answers.map( s => {
                return s.replace(/&quot;/g, '\"' )
            })
        })
        
        console.log($scope.trivia)
    });

})