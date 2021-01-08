const
    btnInicio = document.querySelector(".inicio-btn"),
    btnFim = document.querySelector(".fim-btn"),
    containerQuiz = document.querySelector(".container-quiz"),
    respostas = document.querySelector(".respostas"),
    pergunta = document.querySelector(".pergunta"),
    answers = document.querySelectorAll(".answer"),
    prev = document.querySelector(".prev"),
    next = document.querySelector(".next"),
    questions = [
        {
            question: "Lorem Ipsum is simply dummy text of the printing. 1",
            answers: [
                { text: "Lorem Ipsum is simply dummy text of the printing. 1", correct: true },
                { text: "Lorem Ipsum is simply dummy text of the printing. 1", correct: false },
                { text: "Lorem Ipsum is simply dummy text of the printing. 1", correct: false },
                { text: "Lorem Ipsum is simply dummy text of the printing. 1", correct: false },
                { text: "Lorem Ipsum is simply dummy text of the printing. 1", correct: false}
            ]
        },
        {
            question: "Lorem Ipsum is simply dummy text of the printing. 2",
            answers: [
                { text: "Lorem Ipsum is simply dummy text of the printing. 2", correct: false },
                { text: "Lorem Ipsum is simply dummy text of the printing. 2", correct: false },
                { text: "Lorem Ipsum is simply dummy text of the printing. 2", correct: false },
                { text: "Lorem Ipsum is simply dummy text of the printing. 2", correct: false },
                { text: "Lorem Ipsum is simply dummy text of the printing. 2", correct: true }
            ]
        },
        {
            question: "Lorem Ipsum is simply dummy text of the printing. 3",
            answers: [
                { text: "Lorem Ipsum is simply dummy text of the printing. 3", correct: false },
                { text: "Lorem Ipsum is simply dummy text of the printing. 3", correct: false },
                { text: "Lorem Ipsum is simply dummy text of the printing. 3", correct: true },
                { text: "Lorem Ipsum is simply dummy text of the printing. 3", correct: false },
                { text: "Lorem Ipsum is simply dummy text of the printing. 3", correct: false }
            ]
        },
        {
            question: "Lorem Ipsum is simply dummy text of the printing. 4",
            answers: [
                { text: "Lorem Ipsum is simply dummy text of the printing. 4", correct: false },
                { text: "Lorem Ipsum is simply dummy text of the printing. 4", correct: false },
                { text: "Lorem Ipsum is simply dummy text of the printing. 4", correct: false },
                { text: "Lorem Ipsum is simply dummy text of the printing. 4", correct: false },
                { text: "Lorem Ipsum is simply dummy text of the printing. 4", correct: true }
            ]
        },
        {
            question: "Lorem Ipsum is simply dummy text of the printing. 5",
            answers: [
                { text: "Lorem Ipsum is simply dummy text of the printing. 5", correct: false },
                { text: "Lorem Ipsum is simply dummy text of the printing. 5", correct: true },
                { text: "Lorem Ipsum is simply dummy text of the printing. 5", correct: false },
                { text: "Lorem Ipsum is simply dummy text of the printing. 5", correct: false },
                { text: "Lorem Ipsum is simply dummy text of the printing. 5", correct: false }
            ]
        }
    ];

let currentQuestion = 0;

window.addEventListener("DOMContentLoaded", () => {
    showQuestion();
});

btnInicio.addEventListener("click", startQuiz);

next.addEventListener("click", () => {

    currentQuestion++;

    showQuestion();
    verifyIndexQuestions();
});

prev.addEventListener("click", () => {

    currentQuestion--;

    showQuestion();
    verifyIndexQuestions();
});

function startQuiz() {
    btnInicio.classList.add("disabled");
    containerQuiz.classList.add("enabled");
}

function showQuestion() {

    let item = questions[currentQuestion];
    pergunta.textContent = item.question;

    let answersQuestions = item.answers.map((answer, index) => {
        
        return `
            <fieldset>
                <input id="res${index + 1}" type="radio" name="input">
                <label class="answer" for="res${index + 1}">${answer.text}</label>
            </fieldset>
        `;

    }).join("");
    respostas.innerHTML = answersQuestions;

}

function verifyIndexQuestions() {

    if(currentQuestion === 4) {
        next.classList.add("remove");
        btnFim.classList.remove("remove");
    } else {
        next.classList.remove("remove");
        btnFim.classList.add("remove");
    }

    if(currentQuestion === 0) {
        prev.classList.add("remove");
    } else {
        prev.classList.remove("remove");
    }

}

function getCorrectAnswers() {
    console.log("IHAAAA!");
}