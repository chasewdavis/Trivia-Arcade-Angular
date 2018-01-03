angular.module('App').controller('triviaCtrl', function($scope, $state, $timeout, srvc){

    $scope.index = 0;
    $scope.trivia = [];
    $scope.time_remaining = 11;
    $scope.score = 0;
    $scope.paused = true;
    $scope.correct;
    $scope.countCorrect = 0;
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

        if($scope.time_remaining === 1){
            $scope.checkAnswer(10);
        }

        if( $scope.time_remaining > 0 ){
            $scope.time_remaining--;
            timer = $timeout( subtract, 1000 );
        }
    }

    $scope.checkAnswer = function(i){

        if($scope.trivia[$scope.index].correct_answer === $scope.trivia[$scope.index].incorrect_answers[i]){
            $scope.countCorrect++;
            $scope.score += 100;
            $scope.correct = true;
        }else{
            $scope.score -= 50;
            $scope.incorrect = true;
        }
        $timeout.cancel(timer);
        $scope.paused = true;

        // now on to the next question and reseting timers
        $timeout( function(){
            if($scope.index !== 9){
                $scope.index++;
                $scope.paused = false;
                $scope.time_remaining = 11;
                $scope.correct = false;
                $scope.incorrect = false;
                subtract();
            }else{
                // push to new route

                srvc.setScore($scope.score, $scope.countCorrect);

                $state.go('results');
            }
        }, 1300)
    }

    $scope.resetTimerClass = function(){

        // kinda a hacky way to do this, looking for alternatives

        var elem = document.getElementById('timer_animation');

        if($scope.time_remaining===10){
            elem.classList.remove("start_timer");
            void elem.offsetWidth;
            elem.classList.add("start_timer");
        }

    }

})