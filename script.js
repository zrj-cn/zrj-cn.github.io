const modal = document.querySelector("#wechat-modal");
const openButton = document.querySelector("#wechat-open");
const closeControls = modal.querySelectorAll("[data-modal-close]");
const closeButton = modal.querySelector(".modal-close");
const siteHeader = document.querySelector(".site-header");

function updateHeaderDivider() {
  siteHeader?.classList.toggle("is-scrolled", window.scrollY > 8);
}

updateHeaderDivider();
window.addEventListener("scroll", updateHeaderDivider, { passive: true });

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

const projectVideo = document.querySelector(".publication-video");

if (projectVideo) {
  projectVideo.muted = true;

  const startProjectVideo = () => {
    projectVideo.play().catch(() => {
      // Muted autoplay can still be restricted by a visitor's browser settings.
    });
  };

  if (projectVideo.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) {
    startProjectVideo();
  } else {
    projectVideo.addEventListener("canplay", startProjectVideo, { once: true });
  }
}
