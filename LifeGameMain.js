////設定用ファイルは「LifeGame」

main();

function main() {
  drawBlocks();
  preparationBlockColor();
  clickChangeBlock();

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
    $('#blocks>tr>td').off("click");
    $('#automatic').css("background-color","rgb(146, 230, 255)");
  });

  //停止ボタン
  $('#stop').on("click", function() {
    clearInterval(timer);
    clickChangeBlock();
    restorationButton();
  })

  //削除ボタン
  $('#reset').on("click", function() {
    clearInterval(timer);
    restorationButton();
    main();
  });
}
