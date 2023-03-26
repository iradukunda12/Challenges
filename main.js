// Define the quiz questions and answers
const quizQuestions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "Madrid", "Rome", "Berlin"],
      answer: "Paris"
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Jupiter", "Saturn", "Neptune", "Uranus"],
      answer: "Jupiter"
    },
    {
      question: "What is the highest mountain in the world?",
      options: ["Mount Kilimanjaro", "Mount Everest", "Mount Denali", "Mount Fuji"],
      answer: "Mount Everest"
    }
  ];
  
  // Define a function to shuffle the quiz questions array
  function shuffleQuestions(questions) {
    for (let i = questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [questions[i], questions[j]] = [questions[j], questions[i]];
    }
    return questions;
  }
  
  // Define a function to start the quiz
  function startQuiz() {
    // Shuffle the quiz questions array
    shuffleQuestions(quizQuestions);
  
    // Initialize the score
    let score = 0;
  
    // Loop through each quiz question and prompt the user for an answer
    for (let i = 0; i < quizQuestions.length; i++) {
      const question = quizQuestions[i].question;
      const options = quizQuestions[i].options;
      const answer = quizQuestions[i].answer;
  
      // Shuffle the answer options
      const shuffledOptions = shuffleQuestions(options.slice());
  
      // Prompt the user with the randomized question and answer options
      const userAnswer = prompt(
        `${i+1}. ${question}\n\n${shuffledOptions.join('\n')}`
      );
  
      // Check if the user's answer is correct and increment the score
      if (userAnswer === answer) {
        alert("Correct!");
        score++;
      } else {
        alert(`Incorrect! The correct answer was ${answer}.`);
      }
    }
  
    // Display the final score to the user
    alert(`Quiz complete! You scored ${score} out of ${quizQuestions.length}.`);
  }
  
  // Call the startQuiz function to begin the quiz
  startQuiz();
  