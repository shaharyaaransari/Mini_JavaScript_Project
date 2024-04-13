const quizData = [
  {
    question: "What does HTML stand for",
    option: [
      "Hypertext Markup Language.",
      "Hyper Transfer Markup Language.",
      "Hypertext Machine Language",
      "Hyperlink and text Markup Language.",
    ],
    correct: 0,
  },
  {
    question:
      "Which css Property is used to control the spacing between elements.",
    option: ["margin", "padding", "spacing", "border-spacing"],
    correct: 1,
  },
  {
    question:
      "What is the javascript function used to select an HTML element by its id?",
    option: [
      "documant.query",
      "getElementById",
      "findElementById",
      "selectElement",
    ],
    correct: 1,
  },
  {
    question:
      "In react.js Which hook is used to perform sideffect in a function component",
    option: ["useRef", "useContext", "useEffect", "useState"],
    correct: 2,
  },
  {
    question: "Which HTML tag is to create a order list?",
    option: ["<dl>", "<li>", "<ol>", "<ul>"],
    correct: 2,
  },
];

const answerElm = document.querySelectorAll(".answer");
const [questionElm, option_1, option_2, option_3, option_4] =
  document.querySelectorAll(
    ".question, #option_1, #option_2, #option_3, #option_4"
  );
const submitBtn = document.getElementById("submit");
const quiz = document.getElementById("quiz");
let currentQuiz = 0;
let score = 0;

function laodQuiz() {
  const { question, option } = quizData[currentQuiz];
  
  questionElm.innerText = ` ${currentQuiz+1}: ${question}`;
  option.forEach(
    (currOption, index) =>
      (window[`option_${index + 1}`].innerText = currOption)
  );
}
laodQuiz();

// Get Selected Answer Function on Button click
function getSelectedOption() {
  let ans_index;
  console.log(answerElm);
  answerElm.forEach((currOption, index) => {
    if (currOption.checked) {
      ans_index = index;
    }
  });
  return ans_index;
}
  function deSelected(){
     return  answerElm.forEach((currElem)=>currElem.checked=false)
  }
submitBtn.addEventListener("click", () => {
  const selectedOptionIndex = getSelectedOption();
 
    if(selectedOptionIndex ===quizData[currentQuiz].correct){
          score++
    }
    currentQuiz++;
    if(currentQuiz< quizData.length){
         deSelected()
        laodQuiz()
    }else{
       quiz.innerHTML=`
       <div class="result">

    <h2>Your Score ${score}/${quizData.length} Correct Answer.</h2>
       <p> 🏆 Congratulation on Completing the quiz!</p>
          <button class="reload-button" onClick = "location.reload()">Play Again ▶</button>
  </div>
       
       ` 
    }
  
      
  console.log(selectedOptionIndex);
});
