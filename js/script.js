const pages = [
    { name: "Home", href: "index.html", page: "home" },
    { name: "My Projects", href: "projects.html", page: "projects" },
    { name: "About", href: "about.html", page: "about" },
    { name: "Contact", href: "contact.html", page: "contact" }
];

const currentPage = document.body.dataset.page;

function buildNavigation() {
    const header = document.getElementById("site-header");

    if (!header) return;

    let navHTML = `
        <nav class="navbar" aria-label="Primary navigation">
            <div class="nav-info">
                <span>• Johannesburg, South Africa</span>
                <span id="clock">00:00</span>
                <span>26.2041° S, 28.0473° E</span>
            </div>

            <div class="nav-links">
    `;

    pages.forEach(function(page) {
        const activeClass = page.page === currentPage ? "active" : "";

        navHTML += `
            <a class="nav-link ${activeClass}" href="${page.href}">
                ${page.name}
            </a>
        `;
    });

    navHTML += `
            </div>
        </nav>
    `;

    header.innerHTML = navHTML;
}

function updateClock() {
    const clock = document.getElementById("clock");

    if (!clock) return;

    const now = new Date();

    clock.textContent = now.toLocaleTimeString("en-ZA", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "Africa/Johannesburg"
    });
}

buildNavigation();
updateClock();
setInterval(updateClock, 1000);

/* PROJECT DETAIL TABS */

const detailTabs = document.querySelectorAll(".detail-tab");
const detailPanels = document.querySelectorAll(".detail-panel");

detailTabs.forEach(function(tab) {
    tab.addEventListener("click", function() {
        const selectedTab = tab.dataset.tab;

        detailTabs.forEach(function(button) {
            button.classList.remove("active-tab");
        });

        detailPanels.forEach(function(panel) {
            panel.classList.remove("active-panel");
        });

        tab.classList.add("active-tab");

        const selectedPanel = document.getElementById(selectedTab);

        if (selectedPanel) {
            selectedPanel.classList.add("active-panel");
        }
    });
});