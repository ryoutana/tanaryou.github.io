// script.js

// スポットデータ（座標は地図画像内の相対的なピクセル位置）
const spots = [
    { name: '会津坂下町', img: '会津坂下町(白地図).png', x: 275, y: 303, width: 78 },
    { name: '会津若松市', img: '会津若松市(白地図).png', x: 337, y: 368, width: 158 },
    { name: '会津美里町', img: '会津美里町(白地図).png', x: 250, y: 150, width: 40 },
    { name: '喜多方市', img: '喜多方市(白地図).png', x: 291, y: 230, width: 170 },
    { name: '金山町', img: '金山町(白地図).png', x: 450, y: 250, width: 45 },
    { name: '三島町', img: '三島町(白地図).png', x: 50, y: 300, width: 50 },
    { name: '昭和村', img: '昭和村(白地図).png', x: 150, y: 350, width: 55 },
    { name: '西会津町', img: '西会津町(白地図).png', x: 214, y: 260, width: 180 },
    { name: '猪苗代町', img: '猪苗代町(白地図).png', x: 350, y: 450, width: 60 },
    { name: '湯川村', img: '湯川村(白地図).png', x: 309, y: 306, width: 30 },
    { name: '磐梯町', img: '磐梯町(白地図).png', x: 50, y: 550, width: 100 },
    { name: '北塩原村', img: '北塩原村(白地図).png', x: 374, y: 244, width: 123 },
    { name: '柳津町', img: '柳津町(白地図).png', x: 250, y: 650, width: 50 }
];

// スポットを動的に生成
function generateSpots() {
    const spotContainer = document.getElementById('spotContainer');
    const mapContainer = document.getElementById('mapContainer');

    if (!spotContainer || !mapContainer) {
        console.error('Error: 必要な要素が見つかりません。');
        return;
    }

    const mapWidth = mapContainer.offsetWidth; // 地図の幅
    const mapHeight = mapContainer.offsetHeight; // 地図の高さ

    spots.forEach(spot => {
        const img = document.createElement('img');
        img.src = spot.img;
        img.alt = spot.name;
        img.style.width = `${(spot.width / 800) * mapWidth}px`; // 幅を地図のサイズに比例させる
        img.style.left = `${(spot.x / 800) * mapWidth}px`; // x座標を地図のサイズに比例させる
        img.style.top = `${(spot.y / 800) * mapHeight}px`; // y座標を地図のサイズに比例させる
        img.classList.add('spot-image');

        // クリックイベントで色を変更
        img.addEventListener('click', () => {
            if (img.classList.contains('active')) {
                img.classList.remove('active'); // 緑から灰色に戻す
            } else {
                img.classList.add('active'); // 緑にする
            }
        });

        spotContainer.appendChild(img);
    });
}

// 初期化処理
function init() {
    generateSpots();
    console.log('スポット画像の生成が完了しました。');
}

// ページ読み込み時に初期化
window.onload = init;