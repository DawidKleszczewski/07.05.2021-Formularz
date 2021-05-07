const mess = new Array

function send() {
    const div = document.getElementById('app')
    const name = document.getElementById('name').value
    const sname = document.getElementById('sname').value
    const email = document.getElementById('email').value
    const tel = document.getElementById('tel').value
    const msg = document.getElementById('msg').value

    if(name.length > 2){
        const err1 = document.getElementById('err1').style = "visibility: hidden"
            if(sname.length > 3){
                const err2 = document.getElementById('err2').style = "visibility: hidden"
                    if(email.indexOf('@') > -1){
                        const err3 = document.getElementById('err3').style = "visibility: hidden"
                        if(tel.indexOf('1', '2', '3', '4', '5', '6', '7', '8', '9', '0') && tel.length === 9){
                            const err4 = document.getElementById('err4').style = "visibility: hidden"
                            if(msg.length > 10){
                                const err5 = document.getElementById('err5').style = "visibility: hidden"
                            mess.push({imie: name, nazwisko: sname, email: email, tel: tel, msg: msg})
                            console.log(mess)
                            }else{
                                const err5 = document.getElementById('err5').style = "visibility: visible"
                            }
                        }else{
                            const err4 = document.getElementById('err4').style = "visibility: visible"
                        }
                    }else{
                        const err3 = document.getElementById('err3').style = "visibility: visible"
                    }
            }else{
                const err2 = document.getElementById('err2').style = "visibility: visible"
            }
    }else{
        const err1 = document.getElementById('err1').style = "visibility: visible"

    }
}
