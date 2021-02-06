'use strict';

// ブロックの量を指定
const BLOCK_WIDTH_AMOUNT  = 30;
const BLOCK_HEIGHT_AMOUNT = 30;

main();

// 実行用
function main() {
  drawArea();
}


function drawArea() {
  $("table#blocks").empty();
  for(let y = 0; y < BLOCK_HEIGHT_AMOUNT; y++) {
    let block_height = $("<tr>");
    for (let x = 0; x < BLOCK_WIDTH_AMOUNT; x++) {
      let block_width = $( "<td id='" + x + "-" + y + "'>");
      block_height.append(block_width);
    }
    block_height.append("</td>");
    block_height.append("</tr>");
    $("table#blocks").append(block_height);
  }
}
