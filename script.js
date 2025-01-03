const keys = document.querySelectorAll(".key"),
  note = document.querySelector(".nowplaying"),
  hints = document.querySelectorAll(".hints");

function playNoteHandler(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`),
    key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!key) return;

  const keyNote = key.getAttribute("data-note");

  key.classList.add("playing");
  note.textContent = keyNote;
  audio.currentTime = 0;
  audio.play();
}

function removeTransitionHandler(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

function applyHintsDelay(hint, index) {
  hint.style.transitionDelay = `${index * 50}ms`;
}

hints.forEach(applyHintsDelay);

keys.forEach(key => key.addEventListener("transitionend", removeTransitionHandler));
window.addEventListener("keydown", playNoteHandler);
