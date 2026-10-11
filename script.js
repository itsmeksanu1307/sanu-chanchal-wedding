const intro = document.getElementById("intro");
const mainInvite = document.getElementById("mainInvite");
document.getElementById("openInvite").addEventListener("click", () => {
  intro.classList.add("reveal");
  window.setTimeout(() => {
    intro.classList.add("hidden");
    mainInvite.classList.remove("hidden");
    mainInvite.classList.add("reveal");
    window.scrollTo({top: 0, behavior: "smooth"});
  }, 450);
});

// Countdown to the start of the wedding date in India (IST).
const weddingDate = new Date("2026-12-11T00:00:00+05:30").getTime();
const pad = n => String(n).padStart(2, "0");
function updateCountdown() {
  const diff = weddingDate - Date.now();
  if (diff <= 0) {
    ["days", "hours", "minutes", "seconds"].forEach(id => document.getElementById(id).textContent = "00");
    document.getElementById("countdownNote").textContent = "Today is the day — let the celebrations begin!";
    return;
  }
  document.getElementById("days").textContent = Math.floor(diff / 86400000);
  document.getElementById("hours").textContent = pad(Math.floor((diff % 86400000) / 3600000));
  document.getElementById("minutes").textContent = pad(Math.floor((diff % 3600000) / 60000));
  document.getElementById("seconds").textContent = pad(Math.floor((diff % 60000) / 1000));
}
updateCountdown();
setInterval(updateCountdown, 1000);

// Gallery modal preview. Replace CSS sample panels with actual photos for a real photo gallery.
const lightbox = document.getElementById("lightbox");
const caption = document.getElementById("lightboxCaption");
document.querySelectorAll(".photo").forEach(photo => photo.addEventListener("click", () => {
  caption.textContent = photo.dataset.caption || "A moment to remember";
  lightbox.classList.remove("hidden");
}));
function closeLightbox() { lightbox.classList.add("hidden"); }
document.getElementById("closeLightbox").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeLightbox(); });

// Audio playback is user-controlled to respect browser autoplay restrictions.
