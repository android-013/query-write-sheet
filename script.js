document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        address: document.getElementById("address").value,
        whatsapp: document.getElementById("whatsapp").value,
        github: document.getElementById("github").value,
        linkedin: document.getElementById("linkedin").value,
        message: document.getElementById("message").value
    };
    
    fetch("https://script.google.com/macros/s/AKfycbxUPVrL6yIS8vcTL1_xVr0udWp59buMwTfKpWKwaQp0jbf9dOAb-kRPE8CMNxZkyLb8/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
    })
    .then(response => response.text())
    .then(data => {
        alert("Form submitted successfully!");
        document.getElementById("contactForm").reset();
    })
    .catch(error => {
        console.error("Error:", error);
        alert("There was an error submitting the form.");
    });
});
