// キーワード要素を取得
const keywords = document.querySelectorAll('.keyword');
const era = document.querySelectorAll('.era');

// 各キーワードにクリックイベントを追加
keywords.forEach(keyword => {
    keyword.addEventListener('click', () => {
        // クリックされたキーワードに対応する情報を取得
        const info = keyword.getAttribute('data-info');
        
        // アラートを表示
        alert(info); // data-infoの内容をアラートで表示
    });
});