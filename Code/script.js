function getSuggestion() {
  let score = Math.floor(Math.random() * 100);

  let suggestion = "";

  if (score < 40) {
    suggestion = "Start with HTML Basics";
  } else if (score < 70) {
    suggestion = "Practice CSS and Layouts";
  } else {
    suggestion = "Try Advanced JavaScript Challenges";
  }

  document.getElementById("suggestion").innerText = suggestion;
}
