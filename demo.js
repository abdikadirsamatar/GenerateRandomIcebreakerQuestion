function generateIcebreaker() {
  const questions = [
    "abdi",
    "uriel",
    "kayla",
    "brett",
    "alfi",
    "kaaliyah",
    "victor",
    "kadi",
    "daniel",
    "remsey",
    "rene",
  ];

  // Randomly select a question
  const index = Math.floor(Math.random() * questions.length);

  document.getElementById("displayQuestion").innerHTML = questions[index];
  // return questions[index];
}

// Example usage:
let thequestion = generateIcebreaker();
