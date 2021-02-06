'use strict';

//ブロックの量を指定
const BLOCK_WIDTH_AMOUNT  = 30;
const BLOCK_HEIGHT_AMOUNT = 30;
//次世代の生死判定用
let geneneration = [];
let timer;
main();

//次世代移動用
function next() {
  clickNextButton();
  judgmentLifeOrDeath(); 
}
// let next = setInterval(function() {
// },500);



// 実行用
function main() {
  drawArea();
  create();
  clickChangeBlock();
  
  //進むボタン
  $('#next').on('click', function() {
    next();
  });
  //自動ボタン
  $('#automatic').on('click', function() {
    timer = setInterval(function() { 
      next();
    },500);
    $('#blocks>tr>td').off('click');
  });
  //停止ボタン
  $('#stop').on('click', function() {
    clearInterval(timer);
    clickChangeBlock();
  })
  //削除ボタン
  $('#reset').on('click', function() {
    clearInterval(timer);
    clickResetButton();
  });
}


//ブロックの描画
function drawArea() {
  $("table#blocks").empty();
  for(let y = 0; y < BLOCK_HEIGHT_AMOUNT; y++) {
    let block_height = $("<tr>");
    for (let x = 0; x < BLOCK_WIDTH_AMOUNT; x++) {
      // let block_width = $( "<td id='" + x + "-" + y + "' style=\"background-color : white;\">");
      let block_width = $( "<td id='" + x + "-" + y + "'>");
      
      block_height.append(block_width);
    }
    block_height.append("</td>");
    block_height.append("</tr>");
    $("table#blocks").append(block_height);
  }
}

//クリックにより色変更
function clickChangeBlock() {
  $("#blocks>tr>td").on("click", function() {
    if($(this).css("background-color") == "rgb(255, 255, 255)")
    {
      $(this).css("background-color", "rgb(0, 0, 0)");
    } 
    else 
    {
      $(this).css("background-color", "rgb(255, 255, 255)");
    } 
  });
} 

//世代を進める
function clickNextButton() {
  for(let y = 0; y < BLOCK_HEIGHT_AMOUNT; y++) {
    for(let x = 0; x < BLOCK_WIDTH_AMOUNT; x++) {
      if($( "#" + x + "-" + y ).css("background-color") == "rgb(255, 255, 255)"){
        judgmentWhiteBlockLife(x,y);
      }
      else if($( "#" + x + "-" + y ).css("background-color") == "rgb(0, 0, 0)"){
        judgmentBlackBlockLife(x,y);
      }
    }
  }
}


//白ブロック、次世代の生死調査
function judgmentWhiteBlockLife(x,y) {
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
    geneneration[y][x] = true;
  }
}

//黒ブロック、次世代の生死
function judgmentBlackBlockLife(x,y) {
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
    geneneration[y][x] = true;
  }
}





// 次世代の生死判定
function judgmentLifeOrDeath() {
  
  for(let y = 0; y < BLOCK_HEIGHT_AMOUNT; y++) {
    
    for(let x = 0; x < BLOCK_WIDTH_AMOUNT; x++) {
        if(geneneration[y][x] == true) 
        {
          document.getElementById(x + "-" + y).style.backgroundColor='rgb(0, 0, 0)';
        }
        else if(geneneration[y][x] == false)
        {
          document.getElementById(x + "-" + y).style.backgroundColor='rgb(255, 255, 255)';
        }
        geneneration[y][x] = false;
    }

  }
}


//画面のリセット
function clickResetButton() {
  main();
}


//生死判定用
function create() {
  for(let y = 0; y < BLOCK_HEIGHT_AMOUNT; y++) {
    let blockY = [];
    for(let x = 0; x < BLOCK_WIDTH_AMOUNT; x++) {
      let blockX = false;
      blockY.push(blockX);
    }
    geneneration.push(blockY);

  }
}
