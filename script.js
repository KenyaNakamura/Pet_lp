// 各セクションのフェードイン実装
$(function () {
  $(window).on('load scroll', function () {
    $('.animation').each(function () {
      //ターゲットの位置を取得
      var target = $(this).offset().top;
      //スクロール量を取得
      var scroll = $(window).scrollTop();
      //ウィンドウの高さを取得
      var height = $(window).height();
      //ターゲットまでスクロールするとフェードインする
      if (scroll > target - height) {
        //クラスを付与
        $(this).addClass('active');
      }
    });
  });
});



AOS.init({
  offset: 300,
  duration: 200,
  anchorPlacement: "center-center",


  disable: function () {
    return window.innerWidth < 1000;
  }


});

