const questions =[{
    'question': 'Which of the following is a markup language',
    'a': 'HTML',
    'b': 'CSS',
    'c': 'JavaScript',
    'd': 'PHP',
    'correct': 'a'
},
{
'question': "Which of the following is a client site language?",
'a': "Java",
'b': "C",
'c': "Python",
'd': "JavaScript",
'correct': "d",
},
{
'question': "What does HTML stand for?",
'a': "Hypertext Markup Language",
'b': "Cascading Style Sheet",
'c': "Jason Object Notation",
'd': "Helicopters Terminals Motorboats Lamborginis",
'correct': "a",
},
{
'question': "What year was JavaScript launched?",
'a': "1996",
'b': "1995",
'c': "1994",
'd': "none of the above",
'correct': "b",
},
{
'question': "What does CSS stands for?",
'a': "Hypertext Markup Language",
'b': "Cascading Style Sheet",
'c': "Jason Object Notation",
'd': "Helicopters Terminals Motorboats Lamborginis",
'correct': "b",
}
]
let index = 0;
let right = 0;
let wrong = 0;
let total = questions.length;
const quesBox = document.getElementById("quesbox")
const optionInputs = document.querySelectorAll(".options");

const loadQuestion = () =>{
if(index===total){
    return endQuiz()
}
reset();
const data = questions[index];
quesBox.innerText = data.question;
optionInputs[0].nextElementSibling.innerText = data.a;     
optionInputs[1].nextElementSibling.innerText = data.b;
optionInputs[2].nextElementSibling.innerText = data.c;
optionInputs[3].nextElementSibling.innerText = data.d;

}
const submitQuiz = () =>{
const data = questions[index];
const ans = getAnswer()
console.log(ans === data.correct)
if(ans === data.correct){
    right++;

}
else{
    wrong++;
}
index++;
loadQuestion();
return;
}
const getAnswer = () =>{
let ans;
optionInputs.forEach((input) => {
        if(input.checked){
           ans = input.value
        }
    }
)
return ans;
}
const reset = () =>{
optionInputs.forEach(
    (input) => {
        input.checked = false;
    }
)
}
const endQuiz = () => {
document.getElementsByClassName("box")[0].innerHTML =
 `<h3> Thank you for playing the quiz </h3>
<h2> ${right}/${total} are correct </h2>
`
console.log("end");
console.log(total);
console.log(index);
return;
}
loadQuestion()