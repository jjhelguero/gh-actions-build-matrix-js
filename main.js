const core = require('@actions/core')
const exec = require('@actions/exec')

function run() {
    // Get some input values
    const machines = core.getInput('machines', {required: true})

    exec.exec(`./build-matrix.js ${machines}`)
    
    core.setOutput('website-url', websiteUrl)
}

run()