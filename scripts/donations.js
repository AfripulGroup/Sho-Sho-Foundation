document
  .getElementById("donationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Basic validation
    const name = document.getElementById("donorName").value.trim();
    const email = document.getElementById("donorEmail").value.trim();
    const country = document.getElementById("donorCountry").value.trim();
    const amountInput = document.getElementById("donationAmount").value.trim();
    const anonymous = document.getElementById("anonymousDonation").checked;
    const coverFees = document.getElementById("coverFees").checked;

    // Strip non-numeric characters and calculate multiples of 100
    let amount = parseInt(amountInput.replace(/\D/g, ""), 10);
    if (isNaN(amount) || amount < 100) {
      alert("Please enter a valid donation amount (minimum 100).");
      return;
    }
    amount = Math.floor(amount / 100) * 100;

    // Add fee if checkbox is checked
    if (coverFees) {
      const fee = amount * 0.029 + 0.3;
      amount += Math.ceil(fee);
    }

    // Show a toast and redirect to payment page
    alert("Redirecting to payment page..."); // Replace with Toastify for actual use
    // Simulate payment process (replace with real payment integration)
    setTimeout(() => {
      // Show the modal on successful payment
      document.getElementById("thankYouModal").classList.remove("hidden");
    }, 2000); // Simulated delay
  });

// Close modal functionality
document.getElementById("closeModal").addEventListener("click", function () {
  document.getElementById("thankYouModal").classList.add("hidden");
});

function handleDonationAmountBlur(evt) {
  let value = evt.target.value;

  // Remove all non-digit characters
  value = value.replace(/\D/g, "");

  // Ensure the value is a multiple of 100
  let newVal = Math.ceil(Number(value) / 100) * 100;

  // Update the input field with the cleaned value
  evt.target.value = newVal || ""; // Set to empty string if value is invalid
}
