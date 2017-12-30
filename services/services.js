angular.module('App').service('srvc', function($http){

    var category = null;
    var difficulty = null;

    this.setQuestions = function(cat, diff){
  
        category = cat;
        difficulty = diff;

    }

    this.getQuestions = function(){

        if(!category && !difficulty){
            return $http.get(`https://opentdb.com/api.php?amount=10`)
            .then( res => res.data.results )
            .catch( err => console.log('Error getting questions', err) )
        }else if( !category ){
            return $http.get(`https://opentdb.com/api.php?amount=10&difficulty=${difficulty}`)
            .then( res => res.data.results )
            .catch( err => console.log('Error getting questions', err) )
        }else if ( !difficulty ){
            return $http.get(`https://opentdb.com/api.php?amount=10&category=${category}`)
            .then( res => res.data.results )
            .catch( err => console.log('Error getting questions', err) )
        }

        return $http.get(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}`)
        .then( res => res.data.results)
        .catch(err => console.log('Error getting questions:', err))
    }
    
})