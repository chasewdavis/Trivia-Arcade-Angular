angular.module('App').controller('triviaCtrl', function($scope, $timeout, srvc){

    $scope.index = 0;
    $scope.trivia = [];
    $scope.time_remaining = 11;
    $scope.score = 0;
    $scope.paused = true;
    $scope.correct;
    $scope.incorrect_answers;
    var timer;

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
        
        $scope.paused = false;

        $timeout(subtract, 0);

        console.log($scope.trivia)
    });

    var subtract = function(){
        if( $scope.time_remaining > 0 ){
            $scope.time_remaining--;
            timer = $timeout( subtract, 1000 );
        }
    }

    $scope.checkAnswer = function(i){

        console.log('btn working')

        if($scope.trivia[$scope.index].correct_answer === $scope.trivia[$scope.index].incorrect_answers[i]){
            $scope.score += 100;
            $scope.correct = true;
        }else{
            $scope.score -= 50;
            $scope.incorrect = true;
        }
        $timeout.cancel(timer);
        $scope.paused = true;

        // now on to the next question and reseting timers

    }

})