
const questions = [

    {question: "Question 1.", 
    answers: ["Choice 1","Choice 2","Choice 3","Choice 4"],
    correct: 0},

    {question: "Question 2.", 
    answers: ["Choice A","Choice B2","Choice D3","Choice C4"],
    correct: 1},

    {question: "Question 3.", 
    answers: ["Choice 1","Choice 2","Choice 3","Choice 4"],
    correct: 1},

    {question: "Question 4.", 
    answers: ["Choice 1","Choice 2","Choice 3","Choice 4"],
    correct: 0},

    {question: "Question 5.", 
    answers: ["Choice 1","Choice 2","Choice 3","Choice 4"],
    correct: 3},

    {question: "Question 6.", 
    answers: ["Choice 1","Choice 2","Choice 3","Choice 4"],
    correct: 1},

];

let currentQuestionIndex = 0;
const mainQuestion = document.getElementById("main-question");
const answerButtons = document.querySelectorAll(".answers");
const feedback = document.getElementById("feedback");
const nextButton = document.getElementById("next-button");



loadingQuestion();

function loadingQuestion(){

    const currentQuestion = questions[currentQuestionIndex];

    mainQuestion.textContent = currentQuestion.question;

    answerButtons.forEach((button , index) => {
        button.textContent = currentQuestion.answers[index];
        button.disabled = false;
    })

    feedback.textContent = "";

    nextButton.disabled = true;
}

function handleClick(index){

    const current = questions[currentQuestionIndex].correct;
    if(index === current){
        feedback.textContent = "Correct";
    } else {
        feedback.textContent = "Incorrect";
    }

    answerButtons.forEach((button) => {
        button.disabled = true;
    });

    nextButton.disabled = false;
}

answerButtons.forEach((button , index) => {
        button.addEventListener("click", (event) => {handleClick(index)});
});

nextButton.addEventListener("click", () => {

    currentQuestionIndex++;
    if(questions.length > currentQuestionIndex){
        loadingQuestion();
    } else {
        feedback.textContent = "You have completed the quiz";
        nextButton.disabled = true;
    }
})