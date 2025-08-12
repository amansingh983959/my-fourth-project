document.addEventListener("DOMContentLoaded", () => {
  const stars = document.querySelectorAll(".stars span");
  const form = document.getElementById("feedbackForm");
  const successMsg = document.getElementById("success-msg");
  let rating = 0;

  // Star rating system
  stars.forEach(star => {
    star.addEventListener("click", () => {
      rating = star.dataset.value;
      
      stars.forEach(s => s.classList.remove('active'));
      star.classList.add('active');
      let previous = star.previousElementSibling;
      while(previous) {
        previous.classList.add('active');
        previous = previous.previousElementSibling;
      }
    });
  });

  // Form submission
  form.addEventListener("submit", e => {
    e.preventDefault();
    if (rating === 0) {
      alert("Please rate us before submitting.");
      return;
    }

    // Normally you'd send data to a server here
    console.log({
      name: form.name.value,
      email: form.email.value,
      rating: rating,
      feedback: form.message.value
    });

    successMsg.classList.remove("hidden");
    form.reset();
    stars.forEach(s => s.classList.remove('active'));
    rating = 0;

    // Hide message after 3 seconds
    setTimeout(() => {
      successMsg.classList.add("hidden");
    }, 3000);
  });
});