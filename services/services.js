angular.module('App').service('srvc', function($http){

    var category = null;
    var difficulty = null;
    var score = 0;
    var count = 0;

    this.setQuestions = function(cat, diff){
        category = cat;
        difficulty = diff;
    }

    this.setScore = function(pts, cc){
        score = pts;
        count = cc;
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
        }else if ( !difficulty || difficulty==='any' ){
            return $http.get(`https://opentdb.com/api.php?amount=10&category=${category}`)
            .then( res => res.data.results )
            .catch( err => console.log('Error getting questions', err) )
        }

        return $http.get(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}`)
        .then( res => res.data.results)
        .catch(err => console.log('Error getting questions:', err))
    }

    this.getResults = function(){
        console.log('from results count is...', count)
        return { 
            category: category, 
            score: score,
            count: count 
        }
    }
    
})