const baseURL = "	https://api.adviceslip.com/advice"
const adviceID = document.querySelector(".advice-id")
const adviceContent = document.querySelector(".advice-content")
const dice = document.querySelector(".dice")
const randomizeBtn = document.querySelector(".randomize-btn")
const diceIcon = `<img class="dice" src="./images/icon-dice.svg" alt="dice icon">`

let counter = 2

function countdown() {
  const timer = setInterval(() => {
    counter--
    randomizeBtn.innerHTML = `<span>${counter}</span>`
  }, 1000);

  setTimeout(() => {
    clearInterval(timer)
    randomizeBtn.disabled = false
    randomizeBtn.classList.remove("disabled")
    randomizeBtn.innerHTML = diceIcon
    counter = 2
  }, 2000);
}

function disableButton() {
  dice.remove()
  randomizeBtn.disabled = true
  randomizeBtn.classList.add("disabled")
  randomizeBtn.innerHTML = `<span>${counter}</span>`
}

function getRandomAdvice() {
  fetch(baseURL)
  .then(response => response.json())
  .then(data => {
    adviceID.innerText = data.slip.id,
    adviceContent.innerText = data.slip.advice
  })
  .catch(err => console.log(err))

  disableButton()
  countdown()
}

randomizeBtn.addEventListener("click", getRandomAdvice)
