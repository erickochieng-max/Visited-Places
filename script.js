window.addEventListener("load", function() {
    console.log("Page fully loaded with all resources!");
});

document.getElementById('contact-form').addEventListener('submit',function(event){
    event.preventDefault();
    
    let contacts = [];

    function Contact(name,phone,email){

        this.name = name;
        this.phone = phone;
        this.email = email;
    }

    Contact.prototype.contactInfo = function(){
        return
        <div class="contact-card">
            <h3>${this.name}</h3>
            <p>Phone: ${this.phone}</p>
            <p>Email: ${this.email}</p>
        </div>
    }
});