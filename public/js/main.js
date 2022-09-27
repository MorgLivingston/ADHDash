// Autofill guest account credentials
document.querySelector('#guestAccount').addEventListener('click',fillLogin);

function fillLogin(){
    document.querySelector('#username').value = 'BranchesGuest'
    document.querySelector('#password').value = 'BranchesGuest'
    document.forms["login"].submit()
}
