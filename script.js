const modal = document.querySelector("#wechat-modal");
const openButton = document.querySelector("#wechat-open");
const closeControls = modal.querySelectorAll("[data-modal-close]");
const closeButton = modal.querySelector(".modal-close");

let previouslyFocusedElement = null;

function openModal() {
  previouslyFocusedElement = document.activeElement;
  modal.hidden = false;
  document.body.classList.add("modal-open");
  closeButton.focus();
}

function closeModal() {
  modal.hidden = true;
  document.body.classList.remove("modal-open");
  previouslyFocusedElement?.focus();
}

openButton.addEventListener("click", openModal);

closeControls.forEach((control) => {
  control.addEventListener("click", closeModal);
});

document.addEventListener("keydown", (event) => {
  if (modal.hidden) return;

  if (event.key === "Escape") {
    closeModal();
    return;
  }

  if (event.key === "Tab") {
    event.preventDefault();
    closeButton.focus();
  }
});
