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

const container = document.querySelector('.container');
const questions = document.querySelector('.show-question');
const answers = document.querySelectorAll('.options');
const button = document.querySelector('.btn');

const h2 = document.createElement('h2');
questions.appendChild(h2);


let correct = 0;
let incorrect = 0;
let index = 0;
let questionLength = allQuestions.length;


const loadquestions = () => {

    if (index === questionLength) {

        return handleQuizEnd();
    }

    const viewQuestion = allQuestions[index].question;

    h2.innerText = `${index + 1}) ${viewQuestion}`

    loadOptions();


};

loadOptions = () => {

    handleResetChecked();
    const getOptions = allQuestions[index].options;

    answers[0].nextElementSibling.innerText = getOptions.A;
    answers[1].nextElementSibling.innerText = getOptions.B;
    answers[2].nextElementSibling.innerText = getOptions.C;

};



button.addEventListener('click', submitQuiz = () => {

    const correctAns = allQuestions[index].correctAnswer;

    const answer = getAnswer();

    if (answer === correctAns) {

        correct += 2;
    }
    else {
        incorrect++;
    }
    index++;
    loadquestions();
    loadOptions();


});

getAnswer = () => {

    let answer;

    answers.forEach((input) => {
        if (input.checked) {

            answer = input.value;

        }

    });

    return answer;
};

handleResetChecked = () => {

    answers.forEach(input => {

        input.checked = false;

    });


};

handleQuizEnd = () => {

    container.innerHTML = `
        <p> Thank you for playing.</p>
        <p>Your score Total Score is - ${correct} / 10</p>
        <button id="playAgain">Play Again</button>
    
    `
    refreshPage();


}

refreshPage = () => {

    const playAgainBtn = document.getElementById('playAgain');

    playAgainBtn.addEventListener('click', () => {
        window.location.reload();
    });

}


loadquestions();






