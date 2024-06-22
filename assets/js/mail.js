function disableBtn() {
    let btn = document.getElementById('saveData');
    console.log(btn)
    btn.disabled = true;
    btn.innerText = 'Sending...';
}
function enableBtn() {
    let btn = document.getElementById('saveData');
    btn.disabled = false;
    btn.innerText = 'Send Message';
}
function sendMail() {
    let params = {
        sname: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        dvr: document.getElementById('dvr').value,
        camera: document.getElementById('camera').value,
        message: document.getElementById('message').value,
    }
    emailjs.send("service_ts3hf7n", "template_7p0ffj6", params).then((message) => {
        console.log(message)
        if (message.text === 'OK') {
            Swal.fire({
                title: `Thanks for your Message!`,
                text: "A member of our team will reach out to you soon!",
                icon: "success"
            });
            document.getElementById('name').value = ''
            document.getElementById('email').value = ''
            document.getElementById('phone').value = ''
            document.getElementById('dvr').value = ''
            document.getElementById('camera').value = ''
            document.getElementById('message').value = ''
            enableBtn()
        } else {
            Swal.fire({
                title: `Error Occured`,
                text: "Please click the whatsapp icon to contact us Thanks!",
                icon: "error"
            });
            enableBtn()
        }
    }).catch((err) => {
        console.log(err)
        Swal.fire({
            title: `Error Occured ${err}`,
            text: "Please click the whatsapp icon to contact us Thanks!",
            icon: "error"
        });

        enableBtn()
    })
}

const form = document.getElementById("mailForm");
console.log("here is form deatils", form)
form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendMail()
});

