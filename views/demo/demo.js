angular.module('App').controller('demoCtrl', function($scope, $timeout){
    
    $scope.value = 11;
    var timer;

    $scope.countDown = function(){

        $timeout.cancel(timer);

        $scope.value = 11;

        var subtract = function(){
            if( $scope.value > 0 ){
                $scope.value--;
                timer = $timeout( subtract, 1000 )
            }
        }

        $timeout( subtract, 0 )

    }

})