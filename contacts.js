const fs = require('fs/promises')
const path =
    
const contactsPath =

async function listContacts() {
    try {
        const data = await fs.readFile(contactsPath, "utf-8")
    }
    catch (error) {
        console.log(error.message)
    }
}

async function getContactById(contactId) {
    try { }
    catch (error) {
        console.log(error.message)
    }
}

async function removeContact(contactId) {
    try { }
    catch (error) {
        console.log(error.message)
    }
}

async function addContact(name, email, phone) {
    try { }
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