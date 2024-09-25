let percentage = 0;
    let interval = setInterval(() => {
        percentage++;
        document.getElementById("percentage").innerText = percentage + "%";
        if (percentage >= 100) {
            clearInterval(interval);
            // ローディングが完了したらメインページに遷移する
            window.location.href = 'main.html'; // main.htmlに遷移
        }
    }, 20); // アニメーションの速度を調整