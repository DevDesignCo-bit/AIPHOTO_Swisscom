const loop = document.querySelector(".media video");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function updatePlayback() {
  if (reducedMotion.matches) {
    loop.pause();
    return;
  }
  loop.play().catch(() => {
    // The video poster stays visible when autoplay is blocked.
  });
}

if (loop) {
  updatePlayback();
  reducedMotion.addEventListener("change", updatePlayback);
}
