const core = require('@actions/core')
const exec = require('@actions/exec')

async function run() {
    // Get some input values
    const batches = core.getInput('batches', {required: true})

    const matrix = await exec.exec(`./build-matrix.sh ${batches}`)
    
    core.setOutput('machines', matrix)
}

run()