const questionBtns = document.querySelectorAll(".question");

questionBtns.forEach(button => {
  button.addEventListener("click", () => {
    if (button.nextElementSibling.dataset.close == "false") {
      button.nextElementSibling.dataset.close = "true";
      button.classList.remove("open-menu");
    } else if (button.nextElementSibling.dataset.close == "true") {
      button.nextElementSibling.dataset.close = "false";
      button.classList.add("open-menu");
    }
  });
});
