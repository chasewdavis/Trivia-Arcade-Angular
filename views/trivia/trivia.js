angular.module('App').controller('triviaCtrl', function($scope, srvc){

    console.log('trviaCtrl fired')

    $scope.trivia = [];

    $scope.startTimer = false;

    $scope.time_remaining = 11;

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

        $scope.beginCountDown()

        console.log('scope.trivia is', $scope.trivia)
    });

    $scope.setTimeRemainig = () => {
        $scope.time_remaining = $scope.time_remaining - 1;
        console.log($scope.time_remaining)
    }

    $scope.beginCountDown = function(){
        for(var i = 0; i < $scope.time_remaining; i++ ){
            setTimeout( () => $scope.setTimeRemainig() , i * 1000)
        }
    }

    $scope.index = 0;

})