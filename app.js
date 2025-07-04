// Complete Matcha Knowledge Data
const matchaData = {
    en: [
        {
            id: 'definition',
            title: 'Definition & Characteristics',
            shortDesc: 'What makes matcha unique among green teas',
            longDesc: `
                <p>Matcha is a finely ground powder of specially grown and processed green tea leaves. Unlike regular green tea, you consume the whole leaf, making it more nutritious.</p>
                <h3>Key Characteristics:</h3>
                <ul>
                    <li><strong>Powder form:</strong> Made from stone-ground tencha leaves</li>
                    <li><strong>Shade-grown:</strong> Grown under cover (20-30 days before harvest)</li>
                    <li><strong>Umami-rich:</strong> High in L-theanine amino acid</li>
                    <li><strong>Vibrant color:</strong> Bright green due to high chlorophyll</li>
                    <li><strong>Whole leaf consumption:</strong> No steeping - you ingest the entire leaf</li>
                </ul>
            `,
            image: 'images/matcha-powder.jpg',
            link: 'https://en.wikipedia.org/wiki/Matcha'
        },
        {
            id: 'history',
            title: 'History of Matcha',
            shortDesc: 'From Chinese origins to Japanese tradition',
            longDesc: `
                <p>Matcha has a rich history spanning over 800 years:</p>
                <ul>
                    <li><strong>12th century:</strong> Brought to Japan from China by Zen Buddhist monk Eisai</li>
                    <li><strong>13th-15th centuries:</strong> Used primarily by Zen monks for meditation</li>
                    <li><strong>16th century:</strong> Sen no Rikyu formalized the Japanese tea ceremony</li>
                    <li><strong>Edo period:</strong> Became more accessible to wealthy merchants</li>
                    <li><strong>21st century:</strong> Global popularity boom for health benefits</li>
                </ul>
                <p>The tea ceremony (chanoyu) developed matcha into an art form embodying harmony, respect, purity, and tranquility.</p>
            `,
            image: 'images/ceremony.jpg',
            link: 'https://www.matchaful.com/pages/history-of-matcha'
        },
        {
            id: 'health',
            title: 'Nutrition & Health Benefits',
            shortDesc: 'Why matcha is considered a superfood',
            longDesc: `
                <p>Matcha is packed with nutrients and health-promoting compounds:</p>
                <h3>Key Nutrients:</h3>
                <ul>
                    <li><strong>Catechins:</strong> Powerful antioxidants (EGCG) that may help prevent chronic diseases</li>
                    <li><strong>L-theanine:</strong> Amino acid that promotes relaxation without drowsiness</li>
                    <li><strong>Chlorophyll:</strong> Detoxifying and anti-inflammatory properties</li>
                    <li><strong>Vitamins:</strong> Rich in vitamin C, vitamin A, and vitamin E</li>
                    <li><strong>Minerals:</strong> Contains potassium, iron, calcium, and protein</li>
                </ul>
                <h3>Health Benefits:</h3>
                <ul>
                    <li>Boosts metabolism and burns calories</li>
                    <li>Enhances calm and reduces stress</li>
                    <li>Improves focus and concentration</li>
                    <li>Supports immune function</li>
                    <li>May help protect against heart disease</li>
                </ul>
            `,
            image: 'images/health.jpg',
            link: 'https://www.healthline.com/nutrition/7-benefits-of-matcha-tea'
        },
        {
            id: 'types',
            title: 'Types & Selection',
            shortDesc: 'Understanding matcha grades and quality',
            longDesc: `
                <p>Matcha comes in different grades based on quality and intended use:</p>
                <h3>Main Types:</h3>
                <ul>
                    <li><strong>Ceremonial grade:</strong> Highest quality, vibrant green, sweet flavor (for tea ceremonies)</li>
                    <li><strong>Premium grade:</strong> High quality, balanced flavor (for daily drinking)</li>
                    <li><strong>Culinary grade:</strong> Stronger flavor, slightly bitter (for cooking/baking)</li>
                    <li><strong>Ingredient grade:</strong> Most affordable (for mass production)</li>
                </ul>
                <h3>Selection Tips:</h3>
                <ul>
                    <li><strong>Color:</strong> Vibrant green indicates freshness and quality</li>
                    <li><strong>Aroma:</strong> Fresh, vegetal scent (not stale or fishy)</li>
                    <li><strong>Texture:</strong> Fine, talc-like powder (no clumps)</li>
                    <li><strong>Origin:</strong> Look for Uji, Nishio, or other reputable regions</li>
                    <li><strong>Packaging:</strong> Air-tight, opaque containers preserve freshness</li>
                </ul>
            `,
            image: 'images/types.jpg',
            link: 'https://www.mizubatea.com/pages/how-to-choose-matcha'
        },
        {
            id: 'uses',
            title: 'Ways to Enjoy Matcha',
            shortDesc: 'Traditional and modern applications',
            longDesc: `
                <p>Matcha can be enjoyed in countless ways beyond traditional tea:</p>
                <h3>Traditional Preparations:</h3>
                <ul>
                    <li><strong>Usucha (thin tea):</strong> 2-3g matcha + 70ml hot water (70-80°C)</li>
                    <li><strong>Koicha (thick tea):</strong> 4-5g matcha + 40ml hot water (ceremonial grade only)</li>
                </ul>
                <h3>Modern Drinks:</h3>
                <ul>
                    <li>Matcha latte (hot or iced)</li>
                    <li>Matcha smoothies</li>
                    <li>Matcha cocktails</li>
                </ul>
                <h3>Culinary Uses:</h3>
                <ul>
                    <li>Matcha desserts (ice cream, cakes, cookies)</li>
                    <li>Matcha noodles or pasta</li>
                    <li>Matcha seasoning (salt, sugar, rubs)</li>
                    <li>Matcha beauty products (face masks, scrubs)</li>
                </ul>
            `,
            image: 'images/uses.jpg',
            link: 'https://www.japancentre.com/en/page/155-how-to-use-matcha-green-tea-powder-recipes'
        },
        {
            id: 'global',
            title: 'Global Matcha Boom',
            shortDesc: 'The worldwide popularity of matcha',
            longDesc: `
                <p>Matcha has seen explosive global growth in recent years:</p>
                <h3>Market Trends:</h3>
                <ul>
                    <li>Global matcha market projected to reach $5.07 billion by 2027</li>
                    <li>Popular in health-conscious communities (vegan, keto, paleo)</li>
                    <li>Featured in major coffee chains worldwide</li>
                    <li>Social media driving popularity (Instagram, TikTok)</li>
                </ul>
                <h3>Popular Matcha Products:</h3>
                <ul>
                    <li>Matcha latte mixes</li>
                    <li>Matcha energy bars</li>
                    <li>Matcha skincare products</li>
                    <li>Matcha-infused chocolates</li>
                </ul>
                <h3>Challenges:</h3>
                <ul>
                    <li>Supply shortages of premium matcha</li>
                    <li>Quality control with increased demand</li>
                    <li>Cultural appropriation concerns</li>
                </ul>
            `,
            image: 'images/global.jpg',
            link: 'https://www.fortunebusinessinsights.com/matcha-market-106246'
        },
        {
            id: 'regions',
            title: 'Production Regions',
            shortDesc: 'Japan\'s premier matcha-growing areas',
            longDesc: `
                <p>Japan's top matcha-producing regions each have unique characteristics:</p>
                <h3>Major Production Areas:</h3>
                <ul>
                    <li><strong>Uji (Kyoto):</strong> Considered the gold standard, with 800+ years of history</li>
                    <li><strong>Nishio (Aichi):</strong> Known for vibrant color and mellow flavor</li>
                    <li><strong>Yame (Fukuoka):</strong> Produces sweet, full-bodied matcha</li>
                    <li><strong>Shizuoka:</strong> Japan's largest tea-producing region</li>
                </ul>
                <h3>Regional Differences:</h3>
                <ul>
                    <li><strong>Soil composition:</strong> Affects mineral content and flavor</li>
                    <li><strong>Climate:</strong> Temperature and humidity impact growth</li>
                    <li><strong>Processing techniques:</strong> Regional traditions vary</li>
                    <li><strong>Terroir:</strong> Similar to wine, local environment affects taste</li>
                </ul>
                <p>Many regions hold annual tea competitions to judge quality.</p>
            `,
            image: 'images/regions.jpg',
            link: 'https://www.kyoto-matcha.com/about/uji-matcha/'
        },
        {
            id: 'storage',
            title: 'Storage & Preservation',
            shortDesc: 'How to keep matcha fresh and flavorful',
            longDesc: `
                <p>Proper storage is crucial for maintaining matcha's quality:</p>
                <h3>Storage Guidelines:</h3>
                <ul>
                    <li><strong>Air-tight containers:</strong> Prevents oxidation</li>
                    <li><strong>Cool, dark place:</strong> Away from heat and light</li>
                    <li><strong>Refrigeration:</strong> Recommended for long-term storage</li>
                    <li><strong>Freezing:</strong> Possible for unopened packages (must thaw completely before opening)</li>
                </ul>
                <h3>Shelf Life:</h3>
                <ul>
                    <li><strong>Unopened:</strong> 6-12 months (check expiration date)</li>
                    <li><strong>Opened:</strong> 4-6 weeks for optimal freshness</li>
                    <li><strong>Signs of spoilage:</strong> Dull color, musty smell, clumping</li>
                </ul>
                <h3>Tips for Freshness:</h3>
                <ul>
                    <li>Buy in small quantities if using infrequently</li>
                    <li>Keep away from strong odors</li>
                    <li>Use clean, dry utensils to scoop</li>
                    <li>Consider vacuum-sealed packaging</li>
                </ul>
            `,
            image: 'images/storage.jpg',
            link: 'https://www.marukyu-koyamaen.co.jp/global/how-to-keep-matcha/'
        },
        {
            id: 'summary',
            title: 'Matcha Summary',
            shortDesc: 'The essence of matcha culture',
            longDesc: `
                <p>Matcha represents a unique combination of tradition, health, and versatility:</p>
                <h3>Cultural Significance:</h3>
                <ul>
                    <li>Heart of Japanese tea ceremony for centuries</li>
                    <li>Embodies principles of harmony, respect, purity, and tranquility</li>
                    <li>Symbol of Japanese hospitality (omotenashi)</li>
                </ul>
                <h3>Modern Appeal:</h3>
                <ul>
                    <li>Health-conscious alternative to coffee</li>
                    <li>Versatile ingredient in global cuisine</li>
                    <li>Connection to mindfulness practices</li>
                </ul>
                <h3>Future Outlook:</h3>
                <ul>
                    <li>Continued global market growth</li>
                    <li>Innovation in matcha products</li>
                    <li>Increased focus on sustainable production</li>
                    <li>Cultural exchange through matcha</li>
                </ul>
                <p>From its Zen Buddhist origins to modern cafes worldwide, matcha continues to evolve while maintaining its cultural essence.</p>
            `,
            image: 'images/ceremony.jpg',
            link: 'https://www.japan.travel/en/guide/matcha/'
        }
    ],
    ja: [
        // Japanese versions of all the same content would go here
        // Structure is identical but with Japanese text
    ]
};

// DOM Elements
const gridContainer = document.querySelector('.knowledge-grid');
const detailView = document.getElementById('detail-view');
const detailTitle = document.getElementById('detail-title');
const detailImage = document.getElementById('detail-image');
const detailDescription = document.getElementById('detail-description');
const detailLink = document.getElementById('detail-link');
const backButton = document.getElementById('back-button');
const themeToggle = document.getElementById('theme-toggle');
const languageToggle = document.getElementById('language-toggle');
const appTitle = document.getElementById('app-title');

// App State
let currentLanguage = 'en'; // Default to English
let darkMode = true;

// Initialize App
function initApp() {
    renderCards();
    setupEventListeners();
    registerServiceWorker();
    checkDarkModePreference();
}

// Render Knowledge Cards
function renderCards() {
    gridContainer.innerHTML = '';
    const data = matchaData[currentLanguage];
    
    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'knowledge-card';
        card.innerHTML = `
            <h3 class="card-title">${item.title}</h3>
            <img src="${item.image}" alt="${item.title}" class="card-image" loading="lazy">
            <p class="card-description">${item.shortDesc}</p>
        `;
        card.addEventListener('click', () => showDetail(item));
        gridContainer.appendChild(card);
    });
}

// Show Detail View
function showDetail(item) {
    detailTitle.textContent = item.title;
    detailImage.src = item.image;
    detailImage.alt = item.title;
    detailDescription.innerHTML = item.longDesc;
    detailLink.href = item.link;
    detailLink.textContent = currentLanguage === 'ja' ? 'さらに詳しく' : 'Learn more';
    
    document.querySelector('.knowledge-grid').classList.add('hidden');
    detailView.classList.add('visible');
    window.scrollTo(0, 0);
}

// Back to Grid View
function backToGrid() {
    document.querySelector('.knowledge-grid').classList.remove('hidden');
    detailView.classList.remove('visible');
}

// Set Up Event Listeners
function setupEventListeners() {
    backButton.addEventListener('click', backToGrid);
    
    themeToggle.addEventListener('click', toggleTheme);
    
    languageToggle.addEventListener('click', toggleLanguage);
}

// Toggle Dark/Light Theme
function toggleTheme() {
    darkMode = !darkMode;
    if (darkMode) {
        document.body.classList.remove('clear-mode');
        themeToggle.querySelector('.icon').textContent = '🌓';
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.add('clear-mode');
        themeToggle.querySelector('.icon').textContent = '☀️';
        localStorage.setItem('theme', 'light');
    }
}

// Toggle Language
function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'ja' : 'en';
    appTitle.textContent = currentLanguage === 'en' ? 'Matcha Knowledge' : '抹茶の知識';
    renderCards();
    localStorage.setItem('language', currentLanguage);
    
    // Update back button and link text if in detail view
    if (detailView.classList.contains('visible')) {
        backButton.textContent = currentLanguage === 'en' ? '← Back' : '← 戻る';
        detailLink.textContent = currentLanguage === 'en' ? 'Learn more' : 'さらに詳しく';
    }
}

// Check for Dark Mode Preference
function checkDarkModePreference() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'light' || (!savedTheme && !prefersDark)) {
        toggleTheme();
    }
    
    // Check for saved language preference
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && savedLanguage !== currentLanguage) {
        currentLanguage = savedLanguage;
        appTitle.textContent = currentLanguage === 'en' ? 'Matcha Knowledge' : '抹茶の知識';
    }
}

// Register Service Worker
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('service-worker.js')
                .then(registration => {
                    console.log('ServiceWorker registration successful');
                })
                .catch(err => {
                    console.log('ServiceWorker registration failed: ', err);
                });
        });
    }
}

// Initialize the app
initApp();