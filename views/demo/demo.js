angular.module('App').controller('demoCtrl', function($scope, $timeout){
    
    $scope.value = 10;

    $scope.countDown = function(){

        var subtract = function(){
            if( $scope.value > 0 ){
                $scope.value--;
                $timeout( subtract, 1000 )
            }
        }

        $timeout( subtract, 1000 )

    }

})