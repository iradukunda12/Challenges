const questions = [
  {
    question: "What is the capital of France?",
    choices: ["London", "Paris", "Madrid"],
    answer: "Paris"
  },
  {
    question: "What is the largest planet in our solar system?",
    choices: ["Earth", "Jupiter", "Mars"],
    answer: "Jupiter"
  },
  {
    question: "What is the smallest country in the world?",
    choices: ["Monaco", "Vatican City", "San Marino"],
    answer: "Vatican City"
  }
];
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
function runQuiz() {
  let score = 0;
  shuffle(questions);
  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    console.log(question.question);
    shuffle(question.choices);
    for (let j = 0; j < question.choices.length; j++) {
      console.log(`${j + 1}. ${question.choices[j]}`);
    }
    const userAnswer = prompt("Enter the number of your answer:");
    if (userAnswer === null) {
      break;
    }
    const index = parseInt(userAnswer) - 1;
    if (question.choices[index] === question.answer) {
      console.log("Correct!");
      score++;
    } else {
      console.log(`Wrong! The correct answer is ${question.answer}.`);
    }
  }
  console.log(`Your final score is ${score} out of ${questions.length}.`);
}
runQuiz();