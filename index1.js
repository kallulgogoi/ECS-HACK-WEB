document.getElementById("profileForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    
    document.getElementById("displayName").textContent = name;
    document.getElementById("displayEmail").textContent = email;
    document.getElementById("displayMobile").textContent = mobile;
    
    document.getElementById("profileDetails").classList.remove("hidden");
});
