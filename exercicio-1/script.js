console.log("js carregado")
function horas() {
    var agora = new Date()
    var hora = agora.getHours()
    document.getElementById("texto").textContent = `Agora são ${hora} horas`
}
