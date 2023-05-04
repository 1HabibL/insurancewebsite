const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const password = document.getElementById('password');


form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const validateInputs = () => {
    const firstnameValue = firstname.value.trim();
    const passwordValue = password.value.trim();

    if(firstnameValue === '') {
        setError(firstname, 'firstname is required');
    } else {
        setSuccess(firstname);
    
    }

    if(passwordValue === "") {
        setError(password, "password is required")
    } else if (passwordValue.length < 8) {
        setError(password, "password must be at least 8 character")
    } else {
        setSuccess(password);
    }
}