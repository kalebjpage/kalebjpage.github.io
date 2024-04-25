const hamMenu = document.querySelector('.ham-menu');

const links = document.querySelector('.links');

const logo = document.querySelector('.logo')

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    links.classList.toggle('active');
    logo.classList.toggle('active');
})

function toggleAnswerDisplay(questionNumber) {
    const answer = document.querySelector('.answer' + questionNumber)

    if (answer.style.display === "none") {
      answer.style.display = "block";
    } else {
      answer.style.display = "none";
    }
  }