#! /usr/bin/env node

const cli = require('commander')
let statusCode = null

cli
  .version(require('./package.json').version)
  .arguments('<status code>')
  .action(code => {
    statusCode = code
  })
  .parse(process.argv)

if (!statusCode) {
  console.log('No status Code supplied. Please specify a status code you are looking for.')
  process.exit(1)
}

const codes = require('./codes.json')
statusCode = parseInt(statusCode)

const code = codes.find(code => code.number === statusCode)
if (!code) {
  console.log('Could not find the code you are looking for.\nIf you think it should exist please consider opening an Issue.')
  process.exit(1)
}

console.log(`
${code.number}: ${code.name}

${code.description}
`)
