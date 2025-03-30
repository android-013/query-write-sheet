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
    
    console.log("Form Data Submitted:", formData);
    alert("Form submitted successfully!");
});
