const baseURL = "	https://api.adviceslip.com/advice"
const adviceID = document.querySelector(".advice-id")
const adviceContent = document.querySelector(".advice-content")
const dice = document.querySelector(".dice")
const randomizeBtn = document.querySelector(".randomize-btn")
const diceIcon = `<img class="dice" src="./images/icon-dice.svg" alt="dice icon">`

function disableButton() {
  dice.remove()
  randomizeBtn.disabled = true
  randomizeBtn.classList.add("disabled")
}

function enableButton() {
  randomizeBtn.innerHTML = diceIcon
  randomizeBtn.disabled = false
  randomizeBtn.classList.remove("disabled")
}

function showCount(i) {
  randomizeBtn.innerHTML = `<span>${i}</span>`
}

function countdown(seconds) {
  let counter = seconds
  showCount(counter)

  const timer = setInterval(() => {
    counter--
    showCount(counter)
  }, 1000);

  setTimeout(() => {
    clearInterval(timer)
    enableButton()
    counter = seconds
  }, (seconds * 1000));
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
  countdown(2)
}

randomizeBtn.addEventListener("click", getRandomAdvice)
