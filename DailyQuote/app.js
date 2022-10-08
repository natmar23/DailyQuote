const quotes = [
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
    profession: "Irish poet",
    topics: ["Inspirational", "Advice", "Humor"],
  },
  {
    quote:
      "To live is the rarest thing in the world. Most people exist, that is all.",
    author: "Oscar Wilde",
    profession: "Irish poet",
    topics: ["Philosophy", "Humor"],
  },
  {
    quote:
      "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author: "Mahatma Gandhi",
    profession: "Indian leader",
    topics: ["Inspirational", "Life", "Advice"],
  },
  {
    quote: "No one can make you feel inferior without your consent.",
    author: "Eleanor Roosevelt",
    profession: "Former First Lady of the United States",
    topics: ["Wisdom"],
  },
  {
    quote:
      "Do what you feel in your heart to be right - for you'll be criticized anyway.",
    author: "Eleanor Roosevelt",
    profession: "Former First Lady of the United States",
    topics: ["Wisdom", "Advice"],
  },
  {
    quote: "Do one thing every day that scares you.",
    author: "Eleanor Roosevelt",
    profession: "Former First Lady of the United States",
    topics: ["Wisdom", "Life"],
  },
  {
    quote:
      "Our lives begin to end the day we become silent about things that matter.",
    author: "Martin Luther King",
    profession: "American minister",
    topics: ["Inspirational", "Life"],
  },
  {
    quote:
      "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    author: "Martin Luther King",
    profession: "American minister",
    topics: ["People", "Life"],
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas A. Edison",
    profession: "American inventor",
    topics: ["Inspirational"],
  },
  {
    quote:
      "Genius is one percent inspiration and ninety-nine percent perspiration.",
    author: "Thomas A. Edison",
    profession: "American inventor",
    topics: ["Inspirational", "Wisdom"],
  },
  {
    quote:
      "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    author: "Thomas A. Edison",
    profession: "American inventor",
    topics: ["Inspirational", "Advice"],
  },
  {
    quote:
      "Life isn't about finding yourself. Life is about creating yourself.",
    author: "George Bernard Shaw",
    profession: "Irish playwright",
    topics: ["Inspirational", "Life", "Advice"],
  },
  {
    quote:
      "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
    profession: "Former British Prime Minister",
    topics: ["Inspirational", "Life", "Advice"],
  },
  {
    quote:
      "We make a living by what we get, but we make a life by what we give.",
    author: "Winston Churchill",
    profession: "Former British Prime Minister",
    topics: ["People", "Life"],
  },
  {
    quote: "Peace begins with a smile.",
    author: "Mother Teresa",
    profession: "Roman Catholic Saint",
    topics: ["Inspirational", "Wisdom"],
  },
  {
    quote:
      "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    author: "Mother Teresa",
    profession: "Roman Catholic Saint",
    topics: ["Inspirational", "Love", "Advice"],
  },
  {
    quote:
      "Isn't it nice to think that tomorrow is a new day with no mistakes in it yet?",
    author: "L.M. Montgomery",
    profession: "Canadian author",
    topics: ["Inspirational"],
  },
  {
    quote: "Tomorrow is always fresh, with no mistakes in it.",
    author: "L.M. Montgomery",
    profession: "Canadian author",
    topics: ["Inspirational"],
  },
  {
    quote:
      "We should regret our mistakes and learn from them, but never carry them forward into the future with us.",
    author: "L.M. Montgomery",
    profession: "Canadian author",
    topics: ["Inspirational", "Advice", "Life"],
  },
  {
    quote:
      "All the darkness in the world cannot extinguish the light of a single candle.",
    author: "Francis of Assisi",
    profession: "Italian Catholic Saint",
    topics: ["Inspirational", "Wisdom"],
  },
  {
    quote:
      "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
    author: "Francis of Assisi",
    profession: "Italian Catholic Saint",
    topics: ["Inspirational", "Wisdom"],
  },
  {
    quote: "Preach the Gospel at all times and when necessary use words.",
    author: "Francis of Assisi",
    profession: "Italian Catholic Saint",
    topics: ["Religion", "Wisdom"],
  },
];

const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const profession = document.querySelector(".profession");
const topics = document.querySelector(".topics");

const button = document.querySelector(".button");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  showQuote();
});

function showQuote() {
  const item = quotes[currentItem];
  quote.textContent = item.quote;
  author.textContent = item.author;
  profession.textContent = item.profession;
  topics.textContent = item.topics;
}

button.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * quotes.length);
  showQuote();
});
