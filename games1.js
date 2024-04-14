const quizData = [
    {
        question: "Bully terjadi di sekolah saja",
        a: "Mitos",
        b: "Fakta",
        correct: "a",
    },
    {
        question: "Bully terjadi di sosial media saja",
        a: "Mitos",
        b: "Fakta",
        correct: "a",
    },
    {
        question: "Bully terjadi di sekolah saja",
        a: "Mitos",
        b: "Fakta",
        correct: "a",
    },
    {
        question: "Bully terjadi di sekolah saja",
        a: "Mitos",
        b: "Fakta",
        correct: "a",
    },
    {
        question: "Bully terjadi di sekolah saja",
        a: "Mitos",
        b: "Fakta",
        correct: "a",
    },
    
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.jawaban')
const quizEl= document.getElementById('pertanyaan')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const submitBtn = document.getElementById('Selesai')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    quizEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer = null
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="window.open('penjelasan1.html', '_blank')">Home</button>            `
        }
    }
})
