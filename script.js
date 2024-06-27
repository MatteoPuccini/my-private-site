// Function to generate handwriting - Placeholder functionality
function generateHandwriting() {
    const userInput = document.getElementById('user-input').value;
    const outputDiv = document.getElementById('output-placeholder');

    // Placeholder functionality
    outputDiv.innerHTML = `
        <div class="handwriting-placeholder">
            Handwritten output will appear here.
            <br>
            <img src="https://via.placeholder.com/600x300?text=Handwritten+Note+Here" alt="Handwritten Note">
        </div>`;
    outputDiv.style.background = 'none';
    outputDiv.style.color = '#666';
}

// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for contacting us, ' + name + '! We will get back to you shortly.');
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill in all fields.');
    }
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
