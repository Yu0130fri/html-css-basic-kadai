$(function(){});

$('#change-color').on('click', ()=>{
    $('#target').css('color', 'red');
})

$('#change-text').on('click', ()=>{
    let targetText = $('#target').text();
    const helloWord = "こんにちは！"
    if (targetText === helloWord){
        $('#target').text('Hello');
    }else{
        $('#target').text(helloWord);
    }
})

$('#fade-out').on('click', () => {
    $('#target').fadeOut();
})

$('#fade-in').on('click', () => {
    $('#target').fadeIn();
})
