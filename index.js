const quizData = [
    {
        question: 'Which is the framework of javascript?',
        a: 'React.js',
        b: 'Next.js',
        c: 'Django',
        d: 'Laraval',
        correct: 'b'
    },
    {
        question: 'Who is the presedent of Pakistan?',
        a: 'Nawaz Shareef',
        b: 'Imran khan ',
        c: 'Shahbaz Shareef',
        d: 'Pervaiz Musharaf',
        correct: 'c'
    },
    {
        question: 'How many alphabets are in English alphabets?',
        a: '26',
        b: '28',
        c: '30',
        d: '32',
        correct: 'a'
    },
    {
        question: 'Which is the famous programming language in 2022?',
        a: 'Javascript',
        b: 'Python',
        c: 'Php',
        d: 'Html',
        correct: 'a'
    },
    {
        question: 'What year was javascript launched?',
        a: '1996',
        b: '1995',
        c: '1994',
        d: '1993',
        correct: 'b'
    }
]

let questionEl = document.getElementById('question')
let a_text = document.getElementById('a_text')
let b_text = document.getElementById('b_text')
let c_text = document.getElementById('c_text')
let d_text = document.getElementById('d_text')
let submitBtn = document.getElementById('submit')
let answerEls = document.querySelectorAll('.answer')
let quiz = document.getElementById('quiz')

let currentQuiz = 0;
let score = 0;
//deselecting answers
const deSelect = ()=>{
    answerEls.forEach(answerEl => {
        answerEl.checked = false
    });
        
}

//loading Quiz
const loadQuiz = () => {
    deSelect();
    let currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
loadQuiz()
//selecting answers
const getSelected = () => {

    let answer = undefined;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    });

    return answer;
}


//submit answer
submitBtn.addEventListener('click', () => {

    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }
    }
    console.log(answer)
    if (answer) {
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            //todo show results
            quiz.innerHTML = `<h2>Hurrah! you have scored ${score} out of ${quizData.length} Congratulation!!!</h2> <button onclick='location.reload()'>Reload</button>`
        }
    }
})