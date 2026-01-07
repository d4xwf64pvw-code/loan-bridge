const paymentCheckbox = document.getElementById("paymentConfirm");
const applyBtn = document.getElementById("applyBtn");
const form = document.getElementById("loanForm");
const reviewBox = document.getElementById("reviewBox");
const emailBtn = document.querySelector(".email-btn");

let emailClicked = false;

// User must click email button first
emailBtn.addEventListener("click", () => {
  emailClicked = true;
});

// Checkbox only works if email was clicked
paymentCheckbox.addEventListener("change", () => {
  if (emailClicked && paymentCheckbox.checked) {
    applyBtn.disabled = false;
  } else {
    applyBtn.disabled = true;
    paymentCheckbox.checked = false;
    alert("Please send the payment proof email first.");
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  form.classList.add("hidden");
  reviewBox.classList.remove("hidden");
  startCountdown(300);
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
      countdown.textContent = "Application under review";
    }
    time--;
  }, 1000);
}
