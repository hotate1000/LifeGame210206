////設定用ファイル、実行用は「LifeGameMain」

'use strict';
//ブロック量を指定
const BLOCK_WIDTH_AMOUNT  = 30;
const BLOCK_HEIGHT_AMOUNT = 30;
//白・黒枠判定用
let generation = [];
//自動用
let timer;

//ブロックの描画
function drawBlocks() {
  $('table#blocks').empty();
  for(let y = 0; y < BLOCK_HEIGHT_AMOUNT; y++) {
    let block_height = $("<tr>");
    for (let x = 0; x < BLOCK_WIDTH_AMOUNT; x++) {
      let block_width = $( "<td id='" + x + "-" + y + "'>");
      block_height.append(block_width);
    }
    block_height.append("</td>");
    block_height.append("</tr>");
    $('table#blocks').append(block_height);
  }
}

//クリックにより色変更
function clickChangeBlock() {
  $('#blocks>tr>td').on("click", function() {
    if($(this).css("background-color") == "rgb(255, 255, 255)"){
      $(this).css("background-color", "rgb(0, 0, 0)");
    } 
    else {
      $(this).css("background-color", "rgb(255, 255, 255)");
    } 
  });
} 

//次の世代へ１つ進む
function clickNextButton() {
  decideNextBlockColor();
  drawBlocksColor(); 
}

//ブロック色判定用の準備
function preparationBlockColor() {
  for(let y = 0; y < BLOCK_HEIGHT_AMOUNT; y++) {
    let blockY = [];
    for(let x = 0; x < BLOCK_WIDTH_AMOUNT; x++) {
      let blockX = false;
      blockY.push(blockX);
    }
    generation.push(blockY);
  }
}

//ブロックの色から、次の世代のブロック色を決める
function decideNextBlockColor() {
  for(let y = 0; y < BLOCK_HEIGHT_AMOUNT; y++) {
    for(let x = 0; x < BLOCK_WIDTH_AMOUNT; x++) {
      if($( "#" + x + "-" + y ).css("background-color") == "rgb(255, 255, 255)"){
        judgmentWhiteBlockColor(x,y);
      }
      else if($( "#" + x + "-" + y ).css("background-color") == "rgb(0, 0, 0)"){
        judgmentBlackBlockColor(x,y);
      }
    }
  }
}

//白ブロック、次の世代のブロック色決定
function judgmentWhiteBlockColor(x,y) {
  let count = 0;
  if($( "#" + (x - 1) + "-" + (y - 1) ).css("background-color") == "rgb(0, 0, 0)"){
    count++;
  }
  if($( "#" + (x) + "-" + (y - 1)     ).css("background-color") == "rgb(0, 0, 0)"){
    count++;
  }
  if($( "#" + (x + 1) + "-" + (y - 1) ).css("background-color") == "rgb(0, 0, 0)"){
    count++;
  }
  if($( "#" + (x - 1) + "-" + (y)     ).css("background-color") == "rgb(0, 0, 0)"){
    count++;
  }
  if($( "#" + (x + 1) + "-" + (y)     ).css("background-color") == "rgb(0, 0, 0)"){
    count++;
  }
  if($( "#" + (x - 1) + "-" + (y + 1) ).css("background-color") == "rgb(0, 0, 0)"){
    count++;
  }
  if($( "#" + (x) + "-" + (y + 1)     ).css("background-color") == "rgb(0, 0, 0)"){
    count++;
  }
  if($( "#" + (x + 1) + "-" + (y + 1) ).css("background-color") == "rgb(0, 0, 0)"){
    count++;
  }
  if(count == 3) {
    generation[y][x] = true;
  }
}

//黒ブロック、次の世代のブロック色決定
function judgmentBlackBlockColor(x,y) {
  let count = 0;
  if($( "#" + (x - 1) + "-" + (y - 1) ).css("background-color") == "rgb(0, 0, 0)"){
    count++;
  }
  if($( "#" + (x) + "-" + (y - 1)     ).css("background-color") == "rgb(0, 0, 0)"){
    count++;
  }
  if($( "#" + (x + 1) + "-" + (y - 1) ).css("background-color") == "rgb(0, 0, 0)"){
    count++;
  }
  if($( "#" + (x - 1) + "-" + (y)     ).css("background-color") == "rgb(0, 0, 0)"){
    count++;
  }
  if($( "#" + (x + 1) + "-" + (y)     ).css("background-color") == "rgb(0, 0, 0)"){
    count++;
  }
  if($( "#" + (x - 1) + "-" + (y + 1) ).css("background-color") == "rgb(0, 0, 0)"){
    count++;
  }
  if($( "#" + (x) + "-" + (y + 1)     ).css("background-color") == "rgb(0, 0, 0)"){
    count++;
  }
  if($( "#" + (x + 1) + "-" + (y + 1) ).css("background-color") == "rgb(0, 0, 0)"){
    count++;
  }
  if(count == 3 || count == 2) {
    generation[y][x] = true;
  }
}

// 次の世代のブロック色を塗る
function drawBlocksColor() {
  for(let y = 0; y < BLOCK_HEIGHT_AMOUNT; y++) {
    
    for(let x = 0; x < BLOCK_WIDTH_AMOUNT; x++) {
        if(generation[y][x] == true) {
          document.getElementById(x + "-" + y).style.backgroundColor='rgb(0, 0, 0)';
        }
        else {
          document.getElementById(x + "-" + y).style.backgroundColor='rgb(255, 255, 255)';
        }
        generation[y][x] = false;
    }
  }
}

//自動ボタン選択 → 別ボタン選択、ボタン機能復旧
function restorationButton() {
  document.getElementById('next').disabled = false;
  $('#automatic').css("background-color","rgb(230, 230, 230)");
}