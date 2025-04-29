// スポットデータ（座標は地図画像内の相対的なピクセル位置）
const spots = [
    { name: '会津坂下町', img: '会津坂下町(白地図).png', x: 275, y: 303, width: 78, zIndex: 30 },
    { name: '会津若松市', img: '会津若松市(白地図).png', x: 337, y: 368, width: 158, zIndex: 20 },
    { name: '会津美里町', img: '会津美里町(白地図).png', x: 283, y: 390, width: 149, zIndex: 21 },
    { name: '喜多方市', img: '喜多方市(白地図).png', x: 291, y: 230, width: 170, zIndex: 25 },
    { name: '金山町', img: '金山町(白地図).png', x: 150, y: 381, width: 133, zIndex: 5 },
    { name: '三島町', img: '三島町(白地図).png', x: 216, y: 377, width: 83, zIndex: 40 },
    { name: '昭和村', img: '昭和村(白地図).png', x: 207, y: 444, width: 115, zIndex: 12 },
    { name: '西会津町', img: '西会津町(白地図).png', x: 214, y: 260, width: 180, zIndex: 18 },
    { name: '猪苗代町', img: '猪苗代町(白地図).png', x: 418, y: 288, width: 178, zIndex: 19 },
    { name: '湯川村', img: '湯川村(白地図).png', x: 309, y: 306, width: 32, zIndex: 30 },
    { name: '磐梯町', img: '磐梯町(白地図).png', x: 357, y: 304, width: 69, zIndex: 28 },
    { name: '北塩原村', img: '北塩原村(白地図).png', x: 374, y: 244, width: 123, zIndex: 26 },
    { name: '柳津町', img: '柳津町(白地図).png', x: 229, y: 363, width: 134, zIndex: 31 }
];

// スポットを動的に生成
function generateSpots() {
    const spotContainer = document.getElementById('spotContainer');
    const mapContainer = document.getElementById('mapContainer');
    const buttonContainer = document.getElementById('buttonContainer');

    if (!spotContainer || !mapContainer || !buttonContainer) {
        console.error('Error: 必要な要素が見つかりません。');
        return;
    }

    const mapWidth = mapContainer.offsetWidth; // 地図の幅
    const mapHeight = mapContainer.offsetHeight; // 地図の高さ

    spots.forEach((spot, index) => {
        // スポット画像を作成
        const img = document.createElement('img');
        img.src = spot.img;
        img.alt = spot.name;
        img.style.position = 'absolute';
        img.style.width = `${(spot.width / 800) * mapWidth}px`; // 幅を地図のサイズに比例させる
        img.style.left = `${(spot.x / 800) * mapWidth}px`; // x座標を地図のサイズに比例させる
        img.style.top = `${(spot.y / 800) * mapHeight}px`; // y座標を地図のサイズに比例させる
        img.classList.add('spot-image');
        img.style.filter = 'brightness(0.9) saturate(0)'; // デフォルトの薄い灰色
        img.style.zIndex = spot.zIndex; // 個別に指定された優先順位を適用

        // カーソルが乗ったときの色変更
        img.addEventListener('mouseover', () => {
            if (img.classList.contains('active')) {
                img.style.filter = 'hue-rotate(240deg)'; // 青色にする
            } else {
                img.style.filter = 'hue-rotate(90deg)'; // 黄緑にする
            }
        });

        img.addEventListener('mouseout', () => {
            if (img.classList.contains('active')) {
                img.style.filter = 'hue-rotate(120deg)'; // 緑に戻す
            } else {
                img.style.filter = 'brightness(0.9) saturate(0)'; // 元の薄い灰色に戻す
            }
        });

        // クリックイベントを設定
        img.addEventListener('click', () => {
            if (img.classList.contains('active')) {
                img.classList.remove('active'); // 緑から元の薄い灰色に戻す
                img.style.filter = 'brightness(0.9) saturate(0)'; // 元の薄い灰色に戻す
            } else {
                img.classList.add('active'); // 緑にする
                img.style.filter = 'hue-rotate(120deg)'; // 緑にする
            }
        });

        // スポット画像を追加
        spotContainer.appendChild(img);

        // ボタンを作成
        const button = document.createElement('button');
        button.textContent = spot.name;
        button.classList.add('spot-button');
        button.addEventListener('click', () => {
            // ボタンを押したときに対応する画像をクリックしたのと同じ動作を実行
            img.click();
        });

        // ボタンを追加
        buttonContainer.appendChild(button);
    });
}

// 初期化処理
function init() {
    generateSpots();
    console.log('スポット画像とボタンの生成が完了しました。');
}

// ページ読み込み時に初期化
window.onload = init;