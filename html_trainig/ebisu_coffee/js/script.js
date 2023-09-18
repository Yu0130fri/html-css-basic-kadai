$(function(){
    // ページ内リンクのスクロールをなめらかにする（スムーズスクロール）
    // （備忘）アロー関数はjqueryでは控えた方が良い
    //https://teratail.com/questions/2loxj82skxz7pe
    $('a[href^="#"]').on('click', function() {
        const speed = 500;
        let href = $(this).attr('href');
        let $target;
        if (href == '#') {
            $target = $('html');
        }else {
            $target = $(href);
        }
        const position = $target.offset().top;
        $('html, body').animate({ 'scrollTop': position }, speed, 'swing');
        
        return false;
    })

    $('#read_more_button').hover(() => {
        return False
    })
})