// スポットデータ（座標は地図画像内の相対的なピクセル位置）
const spots = [
    { name: '会津坂下町', img: '会津坂下町(白地図).png', x: 275, y: 303, width: 78 },
    { name: '会津若松市', img: '会津若松市(白地図).png', x: 337, y: 368, width: 158 },
    { name: '会津美里町', img: '会津美里町(白地図).png', x: 283, y: 390, width: 149 },
    { name: '喜多方市', img: '喜多方市(白地図).png', x: 291, y: 230, width: 170 },
    { name: '金山町', img: '金山町(白地図).png', x: 150, y: 381, width: 133 },
    { name: '三島町', img: '三島町(白地図).png', x: 216, y: 377, width: 83 },
    { name: '昭和村', img: '昭和村(白地図).png', x: 207, y: 444, width: 115 },
    { name: '西会津町', img: '西会津町(白地図).png', x: 214, y: 260, width: 180 },
    { name: '猪苗代町', img: '猪苗代町(白地図).png', x: 418, y: 288, width: 178 },
    { name: '湯川村', img: '湯川村(白地図).png', x: 309, y: 306, width: 32 },
    { name: '磐梯町', img: '磐梯町(白地図).png', x: 357, y: 304, width: 69 },
    { name: '北塩原村', img: '北塩原村(白地図).png', x: 374, y: 244, width: 123 },
    { name: '柳津町', img: '柳津町(白地図).png', x: 229, y: 363, width: 134 }
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
        // スポット画像を作成
        const img = document.createElement('img');
        img.src = spot.img;
        img.alt = spot.name;
        img.style.position = 'absolute';
        img.style.width = `${(spot.width / 800) * mapWidth}px`; // 幅を地図のサイズに比例させる
        img.style.left = `${(spot.x / 800) * mapWidth}px`; // x座標を地図のサイズに比例させる
        img.style.top = `${(spot.y / 800) * mapHeight}px`; // y座標を地図のサイズに比例させる
        img.classList.add('spot-image');

        // 当たり判定用の透明な要素を作成
        const hitbox = document.createElement('div');
        hitbox.style.position = 'absolute';
        hitbox.style.width = `${(spot.width * 0.5 / 800) * mapWidth}px`; // 表示されている画像の0.5倍の幅
        hitbox.style.height = `${(spot.width * 0.5 / 800) * mapHeight}px`; // 表示されている画像の0.5倍の高さ
        hitbox.style.left = `${(spot.x / 800) * mapWidth}px`; // x座標を地図のサイズに比例させる
        hitbox.style.top = `${(spot.y / 800) * mapHeight}px`; // y座標を地図のサイズに比例させる
        hitbox.style.transform = 'translate(-50%, -50%)'; // 中心基準で配置
        hitbox.style.backgroundColor = 'rgba(0, 0, 0, 0)'; // 完全に透明
        hitbox.style.cursor = 'pointer';

        // カーソルが乗ったときの色変更
        hitbox.addEventListener('mouseover', () => {
            img.style.filter = 'brightness(1.2) hue-rotate(90deg)'; // 黄緑にする
        });
        hitbox.addEventListener('mouseout', () => {
            if (!img.classList.contains('active')) {
                img.style.filter = 'brightness(0.8)'; // 元に戻す
            }
        });

        // クリックイベントを透明な要素に設定
        hitbox.addEventListener('click', () => {
            if (img.classList.contains('active')) {
                img.classList.remove('active'); // 緑から灰色に戻す
                img.style.filter = 'brightness(0.8)'; // 元の色に戻す
            } else {
                img.classList.add('active'); // 緑にする
                img.style.filter = 'brightness(1) hue-rotate(120deg)'; // 緑にする
            }
        });

        // スポット画像と透明な要素を追加
        spotContainer.appendChild(img);
        spotContainer.appendChild(hitbox);
    });
}

// 初期化処理
function init() {
    generateSpots();
    console.log('スポット画像の生成が完了しました。');
}

// ページ読み込み時に初期化
window.onload = init;