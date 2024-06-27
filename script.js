// script.js

// Function to generate handwriting from the user input
function generateHandwriting() {
    const userInput = document.getElementById('user-input').value;
    const outputPlaceholder = document.getElementById('output-placeholder');

    // For demonstration, we're simulating the generation with a static image
    // Replace this part with actual API call to your handwriting generation service
    outputPlaceholder.innerHTML = `<img src="images/generated-handwriting.png" alt="Generated Handwriting">`;
}

// Form validation for the contact form
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    // Simulate form submission
    alert('Message sent successfully!');
});
// Smooth scrolling for navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Functionality to choose pricing plan
document.querySelectorAll('.pricing-table button').forEach(button => {
    button.addEventListener('click', function() {
        const plan = this.parentElement.querySelector('h3').innerText;
        alert('You have chosen the ' + plan + ' plan. Thank you!');
    });
});
