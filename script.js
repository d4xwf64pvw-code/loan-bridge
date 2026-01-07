const paymentCheckbox = document.getElementById("paymentConfirm");
const applyBtn = document.getElementById("applyBtn");
const form = document.getElementById("loanForm");
const reviewBox = document.getElementById("reviewBox");

paymentCheckbox.addEventListener("change", () => {
  applyBtn.disabled = !paymentCheckbox.checked;
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  form.classList.add("hidden");
  reviewBox.classList.remove("hidden");
  startCountdown(300); // 5 minutes countdown
});

function startCountdown(seconds) {
  let time = seconds;
  const countdown = document.getElementById("countdown");

  const timer = setInterval(() => {
    let mins = Math.floor(time / 60);
    let secs = time % 60;
    countdown.textContent =
      `${mins.toString().padStart(2,"0")}:${secs.toString().padStart(2,"0")}`;

    if (time <= 0) {
      clearInterval(timer);
      countdown.textContent = "Review in progress...";
    }
    time--;
  }, 1000);
}
