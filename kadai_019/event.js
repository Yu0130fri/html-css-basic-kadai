document.getElementById("btn").addEventListener('click', () => {
    let h2_text = document.getElementById("text");
    if (h2_text.textContent.slice(-6,) == "してください"){
        h2_text.textContent = "ボタンをクリックしました"
    } else if (h2_text.textContent.slice(-4,) == "しました") {
        h2_text.textContent = "ボタンをクリックしてください"
    } else{
        console.error("予期しないHTMLが入力されています", h2_text.textContent.slice(-6, -1))
    }
})