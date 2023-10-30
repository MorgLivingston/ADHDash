// Autofill guest account credentials
document.querySelector('#guestAccount').addEventListener('click',fillLogin);

function fillLogin(){
    document.querySelector('#username').value = 'guest'
    document.querySelector('#password').value = 'guestpass'
    document.forms["login"].submit()
}
