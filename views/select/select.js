angular.module('App').controller('selectCtrl', function($scope, srvc ){

    $scope.categories = [
        {'cat':'Sports','sel':false, 'id': 21},
        {'cat':'Geography','sel':false, 'id': 22 },
        {'cat':'Computer Science','sel':false,'id': 18},
        {'cat':'Television','sel':false,'id': 14},
        {'cat':'General Knowledge','sel':false, 'id': 9},
        {'cat':'Movies','sel':false,'id': 11},
        {'cat':'History','sel':false,'id': 23}
    ];

    srvc.getScores().then( scores =>  $scope.highscores = scores );

    $scope.highscores = [
        'Bob Ross - 5312',
        'Greg Grimes - 2343',
        'Ricky Bobby - 2341',
        'Michael H. - 2203'
    ];

    $scope.category = null;
    $scope.difficulty = null;

    $scope.selectCat = function(index){  
        $scope.categories.forEach(e => {
            e.sel = false
        })
        $scope.categories[index].sel = true;
        $scope.category = $scope.categories[index].id
    }

    $scope.selectDiff = function(difficulty){
        $scope.difficulty = difficulty;
    }

    $scope.callSrvc = function(cat,diff){
        // console.log('cat and diff are...', cat, diff)
        srvc.setQuestions(cat, diff)
    }

})