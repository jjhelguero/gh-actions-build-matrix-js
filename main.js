const core = require('@actions/core')

function createMatrixContainer(n){
    if (n > 15) {n = 15}

    if (n < 1) {n = 1}

    let matrix = '{"containers":['
    for (let i = 0; i <= n; i++) {
        matrix+= i 

        if (i < n) {
            matrix+= ','
        }
    }
    matrix+= ']}'
    console.log(matrix)
    return matrix

}

async function run() {
    // Get some input values
    const batches = core.getInput('batches', {required: true})

    const matrix = createMatrixContainer(batches)
    console.log(matrix)
    
    core.setOutput('machines', matrix)
}

run()