// Autofill guest account credentials
document.querySelector('#guestAccount').addEventListener('click',fillLogin);

function fillLogin(){
    document.querySelector('#username').value = 'ADHDashGuest'
    document.querySelector('#password').value = 'ADHDashGuest'
    document.forms["login"].submit()
}
