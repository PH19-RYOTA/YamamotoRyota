const circle = document.getElementById('clickable-circle');
    const loadingText = document.getElementById('loading-text');

    // 円をクリックしたらテキストを非表示にし、円を拡大
    circle.addEventListener('click', function() {
        loadingText.style.opacity = '0'; // テキストを非表示に
        circle.style.transform = 'scale(40)'; // 円を拡大
        setTimeout(function() {
            window.location.href = 'about.html'; // about.htmlに遷移
        }, 1000); // 拡大が完了するまでの時間（500ms）を設定
    });

    function handleMobile() {
        // 画面幅が768px以下の場合にのみ実行
        if (window.innerWidth <= 768) {
            loadingText.style.opacity = '0'; // テキストを非表示に
            circle.style.transform = 'scale(40)'; // 円を拡大
            setTimeout(function() {
                window.location.href = 'about.html'; // about.htmlに遷移
            },5000);
            }
        }