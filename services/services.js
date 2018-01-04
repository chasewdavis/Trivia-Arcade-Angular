angular.module('App').service('srvc', function($http){

    var category = null;
    var difficulty = null;
    var score = 0;
    var count = 0;
    var finsihedQuestions = [];

    this.setQuestions = function(cat, diff){
        category = cat;
        difficulty = diff;
    }

    this.setScore = function(pts, cc, qs){
        score = pts;
        count = cc;
        finsihedQuestions = qs;
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

    this.getFinishedQuestions = function(){
        return finsihedQuestions;
        // so I don't have to play the game every 5 seconds
        // return [{"category":"Science & Nature","type":"boolean","difficulty":"medium","question":"The Neanderthals were a direct ancestor of modern humans.","correct_answer":"False","incorrect_answers":["True","False"],"correctIndex":1,"userIndex":10},{"category":"History","type":"multiple","difficulty":"medium","question":"All of the following are names of the Seven Warring States EXCEPT:","correct_answer":"Zhai (翟)","incorrect_answers":["Zhao (趙)","Qin (秦)","Zhai (翟)","Qi (齊)"],"correctIndex":2,"userIndex":1},{"category":"Science & Nature","type":"multiple","difficulty":"hard","question":"What is isobutylphenylpropanoic acid more commonly known as?","correct_answer":"Ibuprofen","incorrect_answers":["Morphine","Ibuprofen is the correct answer","Ketamine","Aspirin"],"correctIndex":1,"userIndex":10},{"category":"History","type":"boolean","difficulty":"easy","question":"Adolf Hitler was a german soldier in World War I.","correct_answer":"True","incorrect_answers":["False","True"],"correctIndex":1,"userIndex":0},{"category":"Entertainment: Books","type":"multiple","difficulty":"medium","question":"The novel \"Of Mice And Men\" was written by what author? ","correct_answer":"John Steinbeck ","incorrect_answers":["George Orwell","Mark Twain ","John Steinbeck ","Harper Lee"],"correctIndex":2,"userIndex":0},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"medium","question":"The creator of the Touhou Project series is:","correct_answer":"ZUN","incorrect_answers":["SUN","RUN","ZUN","PUN"],"correctIndex":2,"userIndex":2},{"category":"Geography","type":"multiple","difficulty":"medium","question":"What tiny principality lies between Spain and France?","correct_answer":"Andorra","incorrect_answers":["Andorra","Liechtenstein","Monaco","San Marino"],"correctIndex":0,"userIndex":2},{"category":"Entertainment: Japanese Anime & Manga","type":"multiple","difficulty":"easy","question":"In the anime Noragami who is one of the main protagonists?","correct_answer":"Yukine","incorrect_answers":["Karuha","Mineha","Yukine","Mayu"],"correctIndex":2,"userIndex":2},{"category":"Entertainment: Film","type":"multiple","difficulty":"medium","question":"Who was the director of \"Scott Pilgrim vs. the World (2010)\"?","correct_answer":"Edgar Wright","incorrect_answers":["Phil Lord","Chris Miller","Seth Rogan","Edgar Wright"],"correctIndex":3,"userIndex":1},{"category":"Politics","type":"multiple","difficulty":"medium","question":"Before 2016, in which other year did Donald Trump run for President?","correct_answer":"2000","incorrect_answers":["2000","2012","1988","2008"],"correctIndex":0,"userIndex":2}];
        // return [{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"What was the name of the WWF professional wrestling tag team made up of the wrestlers Ax and Smash?","correct_answer":"Demolition","incorrect_answers":["Demolition","The Dream Team","The Bushwhackers","The British Bulldogs"],"correctIndex":0,"userIndex":0},{"category":"General Knowledge","type":"boolean","difficulty":"easy","question":"Video streaming website YouTube was purchased in it's entirety by Facebook for US$1.65 billion in stock.","correct_answer":"False","incorrect_answers":["True","False"],"correctIndex":1,"userIndex":1},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"What is \"dabbing\"?","correct_answer":"A dance","incorrect_answers":["A dance","A medical procedure","A sport","A language"],"correctIndex":0,"userIndex":1},{"category":"General Knowledge","type":"boolean","difficulty":"easy","question":"Nutella is produced by the German company Ferrero.","correct_answer":"False","incorrect_answers":["True","False"],"correctIndex":1,"userIndex":1},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"What was the nickname given to the Hughes H-4 Hercules, a heavy transport flying boat which achieved flight in 1947?","correct_answer":"Spruce Goose","incorrect_answers":["Spruce Goose","Noah's Ark","Fat Man","Trojan Horse"],"correctIndex":0,"userIndex":2},{"category":"General Knowledge","type":"boolean","difficulty":"easy","question":"In 2010, Twitter and the United States Library of Congress partnered together to archive every tweet by American citizens.","correct_answer":"True","incorrect_answers":["False","True"],"correctIndex":1,"userIndex":1},{"category":"General Knowledge","type":"boolean","difficulty":"easy","question":"Adolf Hitler was born in Australia. ","correct_answer":"False","incorrect_answers":["False","True"],"correctIndex":0,"userIndex":0},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"Which of the following card games revolves around numbers and basic math?","correct_answer":"Uno","incorrect_answers":["Uno","Go Fish","Twister","Munchkin"],"correctIndex":0,"userIndex":0},{"category":"General Knowledge","type":"boolean","difficulty":"easy","question":"Dihydrogen Monoxide was banned due to health risks after being discovered in 1983 inside swimming pools and drinking water.","correct_answer":"False","incorrect_answers":["True","False"],"correctIndex":1,"userIndex":1},{"category":"General Knowledge","type":"boolean","difficulty":"easy","question":"Scotland voted to become an independent country during the referendum from September 2014.","correct_answer":"False","incorrect_answers":["True","False"],"correctIndex":1,"userIndex":0}]
    }
    
})