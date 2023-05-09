const questions = [{
    query: "What is the pH value of the human body?",
    answers: [{
            text: "9.2 to 9.8",
            correct: false
        },
        {
            text: "7.0 to 7.8",
            correct: true
        },
        {
            text: "6.1 to 6.3",
            correct: false
        },
        {
            text: "5.4 to 5.6",
            correct: false
        },
    ]
},
{
    query: "Which of the following are called Key Industrial animals?",
    answers: [{
            text: "Producers",
            correct: false
        },
        {
            text: "ertiary consumers",
            correct: false
        },
        {
            text: "Primary consumers",
            correct: true
        },
        {
            text: "None of these",
            correct: false
        },
    ]
},
{
    query: "Which of the given amendments made it compulsory for the president to consent to the constitutional Amendment bills?",
    answers: [{
            text: "27th",
            correct: false
        },
        {
            text: "29th",
            correct: false
        },
        {
            text: "24th",
            correct: true
        },
        {
            text: "22th",
            correct: false
        },
    ]
},
{
    query: "Which of the following Himalayan regions is called Shivalik's?",
    answers: [{
            text: "Upper Himalayas",
            correct: false
        },
        {
            text: "Outer Himalayas",
            correct: true
        },
        {
            text: "Lower Himalayas",
            correct: false
        },
        {
            text: "Inner Himalayas",
            correct: false
        },
    ]
},
{
    query: "Forming of Association in India is?",
    answers: [{
            text: "Legal Right",
            correct: false
        },
        {
            text: "Illegal Right",
            correct: false
        },
        {
            text: "Natural Right",
            correct: false
        },
        {
            text: "Fundamental Right",
            correct: true
        },
    ]
},
{
    query: "The Samkhya School of Philosophy was founded by?",
    answers: [{
            text: "Gautam Buddha",
            correct: false
        },
        {
            text: "Mahipala",
            correct: false
        },
        {
            text: "Gopala",
            correct: false
        },
        {
            text: "Kapila",
            correct: true
        },
    ]
},
{
    query: "Pustaz grasslands are situated at?",
    answers: [{
            text: "South Africa",
            correct: false
        },
        {
            text: "China",
            correct: false
        },
        {
            text: "Hungary",
            correct: true
        },
        {
            text: "USA",
            correct: false
        },
    ]
},
{
    query: "Right to emergency medical aid is a?",
    answers: [{
            text: "Legal Right",
            correct: false
        },
        {
            text: "Illegal Right",
            correct: false
        },
        {
            text: "Constitutional Right",
            correct: false
        },
        {
            text: "Fundamental Right",
            correct: true
        },
    ]
},
{
    query: "On the recommendation of which of the given committee, the abolition of reservation of items for the small-scale sector in industry is considered?",
    answers: [{
            text: "5Abid Hussain Committee",
            correct: true
        },
        {
            text: "Lohia Committee",
            correct: false
        },
        {
            text: "Narasimhan Committee",
            correct: false
        },
        {
            text: "Ajit Kumar Committee",
            correct: false
        },
    ]
},
{
    query: "Which of the given devices is used for counting blood cells?",
    answers: [{
            text: "Hmelethometer",
            correct: false
        },
        {
            text: "Spyscometer",
            correct: false
        },
        {
            text: "Hemocytometer",
            correct: false
        },
        {
            text: "Hamosytometer",
            correct: true
        },
    ]
}

];

const questionEl = document.getElementById("question");
const answerBtns = document.getElementById("answersbtn");
const nextBtn = document.getElementById("nextbtn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
currentQuestionIndex = 0;
score = 0;
nextBtn.innerHTML = "Next";
showQuestion();
}

function showQuestion() {
resetState();
let currentQuestion = questions[currentQuestionIndex];
let questionNo = currentQuestionIndex + 1;

questionEl.innerHTML = questionNo + ". " + currentQuestion.query;

currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerBtns.appendChild(button);

    if (answer.correct) {
        button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
});
}

function resetState() {
nextBtn.style.display = "none";
while (answerBtns.firstChild) {
    answerBtns.removeChild(answerBtns.firstChild);
}
}

function showScore() {
resetState();
questionEl.innerHTML = `Your Score is ${score} out of ${questions.length}!`;
nextBtn.innerHTML = "Play Again";
nextBtn.style.display = "block"
}

function selectAnswer(e) {
const selectedBtn = e.target;
const isCorrect = (selectedBtn.dataset.correct === "true");
if (isCorrect) {
    selectedBtn.classList.add("correctbtn");
    score++;
} else {
    selectedBtn.classList.add("incorrectbtn");
}

Array.from(answerBtns.children).forEach(button => {
    if (button.dataset.correct === "true") {
        button.classList.add("correctbtn");
    }
    button.disabled = true;
})
nextBtn.style.display = "block";
}

function handledNextBtn() {
currentQuestionIndex++;
if (currentQuestionIndex < questions.length) {
    showQuestion();
} else {
    showScore();
}
}

nextBtn.addEventListener("click", () => {
if (currentQuestionIndex < questions.length) {
    handledNextBtn();
} else {
    startQuiz();
}
})

startQuiz();