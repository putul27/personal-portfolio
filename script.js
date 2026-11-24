// ===============================
// PORTFOLIO WEBSITE JAVASCRIPT
// ===============================


// 1. MOBILE MENU
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

}


// 2. CLOSE MOBILE MENU
const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (item) {

    item.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });

});


// 3. DARK / LIGHT MODE
const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

    themeBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            themeBtn.textContent = "☀️";
            localStorage.setItem("theme", "dark");

        } else {

            themeBtn.textContent = "🌙";
            localStorage.setItem("theme", "light");

        }

    });

}


// 4. REMEMBER THEME
window.addEventListener("DOMContentLoaded", function () {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark-mode");

        if (themeBtn) {
            themeBtn.textContent = "☀️";
        }

    }

});


// 5. CONTACT FORM
const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {

            alert("Please fill all the fields.");

            return;
        }

        alert("Thank you, " + name + "! Your message has been sent.");

        contactForm.reset();

    });

}


// 6. SCROLL ANIMATION
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});


sections.forEach(function (section) {

    observer.observe(section);

});


// 7. ACTIVE NAVIGATION LINK
window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navItems.forEach(function (item) {

        item.classList.remove("active");

        if
