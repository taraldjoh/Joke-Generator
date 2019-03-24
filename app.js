// Event Listeners
document.querySelector(".get-jokes").addEventListener("click", getJokes);

// GetJokes Function
function getJokes(e) {
  // Grab Number
  const number = document.querySelector("input[type =number]").value;

  // AJAX Request
  const xhr = new XMLHttpRequest();

  // Open AJAX GET Request For External Joke API
  xhr.open("GET", `http://api.icndb.com/jokes/random/${number}`, true);

  // OnLoad
  xhr.onload = function() {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);

      // Output jokes to DOM
      let output = "";

      if (response.type === "success") {
        response.value.forEach(function(joke) {
          output += `<li>${joke.joke}</li>`;
        });
      } else {
        output += "<li>Something Went Wrong...</li>";
      }

      // Insert HTML
      document.querySelector(".jokes").innerHTML = output;
    }
  };

  // Send
  xhr.send();

  e.preventDefault();
}
