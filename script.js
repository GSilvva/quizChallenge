const btnInicio = document.querySelector(".inicio-btn");
const btnFim = document.querySelector(".fim-btn");
const pergunta = document.querySelector(".pergunta");
const answers = document.querySelectorAll(".answer");
let currentQuestion = 0;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

const questions = [
    {
        question: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        answers: [
            { text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", correct: true },
            { text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", correct: false },
            { text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", correct: false },
            { text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", correct: false },
            { text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", correct: false}
        ]
    }
]