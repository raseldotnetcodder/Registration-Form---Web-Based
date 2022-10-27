const firstname = document.reg-Form.firstName.value;
const lastname = document.reg-Form.lastName.value;
const companyname = document.reg-Form.companyName.value;
const address = document.reg-Form.address.value;
const phone = document.reg-Form.phone.value;
const email = document.reg-Form.email.value;
const message = document.reg-Form.message.value;

var btn = document.getElementById("button");
btn.addEventListener('click', (p) => {
    p.preventDefault();

    const firstname = document.reg-Form.firstName.value;
    var test = firstname.length;
    if (test < 2) {
        alert("First Name must be 2 character");
        return false;
    }
    var lastname = document.reg-Form.lastName.value;
    var test = lastname.length;
    if (test < 2) {
        alert("Last Name must be 2 character");
        return false;
    }
    var companyname = document.reg-Form.companyName.value;
    var test = companyname.length;
    if (test < 6) {
        alert(" must be 2 character Company Name");
        return false;
    }
    var address = document.reg-Form.address.value;
    if (test = '') {
        alert("Adress cannot be null");
        return false;
    }
    var phone = document.reg-Form.phone.value;
    var test = phone.length;
    if (phone == '') {
        alert("Phone Number cannot be null");
        return false;
    }
    if (isNaN(phone)) {
        alert("Non-numeric phone number cannot be accept");
        return false;
    }
    if (test < 11 || test > 11) {
        alert("Phone number is not valid");
        return false;
    }

    var email = document.reg-Form.email.value;
    if (email == '') {
        alert("Email field cannot be null");
        return false;
    }
    if (email.indexOf('@') <= 0) {
        alert("**first position @ Invalid ");
        return false;
    }
    if (email.charAt(email.length - 4) !== '.' && email.charAt(email.length - 3) !== '.') {
        alert("**Invalid . position");
        return false;
    }

    else {
        var tbody = document.getElementById('tbody');
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        td.innerHTML = firstname + " " + lastname;
        tr.appendChild(td);

        var td2 = document.createElement('td');
        td2.innerHTML = companyname;
        tr.appendChild(td2);

        var td3 = document.createElement('td');
        td3.innerHTML = address;
        tr.appendChild(td3);

        var td7 = document.createElement('td');
        td7.innerHTML = phone;
        tr.appendChild(td7);

        var td4 = document.createElement('td');
        td4.innerHTML = email;
        tr.appendChild(td4);

        var td5 = document.createElement('td');
        td5.innerHTML = message;
        tr.appendChild(td5);

        var td6 = document.createElement('td');
        td6.innerHTML = "<h4 color:black; onclick=Delete(this)>Remove</h4>";
        tr.appendChild(td6);

        tbody.appendChild(tr);
        alert("Submit Successfull");
    }
});

function Delete() {
    var result = confirm("Do you want to delete?");
    if (result) {
        document.getElementById("customers").deleteRow(1);
    }

}