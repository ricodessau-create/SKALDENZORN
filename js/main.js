const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");
const navigationLinks = document.querySelectorAll(".navigation a");
const currentYear = document.getElementById("current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

if (menuToggle && navigation) {
    const closeMenu = () => {
        navigation.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Menü öffnen");
    };

    const openMenu = () => {
        navigation.classList.add("active");
        menuToggle.setAttribute("aria-expanded", "true");
        menuToggle.setAttribute("aria-label", "Menü schließen");
    };

    menuToggle.addEventListener("click", (event) => {
        event.stopPropagation();

        if (navigation.classList.contains("active")) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    navigationLinks.forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", (event) => {
        if (
            navigation.classList.contains("active") &&
            !navigation.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {
            closeMenu();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });
}
