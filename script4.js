var ini = document.getElementById('ini')
var fim = document.getElementById('fim')
var res = document.getElementById('res')
var lit = document.getElementById('lit')

function gerar() {
    if (ini.value.length == 0 || fim.value.length == 0 || lit.value.length == 0) {
        window.alert('Preencha os dados corretamente')
    } else {
        var con = (Number(fim.value) - Number(ini.value)) / Number(lit.value)
        res.innerHTML = `A média foi de ${(con.toFixed(2))} km/l<br>`
        res.innerHTML += `Andou durante o mês ${fim.value - ini.value} km`
    }
}