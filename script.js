window.addEventListener("load", function() {
    console.log("Page fully loaded with all resources!");
});


let contacts = [];


function Contact(name, phone, email) {

    this.name = name;
    this.phone = phone;
    this.email = email;
}

Contact.prototype.contactInfo = function () {

    return `
        <div class="contact-card">
            <h3>${this.name}</h3>
            <p>Phone: ${this.phone}</p>
            <p>Email: ${this.email}</p>
        </div>
    `;
};


const contactForm = document.getElementById("contact-form");
const contactList = document.getElementById("contact-list");


contactForm.addEventListener("submit",function (event) {
        event.preventDefault();

        
        const name = document.getElementById("name").value;

        const phone = document.getElementById("phone").value;

        const email = document.getElementById("email").value;

        
        const newContact = new Contact(name, phone, email);
        contacts.push(newContact);

        
        contactList.innerHTML = "";
        contacts.forEach(function (contact) {
            contactList.innerHTML +=
                contact.contactInfo();
        });

        contactForm.reset();
    }
);

 let tasks = [];

 function addTask(){

    const taskInput = document.getElementById("taskInput")
 }