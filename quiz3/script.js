const questions = [
{
    question: "Какое число жизни?",
    answers: [
        {
            text: "11",
            correct: false
            },
        {
            text: "42",
            correct: true
            },
        {
            text: "56",
            correct: false
            },
        {
            text: "666",
            correct: false
            },
        ]
    },
{
    question: "Как называется камень в майнкрафте?",
    answers: [
        {
            text: "каблстоун",
            correct: false
            },
        {
            text: "булыжник",
            correct: false
            },
        {
            text: "стоун",
            correct: false
            },
        {
            text: "Итальянский мрамор",
            correct: true
            },
        ]
    },
    {
    question: "Какую игру любит Даня?",
    answers: [
        {
            text: "PUBG",
            correct: false
            },
        {
            text: "компьютерную",
            correct: true
            },
        {
            text: "Fortinate",
            correct: false
            },
        {
            text: "Standoff2",
            correct: false
            },
        ]
    },
    {
    question: "Какой сериал смотрит мама?",
    answers: [
        {
            text: "Правдивая ложь",
            correct: false
            },
        {
            text: "True lie",
            correct: false
            },
        {
            text: "Интересный",
            correct: true
            },
        {
            text: "Никакой",
            correct: false
            },
        ]
    },

];

const questionsElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Дальше";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionsElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
    button.addEventListener("click", selectAnswer);
    })
};

function resetState(){
    nextButton.style.display = "none";
    while (answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
};

function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if (isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }else{
        selectBtn.classList.add("incorrect")
    }

    Array.from(answerButton.children).forEach(button =>{
        if (button.dataset.correct === "true"){
            button.classList.add("correct");
        }
    button.disabled = true;
    })
    nextButton.style.display = "block";

}

function showScore(){
    resetState();
    questionsElement.innerHTML = `Вы набрали ${score} правильных ответов из ${questions.length}!`;
    nextButton.innerHTML = "Играть снова!";
    nextButton.style.display = "block";
};

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});
startQuiz();
