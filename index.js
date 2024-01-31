const quizData = [
  {
    question: "What does HTML stand for?",
    options: [
      "HyperText Markup Language",
      "High-Level Text Machine Language",
      "Hyperlink and Text Management Language",
      "HyperTransfer Markup Language",
    ],
    correct: 0,
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Creative Style Selector",
      "Colorful Styling System",
      "Cascading Style Sheets",
    ],
    correct: 3,
  },

  {
    question: "What does JSON stand for?",
    options: [
      "JavaScript and Object Networking",
      "JavaScript Object Notation",
      "Java Serialized Object Notation",
      " JSON Scripted Object Notation",
    ],
    correct: 1,
  },

  {
    question: "What does HTTP stand for?",
    options: [
      " Hyper Transfer Text Protocol",
      "Hypertext Terminal Protocol",
      "HyperText Transfer Protocol",
      " High-Tech Transmission Process",
    ],
    correct: 2,
  },
  {
    question: "What does URL stand for?",
    options: [
      " Uniform Resource Locator",
      "Universal Resource Locator",
      "Unified Resource Locator",
      " Ultra-Responsive Link",
    ],
    correct: 0,
  },
];
//Initilize the JS part logic
const quiz = document.querySelector("#quiz");
const ansElm = document.querySelectorAll(".answer");
const [questionElm, option1, option2, option3, option4] =
  document.querySelectorAll(
    "#question, .option_1, .option_2, .option_3, .option_4"
  );

const submitBtn = document.getElementById("submit");
//now for tracing the questions and score
let currentQuiz = 0;
let score = 0;
//load quiz function means load the questions and optionsdynamically
const loadQuiz = () => {
  const { question, options } = quizData[currentQuiz]; //destructuring the ques and opt
  questionElm.innerText = question; // setting the question to html
  console.log(question);
  //now we have to get the options and print them using for each loop
  options.forEach(
    (curoption, index) => (window[`option_${index + 1}`].innerText = curoption)
  );
};

loadQuiz();
//now getting thr selected option

const getSelectedOption = () => {
  //note this works good but we can
  //do it in a line of code so
  /* let ans_index;
    ansElm.forEach((curoption, index) => {
      // going through each option
      if (curoption.checked){ ans_index = index;}
    });
    return ans_index; 
  }; 
  */

  //this is shortest as previous
  let ansElement = Array.from(ansElm);
  return ansElement.findIndex((curElem) => curElem.checked);
};

const deselected = () =>
  // function to unchecked the for next ques.
  {
    return ansElm.forEach((curElem) => (curElem.checked = false));
  };

submitBtn.addEventListener("click", () => {
  // event listener for next or submit button
  const selectedOptionIndex = getSelectedOption();
  console.log(selectedOptionIndex);

  if (selectedOptionIndex === quizData[currentQuiz].correct) {
    score += 1; // if ticketd correct  update the score
  }

  currentQuiz++;
  if (currentQuiz < quizData.length) {
    deselected();
    loadQuiz();
  } else {
    quiz.innerHTML = `
       <div class = "result">
       <p> Congratualtions on  completing the Quiz </p>
       <h2>  Your score is ${score}/${quizData.length} correct answer </h2>
       <button class = "reload_btn" onclick = "location.reload()"> Submit Again </button>
       </div>
      `;
  }
});
