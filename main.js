const core = require('@actions/core')
const exec = require('@actions/exec')

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
    return matrix

}

async function run() {
    // Get some input values
    const batches = core.getInput('batches', {required: true})

    const matrix = createMatrixContainer(batches)
    
    core.setOutput('machines', matrix)
}

run()