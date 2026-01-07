const paymentCheckbox = document.getElementById("paymentConfirm");
const applyBtn = document.getElementById("applyBtn");
const form = document.getElementById("loanForm");
const reviewBox = document.getElementById("reviewBox");
const emailBtn = document.querySelector(".email-btn");

// Initial state
applyBtn.disabled = true;
paymentCheckbox.disabled = true;

// Check if user already clicked email before
if (localStorage.getItem("emailSent") === "yes") {
  paymentCheckbox.disabled = false;
}

// When email button is clicked
emailBtn.addEventListener("click", () => {
  localStorage.setItem("emailSent", "yes");
  paymentCheckbox.disabled = false;
});

// Enable Apply button only when checkbox is checked
paymentCheckbox.addEventListener("change", () => {
  applyBtn.disabled = !paymentCheckbox.checked;
});

// Handle form submit
form.addEventListener("submit", function (e) {
  e.preventDefault();
  localStorage.removeItem("emailSent"); // reset for next use
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
// Check loan approval status
const statusText = document.getElementById("loanStatus");

if (statusText) {
  const loanStatus = localStorage.getItem("loanStatus");

  if (loanStatus === "approved") {
    statusText.textContent = "🎉 Your loan has been APPROVED!";
    statusText.style.color = "green";
  } else if (loanStatus === "rejected") {
    statusText.textContent = "❌ Your loan was rejected. Please contact support.";
    statusText.style.color = "red";
  } else {
    statusText.textContent = "⏳ Your loan is under review. Please check back later.";
    statusText.style.color = "orange";
  }
}
