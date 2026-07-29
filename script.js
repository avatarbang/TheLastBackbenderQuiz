
const switchButtons = document.querySelectorAll(".switch-btn");
const questionView = document.getElementById("questionView");
const resultView = document.getElementById("resultView");

switchButtons.forEach((button) => {
  button.addEventListener("click", () => {
    switchButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    const showResult = button.dataset.view === "result";
    questionView.classList.toggle("hidden", showResult);
    resultView.classList.toggle("hidden", !showResult);
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

document.querySelectorAll(".answer-card").forEach((card) => {
  card.addEventListener("click", () => {
    document.querySelectorAll(".answer-card").forEach((item) => item.classList.remove("selected"));
    card.classList.add("selected");
  });
});
