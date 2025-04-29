// スポットデータ（座標は地図画像内の相対的なピクセル位置）
const spots = [
    { name: '会津坂下町', img: '会津坂下町(白地図).png', x: 275, y: 303, width: 78, hitboxWidth: 100, hitboxHeight: 100 },
    { name: '会津若松市', img: '会津若松市(白地図).png', x: 337, y: 368, width: 158, hitboxWidth: 200, hitboxHeight: 200 },
    { name: '会津美里町', img: '会津美里町(白地図).png', x: 283, y: 390, width: 149, hitboxWidth: 150, hitboxHeight: 150 },
    { name: '喜多方市', img: '喜多方市(白地図).png', x: 291, y: 230, width: 170, hitboxWidth: 180, hitboxHeight: 180 },
    { name: '金山町', img: '金山町(白地図).png', x: 150, y: 381, width: 133, hitboxWidth: 140, hitboxHeight: 140 },
    { name: '三島町', img: '三島町(白地図).png', x: 216, y: 377, width: 83, hitboxWidth: 100, hitboxHeight: 100 },
    { name: '昭和村', img: '昭和村(白地図).png', x: 207, y: 444, width: 115, hitboxWidth: 120, hitboxHeight: 120 },
    { name: '西会津町', img: '西会津町(白地図).png', x: 214, y: 260, width: 180, hitboxWidth: 200, hitboxHeight: 200 },
    { name: '猪苗代町', img: '猪苗代町(白地図).png', x: 418, y: 288, width: 178, hitboxWidth: 180, hitboxHeight: 180 },
    { name: '湯川村', img: '湯川村(白地図).png', x: 309, y: 306, width: 32, hitboxWidth: 50, hitboxHeight: 50 },
    { name: '磐梯町', img: '磐梯町(白地図).png', x: 357, y: 304, width: 69, hitboxWidth: 80, hitboxHeight: 80 },
    { name: '北塩原村', img: '北塩原村(白地図).png', x: 374, y: 244, width: 123, hitboxWidth: 130, hitboxHeight: 130 },
    { name: '柳津町', img: '柳津町(白地図).png', x: 229, y: 363, width: 134, hitboxWidth: 150, hitboxHeight: 150 }
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
        hitbox.style.width = `${(spot.hitboxWidth / 800) * mapWidth}px`; // 当たり判定の幅
        hitbox.style.height = `${(spot.hitboxHeight / 800) * mapHeight}px`; // 当たり判定の高さ
        hitbox.style.left = `${(spot.x / 800) * mapWidth}px`; // x座標を地図のサイズに比例させる
        hitbox.style.top = `${(spot.y / 800) * mapHeight}px`; // y座標を地図のサイズに比例させる
        hitbox.style.transform = 'translate(-50%, -50%)'; // 中心基準で配置
        hitbox.style.backgroundColor = 'rgba(0, 0, 0, 0)'; // 完全に透明
        hitbox.style.cursor = 'pointer';

        // クリックイベントを透明な要素に設定
        hitbox.addEventListener('click', () => {
            if (img.classList.contains('active')) {
                img.classList.remove('active'); // 緑から灰色に戻す
            } else {
                img.classList.add('active'); // 緑にする
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