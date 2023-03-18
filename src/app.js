const cardArray = [
  {
    name: "rocket",
    icon: "🚀",
  },
  {
    name: "rocket",
    icon: "🚀",
  },
  {
    name: "castle",
    icon: "🏰",
  },
  {
    name: "castle",
    icon: "🏰",
  },
  {
    name: "beer",
    icon: "🍺️",
  },
  {
    name: "beer",
    icon: "🍺",
  },
  {
    name: "island",
    icon: "🏝️",
  },
  {
    name: "island",
    icon: "🏝️",
  },
  {
    name: "mountain",
    icon: "⛰️",
  },
  {
    name: "mountain",
    icon: "⛰️",
  },
  {
    name: "airplane",
    icon: "✈️",
  },
  {
    name: "airplane",
    icon: "✈️",
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

      const card = document.createElement('div');
      card.classList.add('flip-card');
      card.dataset.id = i.toString();

      card.innerHTML = `
        <div class="flip-card-inner">
          <div class="flip-card-front"></div>
          <div class="flip-card-back">${cardArray[i].icon}</div>
        </div>
      `

      card.addEventListener("click", flipcard);
      grid.appendChild(card);
    }
  }

  createBoard();

  // check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll('.flip-card');

    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (cardsChosen[0] === cardsChosen[1]) {

      cards[optionOneId].classList.remove('flip-card--selected');
      cards[optionTwoId].classList.remove('flip-card--selected');
      cards[optionOneId].classList.add('flip-card--matched');
      cards[optionTwoId].classList.add('flip-card--matched');

      cardsWon.push(cards);
    } else {

      cards[optionOneId].classList.remove('flip-card--selected');
      cards[optionTwoId].classList.remove('flip-card--selected');

    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Congratulations! You found them all";
    }
  }

  // flip your card
  function flipcard(e) {
    let target = e.currentTarget,
        cardId = target.getAttribute("data-id");

    if(cardsChosen.length < 2 && !target.classList.contains('flip-card--selected')){
      target.classList.add('flip-card--selected');
      cardsChosen.push(cardArray[cardId].name);
      cardsChosenId.push(cardId);
    } else {
      cardsChosen = [];
      cardsChosenId = [];
    }

      if (cardsChosen.length === 2) {
          setTimeout(checkForMatch, 500);
      }
  }
});
