<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>個人情報入力フォーム</title>
</head>
<body>
    <h1>個人情報入力フォーム</h1>
    <form action="confirmation.php" method="post">
        <div>
            <label for="user_name">お名前</label>
            <input type="text" name="user_name">
        </div>
        <div>
            <label for="sex">性別</label>
            <input type="radio" name="sex" id="male" value="男性">男性
            <input type="radio" name="sex" id="female" value="女性">女性
        </div>
        <div>
            <label for="email">メールアドレス</label>
            <input type="text" name="email">
        </div>

        <input type="submit" value="送信">
    </form>
</body>
</html>