const core = require('@actions/core')
const exec = require('@actions/exec')

async function run() {
    // Get some input values
    const machines = core.getInput('machines', {required: true})

    const matrix = await exec.exec(`./build-matrix.js ${machines}`)
    
    core.setOutput('machines', matrix)
}

run()