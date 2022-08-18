$("#tab-contents.tab[id != "tab1"]").hide();
//$('要素[属性]')
//hide特定のHTML要素を非表示にするメソッド

$("#tab-menu a").on("click",function(event){
  $("#tab-contents.tab").hide();//全コンテンツを非表示
  $("#tab-menu.active").removeClass("active");
  //クラス属性が設定されているHTML要素から、クラスを削除するメソッド
  $(this).addClass("active");//thisクリックされた時
  //任意のHTML要素にクラス属性を追加できるメソッド
  $($(this).attr("href")).show();
  //attr,HTML要素の属性を取得したり設定できるメソッド
  //show,要素を表示するメソッド
  event.preventDefault();
});