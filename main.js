const cardArray = [
  {
    name: "blog",
    img: "img/blog.png",
  },
  {
    name: "blog",
    img: "img/blog.png",
  },
  {
    name: "interview",
    img: "img/interview.png",
  },
  {
    name: "interview",
    img: "img/interview.png",
  },
  {
    name: "meeting",
    img: "img/meeting.png",
  },
  {
    name: "meeting",
    img: "img/meeting.png",
  },
  {
    name: "social",
    img: "img/social.png",
  },
  {
    name: "social",
    img: "img/social.png",
  },
  {
    name: "time",
    img: "img/time.png",
  },
  {
    name: "time",
    img: "img/time.png",
  },
  {
    name: "work",
    img: "img/work.png",
  },
  {
    name: "work",
    img: "img/work.png",
  },
];

document.addEventListener("DOMContentLoaded", () => {


  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector("#grid");
  const resultDisplay = document.querySelector("#result");
  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = [];

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "img/blank.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipcard);
      grid.appendChild(card);
    }
  }

  createBoard();

  // check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      alert("You found a match");
      cards[optionOneId].setAttribute("src", "img/empty.png");
      cards[optionTwoId].setAttribute("src", "img/empty.png");
      cardsWon.push(cards);
    } else {
      cards[optionOneId].setAttribute("src", "img/blank.png");
      cards[optionTwoId].setAttribute("src", "img/blank.png");
      alert("Sorry, try again");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Congratulations! You found them all";
    }
  }

  // flip your card
  function flipcard() {
    var cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }
});
