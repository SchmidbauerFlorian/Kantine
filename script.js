function checkMailAddress(m){
    if(m.includes("@"))
        document.getElementById('contactResponse').innerHTML = "Anfrage erfolgreich versendet!";
    else
        document.getElementById('contactResponse').innerHTML = 'E-Mail muss "@" beinhalten!';
}