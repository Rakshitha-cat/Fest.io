console.log("JavaScript connected successfully");
const logo = document.querySelector(".logo");
logo.textContent = "Innovation Expo 2026";
const hero = document.querySelector(".hero");
hero.classList.add("js-loaded");
const registerButton = document.querySelector(".hero .btn");
registerButton.addEventListener("click", function() {
    document.getElementById("register").scrollIntoView({behavior: "smooth" });
});
const projectCards = document.querySelectorAll(".project-card");
projectCards.forEach(function(card) {
    card.addEventListener("click", function() {
        const projectName = card.querySelector("h3").textContent;
        const description = card.querySelector("p").textContent;
        alert(projectName + "\n\n" + description);});
});
const filterContainer = document.createElement("div");
const allButton = document.createElement("button");
allButton.textContent ="All";
const aiButton = document.createElement("button");
aiButton.textContent ="AI";
const roboticsButton = document.createElement("button");
roboticsButton.textContent ="Robotics";
const greenButton = document.createElement("button");
greenButton.textContent = "Green Energy";
filterContainer.appendChild(allButton);
filterContainer.appendChild(aiButton);
filterContainer.appendChild(roboticsButton);
filterContainer.appendChild(greenButton);
document.querySelector(".projects-section").insertBefore(
    filterContainer,
    document.querySelector(".project-grid")
);
allButton.addEventListener("click", function() {
    projectCards.forEach(function(card) {
        card.style.display = "block";
    });
});
aiButton.addEventListener("click", function() {
    projectCards.forEach(function(card) {
        const name = card.querySelector("h3").textContent;
        if (name === "AI Assistant") {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});
roboticsButton.addEventListener("click", function() {
    projectCards.forEach(function(card) {
        const name = card.querySelector("h3").textContent;
        if (name === "Robotics") {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});
greenButton.addEventListener("click", function() {
    projectCards.forEach(function(card) {
        const name = card.querySelector("h3").textContent;
        if (name === "Green Energy") {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});
const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const department = document.getElementById("department").value;
    const year = document.getElementById("year").value;
    const interest = document.getElementById("interest").value;
    const message = document.getElementById("message").value.trim();
    const updates = document.getElementById("updates").checked;
    if (name === "") {
        alert("Please enter your name.");
        return;
    }
    if (email === "") {
        alert("Please enter your email.");
        return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    if (department === "") {
        alert("Please select your department.");
        return;
    }
    if (year === "") {
        alert("Please select your year.");
        return;
    }
    if (interest === "") {
        alert("Please select a project.");
        return;
    }
    if (message === "") {
        alert("Please enter your message.");
        return;
    }
    if (!updates) {
        alert("Please agree to receive event updates.");
        return;
    }
    alert("Form validation successful!");
});
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const project = document.getElementById("interest").value;
    if (name !== "" && project !== ""){
        alert(
            "Registration successful!\n\n" +"Name: " + name + "\nProject: " + project
        );
    }
});
const modeButton = document.createElement("button");
modeButton.textContent = "Toggle Dark Mode";
document.body.insertBefore(
    modeButton,
    document.body.firstChild
);
modeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});
projectCards.forEach(function(card) {
    card.addEventListener("mouseenter", function() {
        card.classList.add("active-card");
    });
    card.addEventListener("mouseleave", function() {
        card.classList.remove("active-card");
    });
});