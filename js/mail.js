function disableBtn() {
    let btn = document.getElementById('saveData');
    btn.disabled = true;
    btn.innerText = 'Sending...';
}
function enableBtn() {
    let btn = document.getElementById('saveData');
    btn.disabled = false;
    btn.innerText = 'Send Message';
}
// send mailForm 

function sendMail() {
    let sname = document.getElementById('name').value
    let email = document.getElementById('email').value
    let phoneNumber = document.getElementById('phone').value
    let camera = document.getElementById('camera').value
    let dvr = document.getElementById('dvr').value
    // let outlet = document.getElementById('outlet').value
    let message = document.getElementById('message').value

    let emailbody = `
                    <td class="esd-container-frame" width="558" align="left" style="width: 558px; text-align: left;">
                        <table width="100%" cellspacing="0" cellpadding="0" style="width: 100%; border-collapse: collapse;">
                            <tbody>
                                <tr>
                                    <td class="esd-block-text" align="left" style="text-align: left;">
                                        <p style="color: #999999;  margin: 0;">Message send By : ${sname}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="esd-block-text es-m-txt-c" align="left" style="text-align: left;">
                                        <p style="margin: 0;"><b>Email :</b> ${email}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="esd-block-text es-m-txt-c" align="left" style="text-align: left;">
                                        <p style="margin: 0;"><b>Phone Number : </b>${phoneNumber},</p>
                                        <hr>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="esd-block-text es-m-txt-c" align="left" style="text-align: left;">
                                        <p style="margin: 0;"><b>No. of Cameras : </b>${camera},</p>
                                        <hr>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="esd-block-text es-m-txt-c" align="left" style="text-align: left;">
                                        <p style="margin: 0;"><b>No. of dvr : </b>${dvr},</p>
                                        <hr>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="esd-block-text es-m-txt-c es-p10t" align="left" style="text-align: left; padding-top: 10px;">
                                        <p>
                                        Hi...
                                        <br>
                                        <span style="margin: 0 0 0 10px;"> ${message}</span> 
                                       </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                 `

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "mrhammadsandhu0@gmail.com",
        Password: "FBA80D35C57649D59E963D008C473732CD5A",
        To: 'mrwebxpert@gmail.com',
        // To: 'sales@ahsr-solutions.com',
        From: `mrhammadsandhu0@gmail.com`,
        Subject: `New message from ${sname}`,
        Body: emailbody
    }).then((message) => {
        console.log(message)
        if (message === 'OK') {
            Swal.fire({
                title: `Thanks for your Message!`,
                text: "A member of our team will reach out to you soon!",
                icon: "success"
            });
            document.getElementById('name').value = ""
            document.getElementById('email').value = ""
            document.getElementById('phone').value = ""
            document.getElementById('camera').value = ""
            document.getElementById('dvr').value = ""
            // document.getElementById('outlet').value = ""
            document.getElementById('message').value = ""
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



let mailForm = document.getElementById("mailForm");
console.log(mailForm)
mailForm.addEventListener("submit", (e) => {
    e.preventDefault();
    sendMail()
});

