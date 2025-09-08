function calcular(){
    var idvida = window.document.getElementById('vida')
    var iddano = window.document.getElementById('dano')
    var idoculto = window.document.getElementById('oculto')
    var idvida_calc = window.document.getElementById('vida_calc')
    var iddano_calc = window.document.getElementById('dano_calc')
    var vida = Number(idvida.value)
    var dano = Number(iddano.value)
    if(vida <= 0 || dano < 0){
        window.alert('[ERRO] Dados inválidos! Tente novamente.')
    } else {
        document.getElementById('entrada').style.display = 'none'
        idoculto.style.display = 'block'
        idvida_calc.innerHTML = `${vida}`
        iddano_calc.innerHTML = `${dano}`
        var resultado = vida - dano
        if(resultado > 0){
            document.getElementById('resultado').style.color = 'green'
            document.getElementById('resultado').innerHTML = `O personagem sobreviveu com <strong>${resultado}</strong> pontos de vida.`
        } else if (resultado == 0){
            document.getElementById('resultado').style.color = 'red'
            document.getElementById('resultado').innerHTML = `O personagem morreu com <strong>0</strong> pontos de vida.`
        } else {
            document.getElementById("resultado").style.color = 'red'
            document.getElementById('resultado').innerHTML = `O personagem morreu com <strong>0</strong> pontos de vida.`
        }
    }
}

function voltar(){
    var idoculto = window.document.getElementById('oculto')
    idoculto.style.display = 'none'
    document.getElementById('entrada').style.display = 'block'
}