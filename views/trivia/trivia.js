angular.module('App').controller('triviaCtrl', function($scope, srvc){

    $scope.trivia = [];

    srvc.getQuestions()
    .then(function(res) {
        $scope.trivia = res;
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
        
        console.log('scope.trivia is', $scope.trivia)
    });

    $scope.index = 0;

})