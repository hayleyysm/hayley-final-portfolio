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

function buildContactRails() {
    if (document.querySelector(".contact-email-rail") || document.querySelector(".contact-social-rail")) return;

    const emailRail = document.createElement("a");
    emailRail.className = "fixed-email contact-email-rail";
    emailRail.href = "mailto:hsimmo542@gmail.com";
    emailRail.textContent = "e : hsimmo542@gmail.com";

    const socialRail = document.createElement("div");
    socialRail.className = "fixed-socials contact-social-rail";
    socialRail.setAttribute("aria-label", "Contact shortcuts");

    const socialLinks = [
        {
            href: "https://www.instagram.com/hayleyy.simone/",
            label: "Open Instagram",
            icon: "assets-socials/logos/ig.png"
        },
        {
            href: "https://www.linkedin.com/in/hayley-moonsamy-b3a55b208?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
            label: "Open LinkedIn",
            icon: "assets-socials/logos/linkedin.png"
        },
        {
            href: "https://wa.me/27672453637",
            label: "Open WhatsApp",
            icon: "assets-socials/logos/whatsapp.png"
        },
        {
            href: "mailto:hsimmo542@gmail.com",
            label: "Email Hayley",
            icon: "assets-socials/logos/email.png"
        }
    ];

    socialLinks.forEach(function(link) {
        const anchor = document.createElement("a");
        anchor.href = link.href;
        anchor.setAttribute("aria-label", link.label);

        if (!link.href.startsWith("mailto:")) {
            anchor.target = "_blank";
            anchor.rel = "noopener noreferrer";
        }

        const image = document.createElement("img");
        image.src = link.icon;
        image.alt = "";

        anchor.appendChild(image);
        socialRail.appendChild(anchor);
    });

    document.body.insertBefore(emailRail, document.body.firstChild);
    document.body.insertBefore(socialRail, document.body.firstChild);
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
buildContactRails();
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

const bagText = {
    polaroid: {
        title: "About Me",
        text: "Hayley Simone Moonsamy, a third-year Digital Arts student focused on interaction, identity, and meaningful visual experiences."
    },

    phone: {
        title: "What’s On My Feed",
        text: "See what’s on my feed.",
        link: "https://vt.tiktok.com/ZSQPLVnob/",
        linkText: "Open TikTok"
    },

    tablet: {
        title: "Creative Tools",
        text: "Krita, Blender, Maya, Unity, and digital drawing workflows help me move between sketching, animation, 3D, and interactive design."
    },

    glasses: {
        title: "My Vision",
        text: "I design for clarity, resonance, and joy. Empathy shapes how I think about users, because good design should feel thoughtful, accessible, and human."
    },

    headphones: {
        title: "Sound & Inspiration",
        text: "Music shapes the rhythm and emotional tone of my creative process.",
        link: "https://music.apple.com/za/album/clair-de-lune/444967120?i=444967148",
        linkText: "Listen to Clair de Lune"
    },

    laptop: {
        title: "Education",
        text: "BA Digital Arts at the University of the Witwatersrand, with work across Interactive Media, Game Design, Animation, and Digital Art Theory."
    },

    notebook: {
        title: "Notebook",
        text: "“I would like to paint the way a bird sings.” — Claude Monet"
    },

    book: {
        title: "The Laughing Heart",
        text: `Charles Bukowski is my all-time favourite poet.

your life is your life
don't let it be clubbed into dank submission.
be on the watch.
there are ways out.
there is a light somewhere.
it may not be much light but
it beats the darkness.
be on the watch.
the gods will offer you chances.
know them.
take them.
you can't beat death but
you can beat death in life, sometimes.
and the more often you learn to do it,
the more light there will be.
your life is your life.
know it while you have it.
you are marvelous
the gods wait to delight
in you.

— Charles Bukowski`
    },

    ipad: {
        title: "Design Software",
        text: "Adobe Creative Suite, Canva, Figma, and Adobe Fresco support my visual communication, layout, and digital production workflows."
    },

    controller: {
        title: "Play & Systems",
        text: "Noob player who dies before landing on COD, master Mortal Kombatist, almost getting a ring in 2K, cried for The Last of Us Part II, and aspiring designer. Games taught me that interaction is about feedback, challenge, emotion, and how people feel inside a system."
    },

    bible: {
        title: "Values",
        text: "I approach creative work with empathy, integrity, and intentionality. “Whatever you do, work at it with all your heart.” — Colossians 3:23"
    },

    water: {
        title: "Motto",
        text: "Drink water and mind your business. :D"
    }
};
/* ABOUT PAGE BAG INTERACTION */

const bagStage = document.querySelector(".bag-stage");
const bagVisual = document.querySelector(".bag-visual");
const bagItems = document.querySelectorAll(".bag-item");
const bagPopup = document.getElementById("bag-popup");

if (bagStage && bagVisual && bagPopup) {
    bagPopup.classList.remove("show");

    function clearActiveBagItems() {
        bagItems.forEach(function(item) {
            item.classList.remove("active-object");
        });
    }

    function hideBagPopup() {
        bagPopup.classList.remove("show");
        clearActiveBagItems();
    }

    function positionBagPopup(item) {
        bagPopup.classList.add("show");

        const stageRect = bagStage.getBoundingClientRect();
        const itemRect = item.getBoundingClientRect();
        const popupRect = bagPopup.getBoundingClientRect();
        const gap = 18;
        const edge = 16;
        const stageWidth = bagStage.clientWidth;
        const stageHeight = bagStage.clientHeight;
        const itemCenterX = itemRect.left - stageRect.left + itemRect.width / 2;
        const itemTop = itemRect.top - stageRect.top;
        const itemBottom = itemRect.bottom - stageRect.top;
        const itemCenterY = itemTop + itemRect.height / 2;

        let popupLeft = itemCenterX;
        let popupTop = itemCenterY < stageHeight * 0.45
            ? itemBottom + popupRect.height / 2 + gap
            : itemTop - popupRect.height / 2 - gap;

        popupLeft = Math.max(
            popupRect.width / 2 + edge,
            Math.min(stageWidth - popupRect.width / 2 - edge, popupLeft)
        );

        popupTop = Math.max(
            popupRect.height / 2 + edge,
            Math.min(stageHeight - popupRect.height / 2 - edge, popupTop)
        );

        bagPopup.style.left = `${popupLeft}px`;
        bagPopup.style.top = `${popupTop}px`;
    }

    bagVisual.addEventListener("click", function(event) {
        event.stopPropagation();

        bagStage.classList.toggle("bag-open");
        hideBagPopup();
    });

    bagItems.forEach(function(item) {
        item.addEventListener("click", function(event) {
            event.stopPropagation();

            if (!bagStage.classList.contains("bag-open")) return;

            const target = item.dataset.target;
            const content = bagText[target];

            if (!target || !content) return;

            clearActiveBagItems();
            item.classList.add("active-object");

            bagPopup.innerHTML = `
                <h3>${content.title}</h3>
                <p>${content.text.replace(/\n/g, "<br>")}</p>
                ${
                    content.link
                        ? `<a href="${content.link}" target="_blank" rel="noopener noreferrer">${content.linkText}</a>`
                        : ""
                }
            `;

            positionBagPopup(item);
        });
    });

    document.addEventListener("click", function(event) {
        const clickedPopup = event.target.closest(".bag-popup");
        const clickedItem = event.target.closest(".bag-item");
        const clickedBag = event.target.closest(".bag-visual");

        if (!clickedPopup && !clickedItem && !clickedBag) {
            hideBagPopup();
        }
    });
}
