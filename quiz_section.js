// function hideSections() {
//     var sections = document.getElementsByClassName('section');
//     var quizBox = document.getElementById('quizBox');
//     for (var i = 0; i < sections.length; i++) {
//       sections[i].style.display = 'none';
//     }
//     quizBox.style.display = 'block';
//   }

//   var sections = document.getElementsByClassName('section');
//   var quizBox = document.getElementById('quizBox');
// for (var i = 0; i < sections.length; i++) {
//   sections[i].addEventListener('click', function() {
//     var sectionId = this.id;
//     if (sectionId === 'html_section') {
//       var paragraph = document.createElement('p');
//       paragraph.textContent = 'New paragraph created.';
//       document.body.appendChild(paragraph);
//     }
//   });
// }

var htmlSection = document.getElementById('html_section');
var cssSection = document.getElementById('css_section');
var jsSection = document.getElementById('js_section');
var heading = document.getElementById('heading');
var quiz_question = document.getElementById('quiz_question');
var quiz_options = document.getElementById('quiz_options');
var nextButton = document.getElementById('next_button');
var submitButton = document.getElementById('submit_button');
var totalScore = 0;
var scorecontainer = document.getElementById('score-container');
var finalscoretext = document.getElementById('finalscoretext');
var passorfail = document.getElementById('passorfail');
var okbutton = document.getElementById('okbutton');
var timer = document.getElementById('timer');
const timerDisplay = document.getElementById('timerpara');

let seconds = 15;
let timerInterval;

// Function to start the timer
function startTimer() {

  // Function to update the timer display
  function updateTimer() {
    timerDisplay.textContent = seconds;
    seconds--;

    // Stop the timer when it reaches 0
    if (seconds < 0) {
      clearInterval(timerInterval);
      timerDisplay.textContent = "0";
      nextButton.click();
    }
  }
  // Clear the previous interval if it exists
  clearInterval(timerInterval);

  // Start the new interval
  timerInterval = setInterval(updateTimer, 1000);
}




okbutton.addEventListener('click', function () {
  window.location.href = "quiz_section.html";
});


function hideAllSections() {
  htmlSection.style.display = 'none';
  cssSection.style.display = 'none';
  jsSection.style.display = 'none';
}

function displayQuizBox() {
  var quizBox = document.getElementById('quizBox');
  quizBox.style.display = 'flex';
}

// html questions here    

htmlSection.addEventListener('click', function () {
  startTimer();
  hideAllSections();
  displayQuizBox();
  heading.innerHTML = "HTML Questions";

  var questionNumber = 1;
  var questions_html = [
    {
      question: "<strong>Question 1</strong>. What does HTML stand for?",
      options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyper Text Makeup Language"],
      answer: "A"
    },
    {
      question: "<strong>Question 2</strong>. Which tag is used to define an unordered list in HTML?",
      options: ["&lt;ol&gt;", "&lt;ul&gt;", "&lt;li&gt;", "&lt;dl&gt;"],
      answer: "B"
    },
    {
      question: "<strong>Question 3</strong>. Which attribute is used to specify the URL of a linked resource in HTML?",
      options: ["href", "src", "alt", "link"],
      answer: "A"
    },
    {
      question: "<strong>Question 4</strong>. Which HTML element is used to define a table row?",
      options: ["&lt;th&gt;", "&lt;tr&gt;", "&lt;td&gt;", "&lt;table&gt;"],
      answer: "B"
    },
    {
      question: "<strong>Question 5</strong>. What is the correct HTML tag for inserting a line break?",
      options: ["&lt;linebreak&gt;", "&lt;break&gt;", "&lt;br&gt;", "&lt;lb&gt;"],
      answer: "C"
    },
  ];


  function loadQuestion() {
    timer.style.display = 'flex';
    var currentQuestion = questions_html[questionNumber - 1];
    if (questionNumber == 5) {
      setTimeout(function () {
        timer.style.display = 'none';
        submitButton.click();
      }, 15000);
    }

    quiz_question.innerHTML = currentQuestion.question;

    quiz_options.innerHTML = "";
    for (var i = 0; i < currentQuestion.options.length; i++) {
      var option = currentQuestion.options[i];
      var label = document.createElement('label');
      label.innerHTML = `
          <input type="radio" name="answer" value="${String.fromCharCode(65 + i)}">
          ${option}
        `;
      quiz_options.appendChild(label);
    }
  }

  nextButton.addEventListener('click', function () {

    seconds = 15;
    startTimer();

    submitButton.disabled = false;
    if (questionNumber < questions_html.length) {
      questionNumber++;
      loadQuestion();
    }
  });

  loadQuestion();

  submitButton.addEventListener('click', function () {
    seconds = 15;
    clearInterval(timerInterval);
    timerDisplay.textContent = '15';
    timer.style.display = 'none';

    submitButton.disabled = true;
    var currentQuestion = questions_html[questionNumber - 1];

    if (questionNumber == 5) {
      console.log("End");
      setTimeout(function () {
        nextButton.style.display = 'none'; // Trigger the click event
        quizBox.style.display = 'none';
        timer.style.display = 'none';
        scorecontainer.style.display = 'flex';
        finalscoretext.innerHTML = "Your final score is : " + totalScore;
        if (totalScore <= 3) {
          passorfail.innerHTML = "Fail";
          passorfail.style.color = 'red';
        }
        else {
          passorfail.innerHTML = "Passed";
          passorfail.style.color = 'green';
        }
      }, 3000);
    }

    var correctAnswer = currentQuestion.answer;
    console.log(correctAnswer);

    // Check answer for question 1
    var selectedAnswer = document.querySelector('input[name="answer"]:checked').value;
    console.log(selectedAnswer);

    if (selectedAnswer === correctAnswer) {
      document.querySelector('input[name="answer"][value="' + selectedAnswer + '"]').parentNode.style.color = "green";
      totalScore++;
      console.log("Total score: " + totalScore);
    }
    else {
      document.querySelector('input[name="answer"][value="' + selectedAnswer + '"]').parentNode.style.color = "red";
      document.querySelector('input[name="answer"][value="' + correctAnswer + '"]').parentNode.style.color = "green";
      console.log("Total score: " + totalScore);
    }


    // setTimeout(function() {
    //   nextButton.click(); // Trigger the click event
    // }, 5000); 
  });


});


// css questions here

cssSection.addEventListener('click', function () {
  startTimer();
  hideAllSections();
  displayQuizBox();

  heading.innerHTML = "CSS Questions";

  var questionNumber = 1;
  var questions_css = [
    {
      question: "<strong>Question 1</strong>. Which of the following is used to apply styles directly to an HTML element?",
      options: ["Inline styles", "Internal styles", "External styles", "None of the above"],
      answer: "A"
    },
    {
      question: "<strong>Question 2</strong>. Which CSS property is used to change the text color of an element?",
      options: ["font-size", "color", "background-color", "text-align"],
      answer: "B"
    },
    {
      question: "<strong>Question 3</strong>. How can you select an element with the class 'example' in CSS?",
      options: ["#example", ".example", "example", "*example"],
      answer: "B"
    },
    {
      question: "<strong>Question 4</strong>. Which CSS property is used to add spacing between elements?",
      options: ["padding", "border", "margin", "spacing"],
      answer: "C"
    },
    {
      question: "<strong>Question 5</strong>. How can you make a background image repeat horizontally in CSS?",
      options: ["background-repeat: none;", "background-repeat: vertical;", "background-repeat: horizontal;", "background-repeat: repeat-x;"],
      answer: "D"
    },
  ];



  function loadQuestion() {
    timer.style.display = 'flex';
    var currentQuestion = questions_css[questionNumber - 1];
    if (questionNumber == 5) {
      setTimeout(function () {
        timer.style.display = 'none';
        submitButton.click();
      }, 15000);
    }

    quiz_question.innerHTML = currentQuestion.question;

    quiz_options.innerHTML = "";
    for (var i = 0; i < currentQuestion.options.length; i++) {
      var option = currentQuestion.options[i];
      var label = document.createElement('label');
      label.innerHTML = `
          <input type="radio" name="answer" value="${String.fromCharCode(65 + i)}">
          ${option}
        `;
      quiz_options.appendChild(label);
    }
  }

  nextButton.addEventListener('click', function () {

    seconds = 15;
    startTimer();

    submitButton.disabled = false;
    if (questionNumber < questions_css.length) {
      questionNumber++;
      loadQuestion();
    }
  });

  loadQuestion();

  submitButton.addEventListener('click', function () {
    seconds = 15;
    clearInterval(timerInterval);
    timerDisplay.textContent = '15';
    timer.style.display = 'none';

    submitButton.disabled = true;
    var currentQuestion = questions_css[questionNumber - 1];

    if (questionNumber == 5) {
      console.log("End");
      setTimeout(function () {
        nextButton.style.display = 'none'; // Trigger the click event
        quizBox.style.display = 'none';
        timer.style.display = 'none';
        scorecontainer.style.display = 'flex';
        finalscoretext.innerHTML = "Your final score is : " + totalScore;
        if (totalScore <= 3) {
          passorfail.innerHTML = "Fail";
          passorfail.style.color = 'red';
        }
        else {
          passorfail.innerHTML = "Passed";
          passorfail.style.color = 'green';
        }
      }, 3000);
    }

    var correctAnswer = currentQuestion.answer;
    console.log(correctAnswer);

    // Check answer for question 1
    var selectedAnswer = document.querySelector('input[name="answer"]:checked').value;
    console.log(selectedAnswer);

    if (selectedAnswer === correctAnswer) {
      document.querySelector('input[name="answer"][value="' + selectedAnswer + '"]').parentNode.style.color = "green";
      totalScore++;
      console.log("Total score: " + totalScore);
    }
    else {
      document.querySelector('input[name="answer"][value="' + selectedAnswer + '"]').parentNode.style.color = "red";
      document.querySelector('input[name="answer"][value="' + correctAnswer + '"]').parentNode.style.color = "green";
      console.log("Total score: " + totalScore);
    }
  });

});

// js questions here

jsSection.addEventListener('click', function () {
  startTimer();
  hideAllSections();
  displayQuizBox();

  heading.innerHTML = "JAVASCRIPT Questions";

  var questionNumber = 1;
  var questions_js = [
    {
      question: "<strong>Question 1</strong>. What is the correct syntax to access the element with the id 'myElement' using JavaScript?",
      options: ["document.getElementById('myElement');", "getElementById('myElement');", "#myElement;", ".getElementById('myElement');"],
      answer: "A"
    },
    {
      question: "<strong>Question 2</strong>. Which method is used to add an element at the end of an array in JavaScript?",
      options: ["concat()", "pop()", "push()", "slice()"],
      answer: "C"
    },
    {
      question: "<strong>Question 3</strong>. What is the result of the following expression in JavaScript? typeof null;",
      options: ["null", "object", "undefined", "number"],
      answer: "B"
    },
    {
      question: "<strong>Question 4</strong>. Which keyword is used to declare a variable in JavaScript?",
      options: ["var", "let", "const", "all of the above"],
      answer: "D"
    },
    {
      question: "<strong>Question 5</strong>. Which built-in method can be used to convert a string to uppercase in JavaScript?",
      options: ["toUpperCase()", "upperCase()", "convertToUpper()", "changeCase('upper')"],
      answer: "A"
    },
  ];



  function loadQuestion() {
    timer.style.display = 'flex';
    var currentQuestion = questions_js[questionNumber - 1];
    if (questionNumber == 5) {
      setTimeout(function () {
        timer.style.display = 'none';
        submitButton.click();
      }, 15000);
    }

    quiz_question.innerHTML = currentQuestion.question;

    quiz_options.innerHTML = "";
    for (var i = 0; i < currentQuestion.options.length; i++) {
      var option = currentQuestion.options[i];
      var label = document.createElement('label');
      label.innerHTML = `
          <input type="radio" name="answer" value="${String.fromCharCode(65 + i)}">
          ${option}
        `;
      quiz_options.appendChild(label);
      if (questionNumber == 1) {
      if (window.innerWidth <= 400) {
          label.style.fontSize = '10px';
        }
      }
    }
  }

  nextButton.addEventListener('click', function () {

    seconds = 15;
    startTimer();

    submitButton.disabled = false;
    if (questionNumber < questions_js.length) {
      questionNumber++;
      loadQuestion();
    }
  });

  loadQuestion();

  submitButton.addEventListener('click', function () {
    seconds = 15;
    clearInterval(timerInterval);
    timerDisplay.textContent = '15';
    timer.style.display = 'none';

    submitButton.disabled = true;
    var currentQuestion = questions_js[questionNumber - 1];

    if (questionNumber == 5) {
      console.log("End");
      setTimeout(function () {
        nextButton.style.display = 'none'; // Trigger the click event
        quizBox.style.display = 'none';
        timer.style.display = 'none';
        scorecontainer.style.display = 'flex';
        finalscoretext.innerHTML = "Your final score is : " + totalScore;
        if (totalScore <= 3) {
          passorfail.innerHTML = "Fail";
          passorfail.style.color = 'red';
        }
        else {
          passorfail.innerHTML = "Passed";
          passorfail.style.color = 'green';
        }
      }, 3000);
    }

    var correctAnswer = currentQuestion.answer;
    console.log(correctAnswer);

    // Check answer for question 1
    var selectedAnswer = document.querySelector('input[name="answer"]:checked').value;
    console.log(selectedAnswer);

    if (selectedAnswer === correctAnswer) {
      document.querySelector('input[name="answer"][value="' + selectedAnswer + '"]').parentNode.style.color = "green";
      totalScore++;
      console.log("Total score: " + totalScore);
    }
    else {
      document.querySelector('input[name="answer"][value="' + selectedAnswer + '"]').parentNode.style.color = "red";
      document.querySelector('input[name="answer"][value="' + correctAnswer + '"]').parentNode.style.color = "green";
      console.log("Total score: " + totalScore);
    }
  });

});










