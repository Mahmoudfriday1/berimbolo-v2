// Scroll-to-Top Button
const scrollToTopBtn = document.getElementById("scrollToTop");

// Show the button when scrolled down
window.onscroll = function () {
    if (document.documentElement.scrollTop > 700) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// Scroll to the top when clicked
scrollToTopBtn.addEventListener("click", function () {
    window.scroll({
        top:0,
        left:0,
        behavior: 'smooth'
    });
});

// Contact Form Validation
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent actual submission

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Please enter a valid email address.");
    } else {
        alert("Thank you for reaching out! We will get back to you soon.");
        this.reset(); // Clear the form
    }
});
