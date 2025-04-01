document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let formData = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        phone: document.getElementById("phone").value.trim(),
        address: document.getElementById("address").value.trim(),
        whatsapp: document.getElementById("whatsapp").value.trim(),
        github: document.getElementById("github").value.trim(),
        linkedin: document.getElementById("linkedin").value.trim(),
        address: document.getElementById("subject").value.trim(),
        message: document.getElementById("message").value.trim()
    };

    fetch("https://script.google.com/macros/s/AKfycbz0Sjk64fFJYVxizWB9KJSbr-OTEfevIvJRLDME74yuh4XTTRxMGWZcJyWU62i7ig7L9w/exec", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData)
    })
    .then(response => response.text())
    .then(data => {
        if (data.includes("Success")) {
            alert("Form submitted successfully!");
            document.getElementById("contactForm").reset();
        } else {
            throw new Error("Form submission failed.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("There was an error submitting the form.");
    });
});
