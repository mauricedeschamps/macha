// Complete Matcha Knowledge Data with Japanese
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
        // ...他の英語コンテンツは前回と同じ...
    ],
    ja: [
        {
            id: 'definition',
            title: '抹茶の定義と特徴',
            shortDesc: '抹茶が他の緑茶と異なる点',
            longDesc: `
                <p>抹茶は、茶葉を蒸して乾燥させた「碾茶（てんちゃ）」を石臼で挽いた微粉末状のお茶です。一般的な緑茶と異なり、茶葉を丸ごと摂取するため、栄養価が高いのが特徴です。</p>
                <h3>主な特徴:</h3>
                <ul>
                    <li><strong>粉末状:</strong> 碾茶を石臼で挽いて作られます</li>
                    <li><strong>覆下栽培:</strong> 収穫前20-30日間、日光を遮って栽培</li>
                    <li><strong>旨味豊か:</strong> テアニンというアミノ酸を多く含む</li>
                    <li><strong>鮮やかな緑色:</strong> クロロフィルが豊富なため</li>
                    <li><strong>茶葉全体を摂取:</strong> 抽出ではなく粉ごと摂取</li>
                </ul>
            `,
            image: 'images/matcha-powder.jpg',
            link: 'https://ja.wikipedia.org/wiki/抹茶'
        },
        {
            id: 'history',
            title: '抹茶の歴史',
            shortDesc: '中国から日本への伝来と発展',
            longDesc: `
                <p>抹茶には800年以上の歴史があります:</p>
                <ul>
                    <li><strong>12世紀:</strong> 栄西禅師によって中国から日本に伝来</li>
                    <li><strong>13-15世紀:</strong> 禅僧の座禅用として主に使用</li>
                    <li><strong>16世紀:</strong> 千利休によって茶道が確立</li>
                    <li><strong>江戸時代:</strong> 富裕な商人にも広まる</li>
                    <li><strong>21世紀:</strong> 健康効果が注目され世界的ブーム</li>
                </ul>
                <p>茶道（茶の湯）は、抹茶を「和敬清寂」の精神でいただく芸術です。</p>
            `,
            image: 'images/ceremony.jpg',
            link: 'https://www.uji-matcha.jp/history/'
        },
        // ...他の日本語コンテンツ...
    ]
};

// DOM Elements
const elements = {
    gridContainer: document.querySelector('.knowledge-grid'),
    detailView: document.getElementById('detail-view'),
    detailTitle: document.getElementById('detail-title'),
    detailImage: document.getElementById('detail-image'),
    detailDescription: document.getElementById('detail-description'),
    detailLink: document.getElementById('detail-link'),
    backButton: document.getElementById('back-button'),
    themeToggle: document.getElementById('theme-toggle'),
    languageToggle: document.getElementById('language-toggle'),
    appTitle: document.getElementById('app-title')
};

// App State
const state = {
    currentLanguage: 'en',
    darkMode: true,
    currentView: 'grid'
};

// Initialize App
function initApp() {
    loadPreferences();
    renderUI();
    setupEventListeners();
    registerServiceWorker();
}

// Load user preferences from localStorage
function loadPreferences() {
    const savedLanguage = localStorage.getItem('language');
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedLanguage) {
        state.currentLanguage = savedLanguage;
    }
    
    if (savedTheme === 'light' || (!savedTheme && !prefersDark)) {
        toggleTheme();
    }
}

// Render UI based on current state
function renderUI() {
    renderCards();
    updateUIText();
    
    if (state.darkMode) {
        document.body.classList.remove('clear-mode');
        elements.themeToggle.querySelector('.icon').textContent = '🌓';
    } else {
        document.body.classList.add('clear-mode');
        elements.themeToggle.querySelector('.icon').textContent = '☀️';
    }
}

// Render Knowledge Cards
function renderCards() {
    elements.gridContainer.innerHTML = '';
    const data = matchaData[state.currentLanguage];
    
    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'knowledge-card';
        card.innerHTML = `
            <h3 class="card-title">${item.title}</h3>
            <img src="${item.image}" alt="${item.title}" class="card-image" loading="lazy">
            <p class="card-description">${item.shortDesc}</p>
        `;
        card.addEventListener('click', () => showDetail(item));
        elements.gridContainer.appendChild(card);
    });
}

// Show Detail View
function showDetail(item) {
    state.currentView = 'detail';
    elements.detailTitle.textContent = item.title;
    elements.detailImage.src = item.image;
    elements.detailImage.alt = item.title;
    elements.detailDescription.innerHTML = item.longDesc;
    elements.detailLink.href = item.link;
    elements.detailLink.textContent = state.currentLanguage === 'ja' ? 'さらに詳しく' : 'Learn more';
    
    elements.gridContainer.classList.add('hidden');
    elements.detailView.classList.add('visible');
    window.scrollTo(0, 0);
}

// Back to Grid View
function backToGrid() {
    state.currentView = 'grid';
    elements.gridContainer.classList.remove('hidden');
    elements.detailView.classList.remove('visible');
}

// Update UI text based on current language
function updateUIText() {
    elements.appTitle.textContent = state.currentLanguage === 'en' ? 'Matcha Knowledge' : '抹茶の知識';
    elements.backButton.textContent = state.currentLanguage === 'en' ? '← Back' : '← 戻る';
    
    if (state.currentView === 'detail') {
        elements.detailLink.textContent = state.currentLanguage === 'ja' ? 'さらに詳しく' : 'Learn more';
    }
}

// Set Up Event Listeners
function setupEventListeners() {
    elements.backButton.addEventListener('click', backToGrid);
    elements.themeToggle.addEventListener('click', toggleTheme);
    elements.languageToggle.addEventListener('click', toggleLanguage);
}

// Toggle Dark/Light Theme
function toggleTheme() {
    state.darkMode = !state.darkMode;
    if (state.darkMode) {
        document.body.classList.remove('clear-mode');
        elements.themeToggle.querySelector('.icon').textContent = '🌓';
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.add('clear-mode');
        elements.themeToggle.querySelector('.icon').textContent = '☀️';
        localStorage.setItem('theme', 'light');
    }
}

// Toggle Language
function toggleLanguage() {
    state.currentLanguage = state.currentLanguage === 'en' ? 'ja' : 'en';
    localStorage.setItem('language', state.currentLanguage);
    renderUI();
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