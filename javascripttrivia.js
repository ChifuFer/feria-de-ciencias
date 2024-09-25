function checkAnswers() {
    var answers = {
      q1: document.querySelector('input[name="q1"]:checked').value,
      q2: document.querySelector('input[name="q2"]:checked').value,
      q3: document.querySelector('input[name="q3"]:checked').value,
      q4: document.querySelector('input[name="q4"]:checked').value,
      q5: document.querySelector('input[name="q5"]:checked').value,
      q6: document.querySelector('input[name="q6"]:checked').value
    };
    
    var correctAnswers = {
      q1: "a",
      q2: "c",
      q3: "c",
      q4: "b",
      q5: "b",
      q6: "b"
    };
    
    var score = 0;
    for (var key in answers) {
      if (answers[key] === correctAnswers[key]) {
        score++;
      }
    }
    
    var resultText = "Obtuviste " + score + " de 6 preguntas correctas.";
    document.getElementById("result").textContent = resultText;
  }

  