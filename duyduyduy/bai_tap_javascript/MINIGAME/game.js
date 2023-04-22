const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');


fetch(
    'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple'
)
    .then((res) => {
        return res.json();
    })
    .then((loadedQuestions) => {
        questions = loadedQuestions;
        console.log('questions formatted: ', questions);
        startGame();
    })
    .catch((err) => {
        console.error(err);
    });

    
    function randomquestion(arr, getNumberOf) {
        let newQues = [];
    
        for (i = 0; i < getNumberOf; i++) {
            let random = Math.floor(Math.random() * arr.length)
            newQues.push(arr[random])
            arr.splice(random, 1);
        }
        return newQues;
    }


const startGame = function() {
        newQuestions = randomquestion(questions.results, 3);
        
        
        let score = 0;
           
            var noOfQuestion = 0 ;
            console.log(noOfQuestion);

            showQuestions(noOfQuestion);
    
            function showQuestions(noOfQuestion) {
                question.innerText = newQuestions[noOfQuestion].question;
                let fullanswer = [];
                fullanswer.push(newQuestions[noOfQuestion].correct_answer, ...newQuestions[noOfQuestion].incorrect_answers)
                fullanswer.sort(() => Math.random() - 0.5)
                choices.forEach((choice, idx) => {
                    choice.innerHTML = fullanswer[idx];
                })
            }
        
            choices.forEach((choice, idx) => {
                choice.addEventListener('click', (e) => {
                    if (e.target.innerText == newQuestions[noOfQuestion].correct_answer) {
                        choice.classList.add("correct");
                        score ++ ;
                        scoreText.innerText = score ;
                        noOfQuestion++;
                        setTimeout(() => {
                            showQuestions(noOfQuestion);
                            choice.classList.remove("correct");
                        }, 500);
                        percentQues();
                    } else {
                            choice.classList.add("incorrect");
                            noOfQuestion++;
                            percentQues();
                            setTimeout(() => {
                                showQuestions(noOfQuestion)
                                choice.classList.remove("incorrect");
                            }, 500);
                    }if(noOfQuestion >= newQuestions.length ){
                        window.location = "./highscores.html" ;
                    }
        
                });
            })
        
}

let a = 0;
function percentQues() {
    a++
    progressBarFull.style.width = `${(a / newQuestions.length) * 100}%`;

}