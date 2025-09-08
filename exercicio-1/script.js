console.log("js carregado")
function horas() {
    var agora = new Date()
    var hora = agora.getHours()
    document.getElementById("texto").textContent = `Agora são ${hora} horas`
}

/*
function imgem() {
    var agora = new Date()
    var hora = agora.getHours()
    var img = document.getElementById("img")
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = "manha.png"
        img.alt = "imagen que representa o dia"
        document.body.style.background = "#e2cd9f"
    } else if (hora >= 12 && hora <= 18) {
        //boa tarde
        img.src = "tarde.png"
        img.alt = "imagen que representa o tarde"
        document.body.style.background = "#b9846f"
    } else {
        //boa noite
        img.src = "noite.png"
        img.alt = "imagen que representa o noite"
        document.body.style.background = "#515154"
    }
}
*/
