const questions = [
    {
        question: "What is the powerhouse of the cell",
        answers : [
            {text:"Nucleus", correct: false},
            {text:"Mitochondria", correct: true},
            {text:"Endoplasmic Reticulum", correct: false},
            {text:"Golgi Apparatu", correct: false}
        ]
    },
   
    // {
    //     question: "What is the capital city of France",
    //     answers : [
    //         {text:"Berlin", correct: false},
    //         {text:"Rome", correct: false},
    //         {text:"Madrid", correct: false},
    //         {text:"Paris", correct: true}
    //     ]
    // },
    // {
    //     question: "Which planet is known as the Red Planet ",
    //     answers : [
    //         {text:"Venus", correct: false},
    //         {text:"Mars", correct: true},
    //         {text:"Jupiter", correct: false},
    //         {text:"Saturn", correct: false}
    //     ]
    // },
    // {
    //     question: "What is the largest ocean on Earth",
    //     answers : [
    //         {text:"Indian Ocean", correct: false},
    //         {text:"Atlantic Ocean", correct: true},
    //         {text:"Southern Ocean", correct: false},
    //         {text:"Pacific Ocean", correct: false}
    //     ]
    // },
    // {
    //     question: "What is the capital city of Japan ",
    //     answers : [
    //         {text:"Seoul", correct: false},
    //         {text:"Tokyo", correct: true},
    //         {text:"Beijing", correct: false},
    //         {text:"Bangkok", correct: false}
    //     ]
    // },
    // {
    //     question: "In which state is the Taj Mahal located ",
    //     answers : [
    //         {text:"Uttar Pradesh", correct: true},
    //         {text:"Rajasthan", correct: false},
    //         {text:"Delhi", correct: false},
    //         {text:"Punjab", correct: false}
    //     ]
    // },
    // {
    //     question: "Who painted the Mona Lisa",
    //     answers : [
    //         {text:"Vincent van Gogh", correct: false},
    //         {text:"Pablo Picasso", correct: false},
    //         {text:"Leonardo da Vinci", correct: true},
    //         {text:"Michelangelo", correct: false}
    //     ]
    // },
    // {
    //     question: "What is the currency of Australia",
    //     answers : [
    //         {text:"Euro", correct: false},
    //         {text:"Yen", correct: false},
    //         {text:"Pond", correct: false},
    //         {text:"Dollar", correct: true}
    //     ]
    // },
    // {
    //     question: "In which state is the Taj Mahal located",
    //     answers : [
    //         {text:"Rajasthan", correct: false},
    //         {text:"Uttar Pradesh", correct: true},
    //         {text:"Madhya Pradesh", correct: false},
    //         {text:"Haryana", correct: false}
    //     ]
    // },
    // {
    //     question: "Which festival is celebrated with the flying of kites in India",
    //     answers : [
    //         {text:"Diwali", correct: false},
    //         {text:"Holi", correct: false},
    //         {text:"Makar Sankranti", correct: true},
    //         {text:"Navratri", correct: false}
    //     ]
    // },
    // {
    //     question: "Which country is known as the 'Land of the Rising Sun'",
    //     answers : [
    //         {text:"China", correct: false},
    //         {text:"Japan", correct: true},
    //         {text:"South Korea ", correct: false},
    //         {text:"Thailand", correct: false}
    //     ]
    // },
    // {
    //     question: "Which Indian state is known as the 'Land of Five Rivers'",
    //     answers : [
    //         {text:"Punjab", correct: true},
    //         {text:"Gujarat", correct: false},
    //         {text:"Rajasthan ", correct: false},
    //         {text:"Maharashtra", correct: false}
    //     ]
    // },
    // {
    //     question: "What is the largest mammal on Earth",
    //     answers : [
    //         {text:"Elephant", correct: false},
    //         {text:"Giraffe", correct: false},
    //         {text:"Gorilla", correct: false},
    //         {text:"Blue Whale", correct: true}
    //     ]
    // },
    // {
    //     question: "Who was the first Prime Minister of India",
    //     answers : [
    //         {text:"Indira Gandhi", correct: false},
    //         {text:"Sardar Patel", correct: false},
    //         {text:"Jawaharlal Nehru", correct: true},
    //         {text:"Rajendra Prasad", correct: false}
    //     ]
    // }
    ]


let questionEl = document.getElementById('question');
let answerBox = document.getElementById('answerBox')
let nextBtn = document.getElementById('nextBtn');
let celebrate =document.getElementById('celebrate');
let cry =document.getElementById('cry');
let img =document.getElementById('celebrateImg');

let currentQuestionIndex = 0;
let score =0;

function startQuiz(){
    reset();
    currentQuestionIndex = 0;
    score =0;
    nextBtn.style.display = "None";
    celebrate.style.display = "None";
    cry.style.display = "None";
    showQuestion();
}

function showQuestion(){
    reset();
    let currentQuestion = questions[currentQuestionIndex].question;
    let questionNum = currentQuestionIndex + 1;
    let answerList = questions[currentQuestionIndex].answers;

    questionEl.innerHTML= questionNum + '. ' + currentQuestion + '?';

    answerList.forEach(e => {
        let button = document.createElement("button");
        button.innerHTML = e.text;
        button.classList.add("ansBtn");
        answerBox.appendChild(button);
        if(e.correct){button.dataset.correct = e.correct};
        // console.log(button.dataset.correct);
        button.addEventListener('click', selectedAnswer);
        
});
    }

function selectedAnswer(e){
    let selectedBtn = e.target;
    let isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correctAns");
        score++
    }else{
        selectedBtn.classList.add("wrongAns");
    }
    Array.from(answerBox.children).forEach(button =>{
        if(button.dataset.correct==="true"){
            button.classList.add("correctAns");
        }        
        button.disabled=true;
    });
    nextBtn.style.display="Block";
}

function reset(){
    nextBtn.style.display='None';
    while(answerBox.firstChild){
        answerBox.removeChild(answerBox.firstChild);
    }
}

function showScore(){
    reset();
    questionEl.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextBtn.style.display="Block";
    nextBtn.innerHTML="Play Again";
}

function showGif(){
    // gif.style.display = "Block";
    if(score >= questions.length/2 ){
        celebrate.style.display="Block";
    }else{
        cry.style.display = "Block";
    }
}

function handleNextBtn(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
        showGif();
    }
}


nextBtn.addEventListener('click', ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextBtn();
    }else{
        startQuiz();
    }
})

startQuiz();
