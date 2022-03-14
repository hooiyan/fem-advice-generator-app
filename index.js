const baseURL = "	https://api.adviceslip.com/advice"
const adviceID = document.querySelector(".advice-id")
const adviceContent = document.querySelector(".advice-content")
const getAdvice = document.querySelector(".dice")

getAdvice.addEventListener("click", () => {
  fetch(baseURL)
    .then(response => response.json())
    .then(data => {
      adviceID.innerText = data.slip.id,
      adviceContent.innerText = data.slip.advice
    })
  })
