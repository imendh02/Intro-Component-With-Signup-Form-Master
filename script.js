const button = document.getElementById("btn");
const first = document.getElementById("FirstName");
const last = document.getElementById("LastName");
const email= document.getElementById("Email");
const password = document.getElementById("Password");

button.addEventListener("click",valide); 
function valide() {
    const firstnameValue = first.value.trim();
    const lastnameValue = last.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(firstnameValue === '') {
		setError(first, 'First Name cannot be empty');
    }
    if(lastnameValue === '') {
		setError(last, 'Last Name cannot be empty');
    }
    var valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!emailValue.match(valid)) {
		setError(email, 'Looks like this is not an email');
    } else if (emailValue === '') {
        setError(email, 'Email cannot be empty');
    }
    if(passwordValue === '') {
		setError(password, 'Password cannot be empty');
    }
}
function setError(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}