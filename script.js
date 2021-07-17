function loadNextQuote() {
  location.reload();
  return false;
}

fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("quote").textContent = data[0].quote;
    document.getElementById("author").textContent = data[0].author;
  });
