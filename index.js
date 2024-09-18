const questions = [
    {
      question: "What is 2 + 2?",
      answers: [
        { option: "4", result: true },
        { option: "22", result: false },
        { option: "222", result: false },
        { option: "2222", result: false },
      ],
    },
    {
      question: "What does HTML stand for?",
      answers: [
        { option: "Hyperoption Markup Language", result: true },
        { option: "Highoption Machine Language", result: false },
        { option: "Hyperoption Machine Language", result: false },
        { option: "Highoption Markup Language", result: false },
      ],
    },
    {
      question: "Which property is used to change the background color?",
      answers: [
        { option: "color", result: false },
        { option: "bgColor", result: false },
        { option: "background-color", result: true },
        { option: "background", result: false },
      ],
    },
    {
      question: "Inside which HTML element do we put the JavaScript?",
      answers: [
        { option: "<js>", result: false },
        { option: "<javascript>", result: false },
        { option: "<script>", result: true },
        { option: "<scripting>", result: false },
      ],
    },
  ];

//   -------------------------------------------------------------------------------------------------------//

window.onload=()=>{
  let queTitle = document.getElementById("que-title");
  let nextBtn = document.getElementById("next-btn");
  let totalScore = document.getElementById("score");
  let scoreEl = totalScore.getElementsByTagName("span")[0];
  let currentIndex = 0;  //store array index
  let score =0;   //initialize score
  function showQue(){
    if(currentIndex < questions.length){
      queTitle.textContent = questions[currentIndex].question;  //pass que index wisein que title
    }else{
      Swal.fire("No more questions there..");
      currentIndex = 0;
      queTitle.textContent = questions[currentIndex].question;
    }
  }

  showQue();  // display first que by default

    // get options
  let OptionA = document.getElementById("option-a");
  let OptionB = document.getElementById("option-b");
  let OptionC = document.getElementById("option-c");
  let OptionD = document.getElementById("option-d");
  let allOptions = questions[currentIndex].answers;

  // show option answers
  function showAnswer(){
    if(currentIndex < questions.length){ 
      allOptions = questions[currentIndex].answers;  
      OptionA.nextElementSibling.textContent = allOptions[0].option;
      OptionB.nextElementSibling.textContent = allOptions[1].option;
      OptionC.nextElementSibling.textContent = allOptions[2].option;
      OptionD.nextElementSibling.textContent = allOptions[3].option;

      // reset options: uncheck radio buttons
      OptionA.checked  = false;
      OptionB.checked  = false;
      OptionC.checked  = false;
      OptionD.checked  = false;
    } 
  }

  showAnswer()  // display options of first que by default
  scoreEl.style.color = "black";

function selectAns() { 
 if ( //any of four option comes true
      (OptionA.checked && allOptions[0].result) ||
      (OptionB.checked && allOptions[1].result) ||
      (OptionC.checked && allOptions[2].result) ||
      (OptionD.checked && allOptions[3].result)
  ){
    Swal.fire("Correct answer");
    score++;    //increment score when result true 
  }else{
    Swal.fire("Incorrect answer");
    score--;    //decrement score when result false 
  }
  scoreEl.textContent = score;
}

  // click to show ques index wise
  nextBtn.addEventListener("click", ()=>{
    selectAns();
    currentIndex++; //increment index to find next element
    if(currentIndex >= questions.length){
      currentIndex = 0;  //reset index when complete
      score =0;  // reset score
    }
    showQue();      // call function to display que index wise
    showAnswer();
  })
}


