const data = [
  {
    id: 1,
    question: "Which of these is a machine learning algorithm?",
    answers: [
      { answer: "Linear Regression", isCorrect: true },
      { answer: "Bubble Sort", isCorrect: false },
      { answer: "Quick Sort", isCorrect: false },
      { answer: "Binary Search", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "A neural network consists of:",
    answers: [
      { answer: "Nodes", isCorrect: true },
      { answer: "Blocks", isCorrect: false },
      { answer: "Clusters", isCorrect: false },
      { answer: "Frames", isCorrect: false },
    ],
  },
  {
    id: 3,
    question: "What does NLP stand for?",
    answers: [
      { answer: "Natural Language Processing", isCorrect: true },
      { answer: "Neural Language Processing", isCorrect: false },
      { answer: "Natural Learning Program", isCorrect: false },
      { answer: "Neural Learning Program", isCorrect: false },
    ],
  },
  {
    id: 4,
    question: "Which algorithm is used for image recognition?",
    answers: [
      { answer: "Convolutional Neural Network", isCorrect: true },
      { answer: "Linear Regression", isCorrect: false },
      { answer: "Decision Tree", isCorrect: false },
      { answer: "K-means Clustering", isCorrect: false },
    ],
  },
  {
    id: 5,
    question: "What is a common application of reinforcement learning?",
    answers: [
      { answer: "Game Playing", isCorrect: true },
      { answer: "Image Classification", isCorrect: false },
      { answer: "Spam Detection", isCorrect: false },
      { answer: "Speech Recognition", isCorrect: false },
    ],
  },
  {
    id: 6,
    question: "What is the purpose of a loss function in machine learning?",
    answers: [
      { answer: "To measure the error of the model", isCorrect: true },
      { answer: "To split the data", isCorrect: false },
      { answer: "To optimize the model", isCorrect: false },
      { answer: "To normalize the data", isCorrect: false },
    ],
  },
  {
    id: 7,
    question: "Which concept is used to handle sequential data?",
    answers: [
      { answer: "Recurrent Neural Network", isCorrect: true },
      { answer: "Convolutional Neural Network", isCorrect: false },
      { answer: "Support Vector Machine", isCorrect: false },
      { answer: "Random Forest", isCorrect: false },
    ],
  },
  {
    id: 8,
    question: "Which type of learning uses labeled data?",
    answers: [
      { answer: "Supervised Learning", isCorrect: true },
      { answer: "Unsupervised Learning", isCorrect: false },
      { answer: "Reinforcement Learning", isCorrect: false },
      { answer: "Self-supervised Learning", isCorrect: false },
    ],
  },
  {
    id: 9,
    question: "Which AI concept involves training on data to make predictions?",
    answers: [
      { answer: "Machine Learning", isCorrect: true },
      { answer: "Data Mining", isCorrect: false },
      { answer: "Robotics", isCorrect: false },
      { answer: "Human-Computer Interaction", isCorrect: false },
    ],
  },
  {
    id: 10,
    question: "What is a neural network?",
    answers: [
      { answer: "A model inspired by the human brain", isCorrect: true },
      { answer: "A database structure", isCorrect: false },
      { answer: "A type of hardware", isCorrect: false },
      { answer: "A software framework", isCorrect: false },
    ],
  },
];

const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const question = document.querySelector(".question");
const answersContainer = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const play = document.querySelector(".play");

let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswer;

const playAgain = () => {
  qIndex = 0;
  correctCount = 0;
  wrongCount = 0;
  total = 0;
  showQuestion(qIndex);
};

play.addEventListener("click", () => {
  resultScreen.style.display = "none";
  gameScreen.style.display = "block";
  playAgain();
});

const showResult = () => {
  resultScreen.style.display = "block";
  gameScreen.style.display = "none";

  resultScreen.querySelector(
    ".correct"
  ).textContent = `Correct Answers: ${correctCount}`;

  resultScreen.querySelector(
    ".wrong"
  ).textContent = `Wrong Answers: ${wrongCount}`;

  resultScreen.querySelector(".score").textContent = `Score: ${
    (data.length - wrongCount) * 10
  }`;
};

const showQuestion = (qNumber) => {
  if (qIndex === data.length) return showResult();
  selectedAnswer = null;
  question.textContent = data[qNumber].question;
  answersContainer.innerHTML = data[qNumber].answers
    .map(
      (item, index) =>
        `
  <div class="answer">
      <input type="radio" id=${index} name="answer" value=${item.isCorrect} />
      <label for="1">${item.answer}</label>
  </div>
  `
    )
    .join("");

  selectAnswer();
};

const selectAnswer = () => {
  answersContainer.querySelectorAll("input").forEach((el) => {
    el.addEventListener("click", (e) => {
      selectedAnswer = e.target.value;
    });
  });
};

const submitAnswer = () => {
  submit.addEventListener("click", () => {
    if (selectedAnswer !== null) {
      selectedAnswer === "true" ? correctCount++ : wrongCount++;
      qIndex++;
      showQuestion(qIndex);
    } else alert("Select an answer!");
  });
};

showQuestion(qIndex);
submitAnswer();
