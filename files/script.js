function generatePassword() {
    var length = document.getElementById("length").value;
    var uppercase = document.getElementById("uppercase").checked;
    var lowercase = document.getElementById("lowercase").checked;
    var numbers = document.getElementById("numbers").checked;
    var symbols = document.getElementById("symbols").checked;
    
    if (!uppercase && !lowercase && !numbers && !symbols) {
        document.getElementById("warning").textContent = "Please select at least one character type.";
        return;
    }
    
    var charset = "";
    if (uppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) charset += "0123456789";
    if (symbols) charset += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    
    var password = "";
    for (var i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    
    document.getElementById("password").value = password;
    document.getElementById("generated-password").textContent = password;
    document.getElementById("warning").textContent = "";
}

function copyPassword() {
    var password = document.getElementById("password").value;
    
    if (password) {
        navigator.clipboard.writeText(password)
            .then(function() {
                alert("Password copied to clipboard!");
            })
            .catch(function(error) {
                console.error("Unable to copy password to clipboard: ", error);
                alert("Failed to copy password to clipboard. Please copy it manually.");
            });
    }
}

// Update length display in real-time
document.getElementById("length").addEventListener("input", function() {
    document.getElementById("length-value").textContent = this.value;
});


// Get footer element
const footer = document.querySelector('.footer');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Scrolling down
    if (currentScroll < lastScroll) {
        footer.classList.add('footer--hidden');
    } 
    // Scrolling up
    else {
        footer.classList.remove('footer--hidden');
    }
    
    lastScroll = currentScroll;
});