angular.module('App').controller('triviaCtrl', function($scope, $timeout, srvc){

    $scope.index = 0;
    $scope.trivia = [];
    $scope.startTimer = false;
    $scope.time_remaining = 10;
    $scope.score = 0;

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
        
        $scope.startTimer = true;

        $timeout(subtract, 1000);

        console.log($scope.trivia)
    });

    // beautifuly simple timer using recursion

    var subtract = function(){
        if($scope.time_remaining > 0 ){
            $scope.time_remaining--;
            $timeout(subtract, 1000)
        }
    }

    $scope.checkAnswer = function(i){
        if($scope.trivia[$scope.index].correct_answer === $scope.trivia[$scope.index].incorrect_answers[i]){
            console.log($scope.time_remaining, true)
        }else{
            console.log(false)
        }
    }

})