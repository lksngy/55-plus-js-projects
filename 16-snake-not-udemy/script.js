// this is not a part of udemy course, here is the link to the article about this snake
// https://medium.com/@fahad.haidari/build-a-snake-game-with-javascript-c7a7f33437eb

/*

I DIDN'T FINISHED AS THIS DOESN'T HAVE MUCH EXPLANATION AND THIS CODE IS QUITE DIFFICULT. WILL GET BACK TO IT ONE DAY.

*/

console.log('test');

window.onload = function () {
    const SCREEN_COLOR = '#EEEEEE';
    const CANVAS_COLOR = '#FFFFFF';
    const CANVAS_BORDER_WIDTH = 10;
    const CANVAS_BORDER_COLOR = '#444444';
    const GRID_WIDTH = 20;
    const GRID_HEIGHT = 30;
    const TEXT_COLOR = 'blue';
    const TEXT_SIZE = 18;
    const CELL_SIZE = 20;
    const SNAKE_INITIAL_LENGTH = 3;
    const DELAY = 3;
    const TILE_INFO = {
        fill: '#2288FF',
        stroke: '#333333',
        width: 5
    }
    const food = {
        x: 0,
        y: 0,
        fill: '#22FF22',
        stroke: '#444444',
        flashingFactor: 0.1

    };
    const reservedLocations = [];
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    let countToUpdate = 0;
    let gameOver = false;
    let score = 0;
    document.body.appendChild(canvas);
    document.body.style.background = SCREEN_COLOR;
    canvas.style.display = 'block';
    canvas.style.margin = '0 auto';
    canvas.style.background = CANVAS_COLOR;
    canvas.style.border = `solid ${CANVAS_BORDER_WIDTH}px ${CANVAS_BORDER_COLOR}`;
    
    // random helper function that we use later to generate random food location on our grid
    const random = (min, max) => Math.random() * (max - min) + min;

    //random helper function that translates x/y positions to row/col values on our grid
    const translateXYtoRowCol = (x, y) =>
        (
            {
                y: parseInt(y / CELL_SIZE),
                x: parseInt(x / CELL_SIZE)
            }
        )
    
    // function will be called later to resize canvas based on the given CELL_SIZE and the matrix dimensions
    const resizeScene = function() {
        canvas.width = CELL_SIZE * matrix[0].length;
        canvas.height = matrix.length * CELL_SIZE;
        canvas.style.marginTOP = `${((window.innerHeight / 2) - (canvas.height / 2))}px`
    };

    const putTiles = function () {
        reservedLocations.length = 0;
        const rows = matrix[0].length;
        const cols = matrix.length;

        for (let i = 1; i < matrix.length - 1; i++) {
            for let j =1; j < matrix[0].length -1; j++ {
                matrix[i][j] = 0;
                const putTileOrNot = parseInt(random(1, rows + cols));

            }
        }
    };

}
