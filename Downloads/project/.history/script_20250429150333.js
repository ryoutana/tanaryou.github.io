/* styles.css */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

header {
    text-align: center;
    margin: 20px 0;
}

#mapContainer {
    position: relative;
    width: 800px;
    height: 600px;
    margin: 0 auto;
    border: 1px solid #ccc;
}

#introImage {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
}

#spotContainer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
}

path {
    fill: rgba(200, 200, 200, 0.5); /* デフォルトの薄い灰色 */
    stroke: black;
    stroke-width: 1;
    cursor: pointer;
    transition: fill 0.3s ease;
}

path:hover {
    fill: rgba(144, 238, 144, 0.5); /* 黄緑 */
}