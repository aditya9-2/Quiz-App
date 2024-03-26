const allQuestions = [

    {
        question: "Who was the first Prime Minister of India?",
        options: {
            A: "Jawaharlal Nehru",
            B: "Mahatma Gandhi",
            C: "Sardar Vallabhbhai Patel"

        },
        correctAnswer: "A"

    },
    {
        question: "Which political party did Atal Bihari Vajpayee belong to?",
        options: {
            A: "Indian National Congress",
            B: "Bharatiya Janata Party(BJP)",
            C: "Communist Party of India(Marxist)"

        },
        correctAnswer: "B"

    },
    {
        question: "Who is known as the 'Iron Lady of India'?",
        options: {
            A: "Sonia Gandhi",
            B: "Mamata Banerjee",
            C: "Indira Gandhi"

        },
        correctAnswer: "C"

    },
    {
        question: "Which Indian state has the largest representation in the Lok Sabha (lower house of Parliament)?",
        options: {
            A: "Uttar Pradesh",
            B: "Maharashtra",
            C: "West Bengal"

        },
        correctAnswer: "A"

    },
    {
        question: "Who was the first woman Chief Minister of an Indian state?",
        options: {
            A: "Jayalalithaa",
            B: "Mamata Banerjee",
            C: "Sucheta Kriplani"
        },
        correctAnswer: "C"

    }
]

const questions = document.querySelector('.show-question');
const answers = document.querySelectorAll('.options');

const button = document.querySelector('.btn');
// // console.log(questions);
// // console.log(answerss);


const h2 = document.createElement('h2');
questions.appendChild(h2);
console.log(h2);

let index = 0;

const loadquestions = () => {

    const viewQuestion = allQuestions[index].question;

    h2.innerText = `${index + 1}) ${viewQuestion}`

    loadOptions();


}

loadOptions = () => {

    const getOptions = allQuestions[index].options;

    answers[0].nextElementSibling.innerText = getOptions.A;
    answers[1].nextElementSibling.innerText = getOptions.B;
    answers[2].nextElementSibling.innerText = getOptions.C;

}

loadquestions()






