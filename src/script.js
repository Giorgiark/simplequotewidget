const quotes = [
  {
    text: "Life is 10% what happens to you and 90% how you react to it.",
    author: "Charles R. Swindoll"
  },
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela"
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    text: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.",
    author: "Steve Jobs"
  },
  {
    text: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    author: "Oprah Winfrey"
  }
];

const quoteText = document.getElementById("text");
const quoteAuthor = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteText.innerText = quotes[randomIndex].text;
  quoteAuthor.innerText = quotes[randomIndex].author;
}

getRandomQuote();

newQuoteBtn.addEventListener("click", getRandomQuote);

// Hide/show the setting button
const settingButton = document.getElementById("setting");

// When the setting button is clicked, show the modal
settingButton.addEventListener("click", function() {
  modal.style.display = "block";
});

document.addEventListener("click", revealButton);
document.addEventListener("mousemove", revealButton);

function revealButton() {
  settingButton.style.display = "block";
  setTimeout(hideButton, 2000);
}

function hideButton() {
  settingButton.style.display = "none";
}
