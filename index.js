// Example: Display an alert when the "More Info" button is clicked
document.querySelectorAll('.more-info').forEach(button => {
    button.addEventListener('click', function() {
        alert('More information about the NFT.');
    });
});

window.onload = function() {
    var ageConfirmed = confirm("You must be 18 years old or older!");
    if (!ageConfirmed) {
        window.location.href = "https://www.google.com";
    }
};

