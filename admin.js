const approveBtn = document.getElementById("approveBtn");
const rejectBtn = document.getElementById("rejectBtn");
const adminStatus = document.getElementById("adminStatus");

approveBtn.addEventListener("click", () => {
  localStorage.setItem("loanStatus", "approved");
  adminStatus.textContent = "Loan has been APPROVED ✅";
});

rejectBtn.addEventListener("click", () => {
  localStorage.setItem("loanStatus", "rejected");
  adminStatus.textContent = "Loan has been REJECTED ❌";
});
