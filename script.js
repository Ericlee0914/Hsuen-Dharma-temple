/* =========================================
   1. ARTICLE SYSTEM (文章系统)
   Edit here to add new articles!
   下次要加文章，改这边的 List 就可以了
   ========================================= */
const articlesData = [
    // Article 1
    {
        title: "略談光明真言（一） (The Mantra of Light: Part 1)",
        date: "2025.12.03",
        tag: "Dharma Talk",
        link: "article/article1.html"
    },
    // Article 2
    {
        title: "孔雀明王手持四物意義",
        date: "2025.11.28",
        tag: "Dharma Talk",
        link: "article/article2.html"
    },
    // Article 3
    {
        title: "A Loving-Kindness Meditation to Heal Your Inner Child",
        date: "2025.11.15",
        tag: "Temple News",
        link: "article/article3.html"
    }
];

// Logic to generate HTML (Don't touch this part unless you want to change design)
const articleContainer = document.getElementById('article-container');

if (articleContainer) {
    const articlesHTML = articlesData.map(article => `
        <article class="article-item">
            <div class="article-meta">
                <span class="article-date">${article.date}</span>
                <span class="article-tag">${article.tag}</span>
            </div>
            <a href="${article.link}" class="article-link">${article.title}</a>
        </article>
    `).join('');

    articleContainer.innerHTML = articlesHTML;
}


/* =========================================
   2. EXISTING WEBSITE FUNCTIONALITY
   (你原本的 Code 都在下面，原封不动)
   ========================================= */

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '80px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.backgroundColor = 'white';
        navLinks.style.padding = '2rem';
        navLinks.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    });
}

// Hero Slider
const slides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

if (slides.length > 0) {
    setInterval(nextSlide, 5000); // Change slide every 5 seconds
}

// Sticky Header Effect
const header = document.getElementById('main-header');

if (header) { // Added safety check just in case
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Random Daily Wisdom
const quotes = [
    "Peace comes from within. Do not seek it without.",
    "If possible, as far as it depends on you, live in peace with all men.",//bb
    "The mind is everything. What you think you become.",
    "Repay no one evil for evil; take forethought for things honorable in the sight of all men.",//bb
    "Three things cannot be long hidden: the sun, the moon, and the truth.",
    "Younger man, be subject to elders; and all of you grid yourselves with huminity toward one another.",//bb
    "You will not be punished for your anger, you will be punished by your anger.",
    "No one saves us but ourselves. No one can and no one may. We ourselves must walk the path.",
    "Radiate boundless love towards the entire world.",
    "A jug fills drop by drop.",
    "Better than a thousand hollow words, is one word that brings peace.",
    "Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship.",
    "Just as a candle cannot burn without fire, men cannot live without a spiritual life."
];

const quoteText = document.getElementById('quote-text');
if (quoteText) {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteText.textContent = `"${randomQuote}"`;
}