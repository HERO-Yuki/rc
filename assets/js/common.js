//footerの高さを#body-wrapperのpaddingに設定
$(function () {
    var padding_top = $('#header').innerHeight();
    //var padding_bottom = $('#footer').innerHeight();
    $('#body-wrapper').css({
        'padding-top': padding_top + "px",
        //'padding-bottom': padding_bottom + "px"
    });
});

//グローバルナビゲーション
    /* ハンバーガーメニューの表示・非表示 */
$(document).on('click', '#hamburger-btn' , function() {
    $('#hamburger-btn').addClass('close-hamburger');
    $('#hamburger-btn').addClass('active');
    $('.header-nav').addClass('active');
    $('.cover-hamburger').addClass('active');
    $('body').css('overflow', 'hidden');
});
$(document).on('click', '.close-hamburger' , function() {
    $('#hamburger-btn').removeClass('active');
    $('#hamburger-btn').removeClass('close-hamburger');
    $('.header-nav').removeClass('active');
    $('.cover-hamburger').removeClass('active');
    $('body').css('overflow', 'auto');
});

//アンカーリンクスムーズスクロール
$('a[href^="#"]').click(function(){
    var adjust = 50;
    var speed = 500;
    var href= $(this).attr('href');
    var target = $(href == '#' || href == '' ? 'html' : href);
    var position = target.offset().top  - adjust;
    $('html, body').animate({scrollTop:position}, speed, 'swing');
    return false;
});

//スクロールしたら表示されるTOPへ戻るボタン
$(function() {
    var topBtn = $('#gototop');
    topBtn.hide();
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
});

//モーダル
$(function(){
    // ボタンを押してモーダルを表示（#modal の display: none → block）
    $('.modal_open').on('click',function(){
        var id = $(this).data('id'); // data-idを取得して変数idに格納
        var tar = ".modal" + id; // ボタンに応じたモーダルのクラスを取得
        $(tar).fadeIn(0);
		$('.cover-modal').fadeIn(0);
        return false;
    });
    
    // 黒背景か戻るボタンを押して
    // モーダルを非表示（#modal の display: block → none）
    $('.close-modal').on('click',function(){
        $('.modal').fadeOut(0);
		$('.cover-modal').fadeOut(0);
        return false;
    });
});