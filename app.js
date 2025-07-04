// 抹茶知識データ
const matchaData = {
    ja: [
        {
            id: 'definition',
            title: '抹茶の定義と特徴',
            shortDesc: '抹茶は茶葉を粉末にした日本独特のお茶です',
            longDesc: '抹茶は、茶葉を蒸して乾燥させた「碾茶（てんちゃ）」を石臼で挽いた微粉末状のお茶です。一般的な緑茶と異なり、茶葉を丸ごと摂取するため、栄養価が高いのが特徴です。日光を遮る「覆下栽培」で育てられるため、旨味成分（テアニン）が豊富で、苦みが少なくまろやかな味わいになります。',
            image: 'images/matcha-powder.jpg',
            link: 'https://ja.wikipedia.org/wiki/抹茶'
        },
        {
            id: 'history',
            title: '抹茶の歴史',
            shortDesc: '12世紀に中国から伝来し、茶道として発展',
            longDesc: '抹茶は12世紀頃に中国から日本に伝わり、禅宗の僧侶によって広められました。16世紀には千利休によって茶道が確立され、抹茶は日本の伝統文化の一部として発展しました。近年では、健康効果やスイーツ・ドリンクへの応用が注目され、世界的なブームとなっています。',
            image: 'images/matcha-ceremony.jpg',
            link: 'https://www.uji-matcha.jp/history/'
        },
        // 他の項目も同様に追加...
    ],
    en: [
        {
            id: 'definition',
            title: 'Definition and Characteristics',
            shortDesc: 'Matcha is a unique Japanese powdered green tea',
            longDesc: 'Matcha is a finely ground powder of specially grown and processed green tea leaves. Unlike regular green tea, you consume the whole leaf, which makes it more nutritious. It\'s grown under shade, which increases the chlorophyll and amino acid (L-theanine) content, giving it a sweeter, umami-rich flavor.',
            image: 'images/matcha-powder.jpg',
            link: 'https://en.wikipedia.org/wiki/Matcha'
        },
        {
            id: 'history',
            title: 'History of Matcha',
            shortDesc: 'Introduced from China in 12th century, developed into tea ceremony',
            longDesc: 'Matcha was brought to Japan from China in the 12th century by Zen Buddhist monks. In the 16th century, Sen no Rikyu established the Japanese tea ceremony, making matcha an integral part of traditional culture. Recently, its health benefits and use in sweets and drinks have made it popular worldwide.',
            image: 'images/matcha-ceremony.jpg',
            link: 'https://www.matchaful.com/pages/history-of-matcha'
        },
        // 他の項目も同様に追加...
    ]
};

// DOM要素
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

// 初期設定
let currentLanguage = 'ja';
let darkMode = true;

// アプリの初期化
function initApp() {
    renderCards();
    setupEventListeners();
    checkPWA();
}

// カードをレンダリング
function renderCards() {
    gridContainer.innerHTML = '';
    const data = matchaData[currentLanguage];
    
    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'knowledge-card';
        card.innerHTML = `
            <h3 class="card-title">${item.title}</h3>
            <img src="${item.image}" alt="${item.title}" class="card-image">
            <p>${item.shortDesc}</p>
        `;
        card.addEventListener('click', () => showDetail(item));
        gridContainer.appendChild(card);
    });
}

// 詳細表示
function showDetail(item) {
    detailTitle.textContent = item.title;
    detailImage.src = item.image;
    detailImage.alt = item.title;
    detailDescription.textContent = item.longDesc;
    detailLink.href = item.link;
    detailLink.textContent = currentLanguage === 'ja' ? 'さらに詳しく' : 'Learn more';
    
    document.querySelector('.knowledge-grid').classList.add('hidden');
    detailView.classList.add('visible');
}

// グリッド表示に戻る
function backToGrid() {
    document.querySelector('.knowledge-grid').classList.remove('hidden');
    detailView.classList.remove('visible');
}

// イベントリスナーの設定
function setupEventListeners() {
    backButton.addEventListener('click', backToGrid);
    
    themeToggle.addEventListener('click', () => {
        darkMode = !darkMode;
        if (darkMode) {
            document.body.classList.remove('clear-mode');
            themeToggle.querySelector('.icon').textContent = '🌓';
        } else {
            document.body.classList.add('clear-mode');
            themeToggle.querySelector('.icon').textContent = '☀️';
        }
    });
    
    languageToggle.addEventListener('click', () => {
        currentLanguage = currentLanguage === 'ja' ? 'en' : 'ja';
        appTitle.textContent = currentLanguage === 'ja' ? '抹茶の知識' : 'Matcha Knowledge';
        renderCards();
        if (detailView.classList.contains('visible')) {
            const currentId = detailTitle.id;
            const currentItem = matchaData[currentLanguage].find(item => item.id === currentId);
            if (currentItem) showDetail(currentItem);
        }
    });
}

// PWAのチェックとサービスワーカーの登録
function checkPWA() {
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

// アプリを起動
initApp();