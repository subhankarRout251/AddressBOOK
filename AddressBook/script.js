class Contact {
    constructor(name, phone, email, address) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.address = address;
    }
}

const contactForm = document.getElementById('contactForm');
const contactList = document.getElementById('contactList');

let contacts = [];
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('nameInput').value;
    const phone = document.getElementById('phoneInput').value;
    const email = document.getElementById('emailInput').value;
    const address = document.getElementById('addressInput').value;
    const contact = new Contact(name, phone, email, address);
    contacts.push(contact);
    renderContacts();
    contactForm.reset();
});
function renderContacts() {
    contactList.innerHTML = '';
    contacts.forEach((contact) => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${contact.name}</strong><br>
                        Phone: ${contact.phone}<br>
                        Email: ${contact.email}<br>
                        Address: ${contact.address}<br>
                        <button class="deleteBtn" data-id="${contact.name}">Delete</button>`;
        contactList.appendChild(li);
    });
}
document.getElementById('searchInput').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredContacts = contacts.filter((contact) => {
        return contact.name.toLowerCase().includes(searchTerm);
    });
    contactList.innerHTML = '';
    filteredContacts.forEach((contact) => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${contact.name}</strong><br>
                        Phone: ${contact.phone}<br>
                        Email: ${contact.email}<br>
                        Address: ${contact.address}<br>
                        <button class="deleteBtn" data-id="${contact.name}">Delete</button>`;
        contactList.appendChild(li);
    });
});
contactList.addEventListener('click', (e) => {
    if (e.target.classList.contains('deleteBtn')) {
        const contactName = e.target.getAttribute('data-id');
        contacts = contacts.filter((contact) => {
            return contact.name !== contactName;
        });
        renderContacts();
    }
});
