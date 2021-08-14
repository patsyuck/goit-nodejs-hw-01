const contactsFunctions = require('./contacts')
const { Command } = require('commander')

const program = new Command()
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone')
program.parse(process.argv)

const argv = program.opts()

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      contactsFunctions.listContacts()
      break

    case 'get':
      contactsFunctions.getContactById(parseInt(id))
      break

    case 'add':
      contactsFunctions.addContact(name, email, phone)
      break

    case 'remove':
      contactsFunctions.removeContact(parseInt(id))
      break

    default:
      console.warn('\x1B[31m Unknown action type!')
  }
}

invokeAction(argv)