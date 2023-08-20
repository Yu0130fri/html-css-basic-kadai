document.getElementById("btn").addEventListener('click', () => {
    let h2_text = document.getElementById("text");
    if (h2_text.textContent.slice(-6,) == "してください"){
        setTimeout(() => {
            h2_text.textContent = "ボタンをクリックしました"
        }, 2000)
    } else if (h2_text.textContent.slice(-4,) == "しました") {
        setTimeout(() => {
            h2_text.textContent = "ボタンをクリックしてください"
        }, 2000)
    } else{
        console.error("予期しないHTMLが入力されています", h2_text.textContent.slice(-6, -1))
    }
})