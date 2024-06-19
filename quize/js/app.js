const questions = [
  {
    que: "Which of the following is a markup language ?",
    a: "HTML",
    b: "CSS",
    c: "javascript",
    d: "PHP",
    correct: "a",
  },
  {
    que: "What year is JavaSript is launch in the the",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of this you know",
    correct: "b",
  },

  {
    que: "What does css is stand for if you know than answer if not then google it now!",
    a: " hypertext Markup language ",
    b: " java script ",
    c: " csacading style sheet ",
    d: " custom style sheet ",
    correct: "c",
  },
];
let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;
const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll(".options");
const loadQuestion = () => {
  if (index === total) {
    return endQuiz();
  }
  reset();
  const data = questions[index];
  quesBox.innerText = `${index + 1})${data.que}`;
  optionInputs[0].nextElementSibling.innerText = data.a;
  optionInputs[1].nextElementSibling.innerText = data.b;
  optionInputs[2].nextElementSibling.innerText = data.c;
  optionInputs[3].nextElementSibling.innerText = data.d;
};
const submitQuiz = () => {
  const data = questions[index];
  const ans = getAnswer();
  if (ans == data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadQuestion();
  return;
};
const getAnswer = () => {
  let answer;
  optionInputs.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
};

const reset = () => {
  optionInputs.forEach((input) => {
    input.checked = false;
  });
};
const endQuiz =()=>{

    document.getElementById("box").innerHTML=`
    <div style="text-align:center"> 
    <h3>Thank you for playing this quiz</h3>
    <h2>${right}/${total} are correct </h2>
    </div>`
}
const submitButton = document.querySelector('.btn');
submitButton.addEventListener('click', submitQuiz);
loadQuestion();
