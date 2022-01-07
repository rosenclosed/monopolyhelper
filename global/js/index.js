const btnSubmitContainer = document.querySelector("form");
const btnSubmit = document.getElementById("start-button");

btnSubmitContainer.addEventListener("submit", (e) => {
    e.preventDefault();
    window.location.href = "./app/";
})