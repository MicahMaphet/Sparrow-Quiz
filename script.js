window.alert("Click ok if you are ready to start this quiz")
let q1 = 0;
let q2 = 0;
let quiz = "start";
function EndQuiz() {
document.getElementById("score").innerHTML=q1 + q2 + "/2";
  quiz = "end"; //This stops the user from retaking the quiz
}

function Setq1(score) {
  if (quiz == "start") {
    q1 = score;
  } else {
    window.alert("How dare you try to cheat on the quiz")
  }
}
function Setq2(score) {
  if (quiz == "start") {
    q2 = score;
  } else {
    window.alert("How dare you try to cheat on the quiz")
  }
}