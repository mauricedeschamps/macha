// 抹茶知識データ - 8項目+まとめ
const matchaData = {
    en: [
        {
            id: 'definition',
            title: 'Definition & Characteristics',
            shortDesc: 'What makes matcha unique',
            longDesc: 'Matcha is a finely ground powder of specially grown green tea leaves. Unlike regular green tea, you consume the whole leaf, making it more nutritious. It\'s grown under shade which increases chlorophyll and amino acid content.',
            image: 'images - 2025-07-08T170013.338.jpeg'
        },
        {
            id: 'history',
            title: 'History',
            shortDesc: 'From China to Japan',
            longDesc: 'Matcha was brought to Japan from China in the 12th century by Zen Buddhist monks. In the 16th century, Sen no Rikyu established the Japanese tea ceremony. Recently, its health benefits have made it popular worldwide.',
            image: 'images - 2025-07-09T095327.142.jpeg'
        },
        {
            id: 'health',
            title: 'Health Benefits',
            shortDesc: 'Why matcha is a superfood',
            longDesc: 'Matcha is rich in catechins (antioxidants), L-theanine (amino acid), chlorophyll, vitamins and minerals. Benefits include boosting metabolism, enhancing calm, improving focus, and supporting immune function.',
            image: 'images - 2025-07-09T104527.767.jpeg'
        },
        {
            id: 'types',
            title: 'Types & Selection',
            shortDesc: 'Grades and quality',
            longDesc: 'Ceremonial grade (highest quality), premium grade (daily drinking), culinary grade (cooking/baking). Look for vibrant green color, fresh aroma, fine texture, and reputable origins like Uji or Nishio.',
            image: 'images - 2025-07-09T114616.823.jpeg'
        },
        {
            id: 'uses',
            title: 'Uses',
            shortDesc: 'Traditional and modern',
            longDesc: 'Traditional: usucha (thin tea), koicha (thick tea). Modern: lattes, smoothies, desserts, noodles, seasonings. Also used in beauty products.',
            image: 'images - 2025-07-09T104307.559.jpeg'
        },
        {
            id: 'global',
            title: 'Global Popularity',
            shortDesc: 'Worldwide matcha boom',
            longDesc: 'Global market projected to reach $5 billion by 2027. Popular in health communities, coffee chains, and social media. Challenges include supply shortages and quality control.',
            image: 'images - 2025-07-09T095305.707.jpeg'
        },
        {
            id: 'regions',
            title: 'Production Regions',
            shortDesc: 'Japan\'s matcha areas',
            longDesc: 'Uji (Kyoto) - gold standard; Nishio (Aichi) - vibrant color; Yame (Fukuoka) - sweet flavor; Shizuoka - largest producer. Each has unique soil, climate and processing techniques.',
            image: 'images - 2025-07-08T100625.280.jpeg'
        },
        {
            id: 'storage',
            title: 'Storage',
            shortDesc: 'Keeping matcha fresh',
            longDesc: 'Store in air-tight containers in cool, dark place. Refrigerate for long-term. Use within 4-6 weeks after opening. Signs of spoilage: dull color, musty smell.',
            image: 'images - 2025-07-09T125203.283.jpeg'
        },
        {
            id: 'summary',
            title: 'Summary',
            shortDesc: 'Essence of matcha',
            longDesc: 'Matcha combines tradition, health and versatility. From Zen origins to global popularity, it embodies Japanese culture while adapting to modern tastes. Future growth focuses on sustainability and innovation.',
            image: 'images/summary.jpg'
        }
    ],
    ja: [
        {
            id: 'definition',
            title: '定義と特徴',
            shortDesc: '抹茶の独特な点',
            longDesc: '抹茶は碾茶を石臼で挽いた粉末茶です。普通の緑茶と違い、茶葉全体を摂取するため栄養価が高いです。覆下栽培によりクロロフィルとアミノ酸が増加します。',
            image: 'images - 2025-07-08T170013.338.jpeg'
        },
        {
            id: 'history',
            title: '歴史',
            shortDesc: '中国から日本へ',
            longDesc: '抹茶は12世紀に栄西禅師によって中国から日本にもたらされました。16世紀に千利休が茶道を確立。近年、健康効果から世界的に人気です。',
            image: 'images - 2025-07-09T095327.142.jpeg'
        },
        {
            id: 'health',
            title: '健康効果',
            shortDesc: '抹茶がスーパーフードと呼ばれる理由',
            longDesc: '抹茶はカテキン（抗酸化物質）、テアニン（アミノ酸）、クロロフィル、ビタミン・ミネラルが豊富。代謝向上、リラックス効果、集中力向上、免疫力サポートなどの利点があります。',
            image: 'images - 2025-07-09T104527.767.jpeg'
        },
        {
            id: 'types',
            title: '種類と選び方',
            shortDesc: '等級と品質',
            longDesc: '抹茶には、 ceremonial grade（最高級）、premium grade（日常用）、culinary grade（料理用）があります。鮮やかな緑色、新鮮な香り、細かい粒子、宇治や西尾などの産地を確認しましょう。',
            image: 'images - 2025-07-09T114616.823.jpeg'
        },
        {
            id: 'uses',
            title: '使い方',
            shortDesc: '伝統的と現代的な利用法',
            longDesc: '伝統的：薄茶、濃茶。現代的：ラテ、スムージー、デザート、麺類、調味料。美容製品にも使用されます。',
            image: 'images - 2025-07-09T104307.559.jpeg'
        },
        {
            id: 'global',
            title: '世界的な人気',
            shortDesc: '世界の抹茶ブーム',
            longDesc: '世界市場は2027年までに50億ドル規模に成長予測。健康志向のコミュニティ、カフェチェーン、SNSで人気。供給不足や品質管理が課題です。',
            image: 'images - 2025-07-09T095305.707.jpeg'
        },
        {
            id: 'regions',
            title: '産地',
            shortDesc: '日本の主な抹茶産地',
            longDesc: '宇治（京都） - 最高級品、西尾（愛知） - 鮮やかな色、八女（福岡） - 甘み、静岡 - 最大の生産地。それぞれ土壌、気候、加工技術が異なります。',
            image: 'images - 2025-07-08T100625.280.jpeg'
        },
        {
            id: 'storage',
            title: '保存方法',
            shortDesc: '抹茶を新鮮に保つ',
            longDesc: '密閉容器に入れ、涼しく暗い場所で保管。長期保存は冷蔵庫で。開封後は4-6週間以内に使用。劣化のサイン：色あせ、カビ臭。',
            image: 'images - 2025-07-09T125203.283.jpeg'
        },
        {
            id: 'summary',
            title: 'まとめ',
            shortDesc: '抹茶の本質',
            longDesc: '抹茶は伝統、健康、多様性を兼ね備えています。禅の起源から世界的な人気まで、日本の文化を体現しながら現代の味覚に適応しています。今後の成長は持続可能性と革新に焦点が当てられます。',
            image: 'images/summary.jpg'
        }
    ]
};

// アプリの初期化
document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.knowledge-grid');
    const detailView = document.getElementById('detail-view');
    const detailTitle = document.getElementById('detail-title');
    const detailImage = document.getElementById('detail-image');
    const detailDesc = document.getElementById('detail-description');
    const backBtn = document.getElementById('back-button');
    const langBtn = document.getElementById('language-toggle');
    const appTitle = document.getElementById('app-title');

    let currentLang = 'en';

    // カードを表示
    function renderCards() {
        grid.innerHTML = '';
        matchaData[currentLang].forEach(item => {
            const card = document.createElement('div');
            card.className = 'knowledge-card';
            card.innerHTML = `
                <h3 class="card-title">${item.title}</h3>
                <img src="${item.image}" alt="${item.title}" class="card-image">
                <p>${item.shortDesc}</p>
            `;
            card.addEventListener('click', () => showDetail(item));
            grid.appendChild(card);
        });
    }

    // 詳細を表示
    function showDetail(item) {
        detailTitle.textContent = item.title;
        detailImage.src = item.image;
        detailImage.alt = item.title;
        detailDesc.textContent = item.longDesc;
        
        grid.classList.add('hidden');
        detailView.classList.add('visible');
    }

    // グリッドに戻る
    function backToGrid() {
        grid.classList.remove('hidden');
        detailView.classList.remove('visible');
    }

    // 言語を切り替え
    function toggleLanguage() {
        currentLang = currentLang === 'en' ? 'ja' : 'en';
        appTitle.textContent = currentLang === 'en' ? 'Matcha Knowledge' : '抹茶の知識';
        backBtn.textContent = currentLang === 'en' ? '← Back' : '← 戻る';
        renderCards();
    }

    // イベントリスナー
    backBtn.addEventListener('click', backToGrid);
    langBtn.addEventListener('click', toggleLanguage);

    // 初期表示
    renderCards();
});
