const questions = [
    {
        'que': 'which of the following is a markup language',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'java',
        'd': 'js',
        'correct': 'a'
    },
    {
        'que': 'which of the following is not a function type in js',
        'a': 'arrow',
        'b': 'expression',
        'c': 'statement',
        'd': 'level',
        'correct': 'd'
    },
    {
        'que': 'which of the following is not currently used in js',
        'a': 'web development',
        'b': 'app',
        'c': 'game',
        'd': 'AI',
        'correct': 'd'
    }
];
let index = 0;
let right = 0;
let wrong = 0;
const total = questions.length;
let data; // Declare data at a broader scope

const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll('.option');

const loadQuestion = () => {
    if (index === total) {
        return endQuiz();
    }
    reset();
    data = questions[index];
    quesBox.innerText = `${index + 1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
};

const submitQuiz = () => {
    const ans = getAns();
    if (ans === data.correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion();
};

const getAns = () => {
    let selectedValue = null;
    optionInputs.forEach((input) => {
        if (input.checked) {
            console.log("Yes");
            selectedValue = input.value;
        } else {
            console.log("NO");
        }
    });
    return selectedValue;
};

const reset = () => {
    optionInputs.forEach((input) => {
        input.checked = false;
    });
};

const endQuiz = () => {
    document.getElementById("box").innerHTML = `<h3>Thank you for playing the quiz</h3>
    <h2> ${right}/${total} are correct`;
    // document.getElementById("box").style="height="40px"";
    document.getElementById("box").style.height = "80px";
    document.getElementById("box").style.margin = "20px";


};

// Initial call
loadQuestion();
