const paymentCheckbox = document.getElementById("paymentConfirm");
const applyBtn = document.getElementById("applyBtn");
const form = document.getElementById("loanForm");
const reviewBox = document.getElementById("reviewBox");
const emailBtn = document.querySelector(".email-btn");

// Initial state
applyBtn.disabled = true;
paymentCheckbox.disabled = true;

// Enable checkbox ONLY after email button is clicked
emailBtn.addEventListener("click", () => {
  paymentCheckbox.disabled = false;
  alert("Email app opened. Please send your payment proof, then confirm.");
});

// Enable Apply button ONLY after checkbox is checked
paymentCheckbox.addEventListener("change", () => {
  applyBtn.disabled = !paymentCheckbox.checked;
});

// Handle form submit
form.addEventListener("submit", function (e) {
  e.preventDefault();
  form.classList.add("hidden");
  reviewBox.classList.remove("hidden");
  startCountdown(300);
});

// Countdown timer
function startCountdown(seconds) {
  let time = seconds;
  const countdown = document.getElementById("countdown");

  const timer = setInterval(() => {
    let mins = Math.floor(time / 60);
    let secs = time % 60;
    countdown.textContent =
      `${mins.toString().padStart(2, "0")}:${secs
        .toString()
        .padStart(2, "0")}`;

    if (time <= 0) {
      clearInterval(timer);
      countdown.textContent = "Application under review";
    }
    time--;
  }, 1000);
}
