angular.module('App').controller('selectCtrl', function($scope){

    $scope.categories = [
        {'cat':'Sports','sel':false},
        {'cat':'Geography','sel':false},
        {'cat':'Computer Science','sel':false},
        {'cat':'Television','sel':false},
        {'cat':'General Knowledge','sel':false},
        {'cat':'Movies','sel':false},
        {'cat':'History','sel':false}
    ];

    $scope.highscores = [
        'Bob Ross - 5312',
        'Greg Grimes - 2343',
        'Ricky Bobby - 2341',
        'Michael H. - 2203'
    ];

    $scope.difficulty = null;

    $scope.selectCat = function(index){  
        $scope.categories.forEach(e => {
            e.sel = false
        })
        $scope.categories[index].sel = true;
    }

    $scope.selectDiff = function(difficulty){
        $scope.difficulty = difficulty;
        console.log(difficulty)
    }

})