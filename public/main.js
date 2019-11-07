const qs = (e) => document.querySelector(e)

const ranks = [
  'Ace',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'Jack',
  'Queen',
  'King'
]
const suits = ['Hearts', 'Clubs', 'Spades', 'Diamonds']

const deck = []
const playerHand = []

const getCardValue = (rank) => {
  if (rank === 'Ace') {
    return 11
  } else if (rank === 'King' || rank === 'Queen' || rank === 'Jack') {
    return 10
  } else {
    return parseInt(rank)
  }
}

const main = () => {
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < ranks.length; j++) {
      const card = {
        rank: ranks[j],
        suit: suits[i],
        value: getCardValue(ranks[j])
      }
      deck.push(card)
    }
  }
  for (let i = 0; i < deck.length; i++) {
    const j = Math.floor(Math.random() * 52)
    const temp = deck[i]
    deck[i] = deck[j]
    deck[j] = temp
  }
  console.log(deck)
}

const dealACard = () => {
  const drawnCard = deck.pop()
  playerHand.push(drawnCard)
  const cardLi = document.createElement('li')
  cardLi.textContent = drawnCard.rank + ' of ' + drawnCard.suit
  qs('.player-hand').appendChild(cardLi)

  let sum = 0
  for (let i = 0; i < playerHand.length; i++) {
    sum += playerHand[i].value
  }
  qs('.player-sum').textContent = sum
}
document.addEventListener('DOMContentLoaded', main)
qs('button').addEventListener('click', dealACard)
