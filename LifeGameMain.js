////設定用ファイルは「LifeGame」

main();

function main() {
  drawBlocks();
  preparationBlockColor();
  clickChangeBlock();
  a();
  //進むボタン
  $('#next').on("click", function() {
    clickNextButton();
  });

  //自動ボタン
  $('#automatic').on("click", function() {
    timer = setInterval(function() { 
      clickNextButton();
    },700);
    document.getElementById('next').disabled = true;
    document.getElementById('automatic').disabled = true;
    cssPointerEventsNone();
    //.ofにするとrestorationSet()実行時、clickChangeBlock()が2連続で反応する。
    //上記対策のため、cssPointerEventsNone()、cssPointerEventsAuto()で対応する。
    $('#automatic').css("background-color","rgb(146, 230, 255)");
  });

  //停止ボタン
  $('#stop').on("click", function() {
    restorationSet();
  });

  //削除ボタン
  $('#reset').on("click", function() {
    clickResetButton();
    restorationSet();
  });
}

//自動ボタン選択 → 別ボタン選択、画面復旧
function restorationSet() {
  clearInterval(timer);
  cssPointerEventsAuto();
  restorationButton();
}
