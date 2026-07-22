// Select the form
const form = document.querySelector("form");

// Form submit event
form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    const restaurantName = form.querySelector('input[placeholder="Restaurant Name"]').value.trim();
    const ownerName = form.querySelector('input[placeholder="Owner Name"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const phone = form.querySelector('input[type="tel"]').value.trim();
    const address = form.querySelector('input[placeholder="Restaurant Address"]').value.trim();
    const city = form.querySelector("select").value;

    // Validation
    if (
        restaurantName === "" ||
        ownerName === "" ||
        email === "" ||
        phone === "" ||
        address === "" ||
        city === ""
    ) {
        alert("Please fill all required fields.");
        return;
    }

    // Phone validation
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Success message
    alert(
        `Restaurant Registered Successfully!\n\n` +
        `Restaurant: ${restaurantName}\n` +
        `Owner: ${ownerName}\n` +
        `City: ${city}`
    );

    // Reset form
    form.reset();
});