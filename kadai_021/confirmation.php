<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>出力結果</title>
</head>
<body>
    <?php
        echo "お名前: {$_POST['user_name']}";
        echo '<br>';
        echo "性別: {$_POST['sex']}";
        echo '<br>';
        echo "メールアドレス: {$_POST['email']}";
    ?>
</body>
</html>