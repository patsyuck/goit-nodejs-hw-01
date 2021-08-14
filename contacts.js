const fs = require('fs/promises')
const path = require('path')
const contactsPath = path.join(__dirname, 'db/contact.json')

async function listContacts() {
    try {
        const data = await fs.readFile(contactsPath)
        result = JSON.parse(data)
        console.table(result)
    }
    catch (error) {
        console.log(error.message)
    }
}

async function getContactById(contactId) {
    try {
        const data = await fs.readFile(contactsPath)
        result = JSON.parse(data)
        const contact = result.find(item => item.id === contactId)
        if (!contact) {
            throw new Error(`Contact with id=${contactId} not found!`)
        }
        console.log(contact)
    }
    catch (error) {
        console.log(error.message)
    }
}

async function removeContact(contactId) {
    try {
        const data = await fs.readFile(contactsPath)
        result = JSON.parse(data)
        const idx = result.findIndex(item => item.id === contactId)
        if (idx === -1) {
            throw new Error(`Contact with id=${contactId} not found!`)
        }
        const contact = result.find(item => item.id === contactId)
        const contacts = result.filter(item => item.id !== contactId)
        const newContacts = JSON.stringify(contacts)
        await fs.writeFile(contactsPath, newContacts)
        console.log('One contact removed:')
        console.log(contact)
    }
    catch (error) {
        console.log(error.message)
    }
}

async function addContact(name, email, phone) {
    try {
        const data = await fs.readFile(contactsPath)
        result = JSON.parse(data)
        const idx = Math.max(...result.map(item => item.id)) + 1 //?
        const newContact = {
            'id': idx,
            'name': name,
            'email': email,
            'phone': phone
        }
        result[result.length] = newContact
        const newContacts = JSON.stringify(result)
        await fs.writeFile(contactsPath, newContacts)
        console.log('New contact added:')
        console.log(newContact)
    }
    catch (error) {
        console.log(error.message)
    }
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
}