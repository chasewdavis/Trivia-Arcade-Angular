angular.module('App').controller('demoCtrl', function($scope){
    $scope.input = '';

    $scope.array = [1,2,3,4,5,6,7,8,9,10,11,12];

    $scope.next = function(){
        console.log('next func running')
        var nextVal = $scope.array[$scope.array.length - 1] + 1;
        $scope.array.push(nextVal);
    }
})