let canvas = document.querySelector('canvas')
canvas.style.border = '1px solid black';

let ctx = canvas.getContext('2d')
let intervalId = 0;

let bg = new Image()
bg.src = 'images/bg.png'

let bird = new Image()
bird.src = 'images/bird.png'

let fg = new Image()
fg.src = 'images/fg.png'

let pipeNorth = new Image()
pipeNorth.src = 'images/pipeNorth.png'

let pipeSouth = new Image()
pipeSouth.src = 'images/pipeSouth.png'

let score = 0;
let birdX = 20;
let birdY = 20;
let birdIncrement = 1;

let pipes = [
    { x: canvas.width-10, y: 0},
]

document.addEventListener('mousedown', (event) => {
    birdIncrement = -2
})

document.addEventListener('mouseup', () => {
    birdIncrement = 1
})

function startGame(){
    ctx.drawImage(bg, 0, 0 )
    ctx.drawImage(bird, birdX, birdY )

    for(let i=0; i< pipes.length; i++){
        let constant = pipeNorth.height + 100
        ctx.drawImage(pipeNorth, pipes[i].x, pipes[i].y)
        ctx.drawImage(pipeSouth, pipes[i].x, pipes[i].y+ constant)
        pipes[i].x--
        if (pipes[i].x === 10) {
            score++
        }
        if (pipes[i].x == 30) {
            pipes.push({
                x: canvas.width,
                y: -Math.floor(Math.random() * pipeNorth.height)
            })
        }
        /* Lab for today*/
        if ( ) {
            clearInterval(intervalId)
            alert('Game Over')
        }
    }
    if (birdY > canvas.height-100) {
        clearInterval(intervalId)
        alert('Game Over')
    }
    birdY += birdIncrement
    ctx.drawImage(fg, 0, canvas.height-100)
    ctx.font = '20px Verdana'
    ctx.fillText('Score: ' + score, 10,canvas.height-50 )
}

intervalId = setInterval(() => {
    requestAnimationFrame(startGame)
}, 10)
