const qs = (e) => document.querySelector(e)

const ranks = [
  { name: 'A' },
  { name: '2' },
  { name: '3' },
  { name: '4' },
  { name: '5' },
  { name: '6' },
  { name: '7' },
  { name: '8' },
  { name: '9' },
  { name: '10' },
  { name: 'J' },
  { name: 'Q' },
  { name: 'K' }
]
const suits = ['Hearts ♥️', 'Clubs ♣️', 'Spades ♠️', 'Diamonds ♦️']

const deck = []

const main = () => {
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < ranks.length; j++) {
      const card = {
        rank: ranks[j],
        suits: suits[i],
        value: values[j]
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

document.addEventListener('DOMContentLoaded', main)
qs('button').addEventListener('click', dealACard)
