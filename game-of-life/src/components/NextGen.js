
    const NextGen = (curr, cols, rows, counter) => {
    // holds the next state
    let next = []

    // for loops to traverse current state neighbors for the next state
    for(let i = 0; i < cols; i++){
        next[i] = new Array(curr[i].length)
        for(let j = 0; j < rows; j++){
            let state = curr[i][j];
            let neighbors = countNeighbors(curr, i, j, cols, rows)

            // value of the neighbors to determine state of the current cell
            if(state === 0 && neighbors === 3){
                next[i][j] = 1;
            } else if(state === 1 && (neighbors < 2 || neighbors > 3)){
                next[i][j] = 0
            } else {
                next[i][j] = state
            }
        }
    }
    counter++
    return {next , counter}

}

const countNeighbors = (current, x, y, cols, rows) => {
    //total number of neighbors
    let sum = 0;

    //loop through the neighbors
    for(let i = -1; i < 2; i++){
        for(let j = -1; j < 2; j++){
            let col = (x + i + cols) % cols;
            let row = (y + j + rows) % rows;
            sum += current[col][row]
        }
    }

    //subtract current cell to the sum of total neighbors
    sum -= current[x][y]
    // console.log(`number of neighbors: ${sum}`)
    return sum
}

export default NextGen