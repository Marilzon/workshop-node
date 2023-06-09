import * as readline from "node:readline"
import { stdin as input, stdout as output } from "node:process"

const rl = readline.createInterface({
  input, output
})

rl.question("Enter you name: ", (name) => {
  console.log(`Thank you ${name}`)
  rl.close()
})

rl.on('close', () => {
  console.log("Interface closed, bye!")
  process.exit(0)
})
