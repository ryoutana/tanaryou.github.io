<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>観光スポット検索</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1 id="pageTitle">観光スポット検索</h1>
    </header>
    <main>
        <section id="intro">
            <p id="introText">検索したいエリアを選択してください。</p>
            <div id="mapContainer">
                <img id="introImage" src="福島県白地図.png" alt="福島県の地図">
                <div id="spotContainer"></div>
            </div>
            <div id="buttonContainer"></div>
        </section>
    </main>
    <script src="script.js"></script>
</body>
</html>