// Initialize Swiper Carousel
document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper-container", {
    loop: true,
    autoplay: { delay: 4000 },
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Initialize AOS (Animate on Scroll)
  AOS.init({ duration: 1200, once: true });
});

// Initialize EmailJS
(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init({
    publicKey: "4VyGd187kmad5DVzj",
  });
})();

//Handle Navigation Functionality
const menuBtn = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("show"); // Toggle show to display menu
});

let sfSubmitting = false; // for tracking subscribe form submitting state
function handleSubscriberSubmit(e) {
  e.preventDefault();
  // Prevent multiple submissions
  if (sfSubmitting) {
    Toastify({
      text: "Submission in progress. Please wait...",
      backgroundColor: "orange",
      duration: 3000,
    }).showToast();
    return;
  }
  const email = document.getElementById("emailInput").value.trim();
  if (!email) {
    Toastify({
      text: "Please fill in all fields.",
      backgroundColor: "red",
      duration: 3000,
    }).showToast();
    return;
  }
  // Generate a unique token (timestamp to avoid duplicates)
  const token = btoa(email + "|" + Date.now());

  // Disable form button and set submitting to true
  sfSubmitting = true;
  const submitButton = document.querySelector(
    'form#subscribeForm button[type="submit"]',
  );
  submitButton.disabled = true;
  // EmailJS: Send verification email

  emailjs
    .send("service_jkxrajp", "template_8z3km8p", {
      to_email: email,
      verification_link: `https://script.google.com/macros/s/AKfycbzrnlrflIYdNG7HClITtEIItGL3AqbIhMB26jHKjeZe4ctlOrB255inUhOYgCYMUDIhxA/exec?token=${encodeURIComponent(
        token,
      )}`,
    })
    .then(() => {
      Toastify({
        text: "Successfully subscribed!",
        backgroundColor: "green",
        duration: 3000,
      }).showToast();
      document.getElementById("subscribeForm").reset();
    })
    .catch((error) => {
      Toastify({
        text: "Failed to send subscribe. Please try again later.",
        backgroundColor: "red",
        duration: 3000,
      }).showToast();
      console.error("EmailJS Error:", error);
    })
    .finally(() => {
      // Re-enable form button and reset submitting state
      sfSubmitting = false;
      submitButton.disabled = false;
    });
}

document
  .getElementById("subscribeForm")
  .addEventListener("submit", (event) => handleSubscriberSubmit(event));

document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    const icon = header.querySelector(".accordion-icon");

    // Toggle icon (+/-)
    icon.textContent = content.classList.contains("show") ? "+" : "−";
    // Toggle visibility
    content.classList.toggle("show");
  });
});

// Show/Hide Back to Top Button
const backToTopBtn = document.getElementById("backToTopBtn");

// Monitor scroll position
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    // Show button after scrolling down 300px
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

// Scroll back to top smoothly
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
