//board
let board;
let boardwidth = 500;
let boardheight= 300;

//player 
let playerWidth = 10;
let playerHeight = 40;

let player1 = {
    x:10,
    y: boardheight/2,
    width: playerWidth,
    height: playerHeight
}

let player2 = {
    x:boardwidth-playerWidth-10,
    y: boardheight/2,
    width: playerWidth,
    height: playerHeight
}

window.onload = function(){
    board = document.getElementById("board");
    board.height = boardheight;
    board.width = boardwidth;
    context = board.getContext("2d");

    //draw initial player1
    context.fillStyle = "white";
    context.fillRect(player1.x, player1.y, player1.width, player1.height);
    context.fillRect(player2.x, player2.y, player2.width, player2.height);

}

function update(){
    requestAnimationFrame(update);

    //player 1
    context.fillRect(player1.x, player1.y, player1.width, player1.height);

    //player 2
    context.fillRect(player2.x, player2.y, player2.width, player2.height);

}

