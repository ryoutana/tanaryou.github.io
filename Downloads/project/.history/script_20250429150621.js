// script.js

// スポットデータ（IDと名前の対応）
const spots = [
    { id: 'aizubange', name: '会津坂下町' },
    { id: 'aizuwakamatsu', name: '会津若松市' },
    { id: 'aizumisato', name: '会津美里町' },
    { id: 'kitakata', name: '喜多方市' },
    { id: 'kaneyama', name: '金山町' },
    { id: 'mishima', name: '三島町' },
    { id: 'showa', name: '昭和村' },
    { id: 'nishiaizu', name: '西会津町' },
    { id: 'inawashiro', name: '猪苗代町' },
    { id: 'yugawa', name: '湯川村' },
    { id: 'bandai', name: '磐梯町' },
    { id: 'kitashiobara', name: '北塩原村' },
    { id: 'yanaizu', name: '柳津町' }
];

// スポットを動的に生成
function generateSpots() {
    spots.forEach(spot => {
        const path = document.getElementById(spot.id);

        if (!path) {
            console.error(`Error: ID "${spot.id}" に対応する要素が見つかりません。`);
            return;
        }

        // カーソルが乗ったときの色変更
        path.addEventListener('mouseover', () => {
            if (!path.classList.contains('active')) {
                path.setAttribute('fill', 'rgba(144, 238, 144, 0.5)'); // 黄緑
            }
        });

        // カーソルが外れたときの色変更
        path.addEventListener('mouseout', () => {
            if (!path.classList.contains('active')) {
                path.setAttribute('fill', 'rgba(200, 200, 200, 0.5)'); // 元の薄い灰色に戻す
            }
        });

        // クリックイベント
        path.addEventListener('click', () => {
            if (path.classList.contains('active')) {
                path.classList.remove('active');
                path.setAttribute('fill', 'rgba(200, 200, 200, 0.5)'); // 元の薄い灰色に戻す
            } else {
                path.classList.add('active');
                path.setAttribute('fill', 'green'); // 緑
            }
        });
    });
}

// 初期化処理
function init() {
    generateSpots();
    console.log('スポット画像の生成が完了しました。');
}

// ページ読み込み時に初期化
window.onload = init;