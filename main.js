const mess = new Array

function send() {
    const name = document.getElementById('name').value
    const sname = document.getElementById('sname').value
    const email = document.getElementById('email').value
    const tel = document.getElementById('tel').value
    const msg = document.getElementById('msg').value

    if(name.length > 2 && sname.length > 3 && email.indexOf('@') > -1 && tel.indexOf('1', '2', '3', '4', '5', '6', '7', '8', '9', '0') && msg.length > 10){
        mess.push({imie: name, nazwisko: sname, email: email, tel: tel, msg: msg})
        console.log(mess)
    }else{
        alert('Uzupełnij poprawnie pola')
    }
}
