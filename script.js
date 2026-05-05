let questions = {
  qa: [
    "What is Software Testing?",
    "What is Bug Life Cycle?",
    "Difference between Smoke and Sanity Testing?"
  ],

  pm: [
    "What is Project Management?",
    "How do you handle deadlines?",
    "What is Risk Management?"
  ],

  dev: [
    "What is HTML?",
    "Difference between Java and JavaScript?",
    "What is API?"
  ]
};

let selectedDomain = "";
let currentQuestion = 0;

function startInterview() {
  selectedDomain = document.getElementById("domain").value;

  if (selectedDomain === "") {
    alert("Please select domain");
    return;
  }

  currentQuestion = 0;
  showQuestion();
}

function showQuestion() {
  document.getElementById("questionBox").innerHTML =
    questions[selectedDomain][currentQuestion];

  document.getElementById("answer").value = "";
  document.getElementById("result").innerHTML = "";
}

function submitAnswer() {
  let answer = document.getElementById("answer").value;

  if (answer === "") {
    alert("Please write answer");
    return;
  }

  let score = Math.floor(Math.random() * 5) + 6;

  let feedback = "";

  if (score >= 8) {
    feedback = "Excellent Answer!";
  } else if (score >= 6) {
    feedback = "Good Answer, Improve more.";
  } else {
    feedback = "Need Improvement.";
  }

  document.getElementById("result").innerHTML =
    "Score: " + score + "/10 <br><br>" + feedback;

  currentQuestion++;

  if (currentQuestion < questions[selectedDomain].length) {
    setTimeout(showQuestion, 2000);
  } else {
    setTimeout(function () {
      document.getElementById("questionBox").innerHTML =
        "Interview Completed 🎉";
      document.getElementById("answer").style.display = "none";
    }, 2000);
  }
}