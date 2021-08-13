const h1El = document.querySelector('h1')
const btn = document.getElementById('btn')
const dice1 = document.getElementById('dice1')
const dice2 = document.getElementById('dice2')


btn.addEventListener('click', btnEl)

function btnEl() {
  let random1 = Math.floor(Math.random() * 6) + 1
  let random2 = Math.floor(Math.random() * 6) + 1

  dice1.src = `images/dice${random1}.png`
  dice2.src = `images/dice${random2}.png`

  if (random1 > random2) {
    h1El.textContent = 'Player 1 Won !'
  } else if (random2 > random1) {
    h1El.textContent = 'Player 2 Won !'
  } else {
    h1El.textContent = 'Draw !'
  }
}