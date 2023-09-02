<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kadai 011</title>
</head>
<body>
    <?php
        $user_record = [
            '名前' => '玉ねぎ',
            '値段' => 200,
            '産地' => '北海道',
        ];

        foreach ($user_record as $key => $value){
            echo "{$key}: ${value}";
            echo '<br>';
        }
    ?>
</body>
</html>