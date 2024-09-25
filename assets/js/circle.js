const circle = document.getElementById('clickable-circle');
    const loadingText = document.getElementById('loading-text');

    // 円をクリックしたらテキストを非表示にし、円を拡大
    circle.addEventListener('click', function() {
        loadingText.style.opacity = '0'; // テキストを非表示に
        circle.style.transform = 'scale(50)'; // 円を拡大
        setTimeout(function() {
            window.location.href = 'about.html'; // about.htmlに遷移
        }, 300); // 拡大が完了するまでの時間（200ms）を設定
    });