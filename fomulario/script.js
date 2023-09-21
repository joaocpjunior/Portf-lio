let nota1 = document.querySelector('#nome')

const paginas = document.querySelector('#paginas')
const output = document.querySelector("output")
const campoTipo = document.querySelector('#tipo')
const campoLayoutNao = document.querySelector('#layout_nao')
const campoLayoutSim = document.querySelector('#layout_sim')
const campoJs = document.querySelector('#js')
const campoPrazo = document.querySelector('#prazo')

campoPrazo.addEventListener("input", function() {
    const labelPrazo = document.querySelector("label[for='prazo']")
    labelPrazo.innerHTML = `Prazo: ${campoPrazo.value} semanas`
    calcular()
})

paginas.addEventListener("change", calcular)
campoTipo.addEventListener("change", calcular)
campoLayoutSim.addEventListener("change", calcular)
campoLayoutSim.addEventListener("change", calcular)
campoJs.addEventListener("change", calcular)


//calcular preço
function calcular() {
    //R$100 por página
    let qtde = paginas.value
    let valor = qtde* 100

    if (campoTipo.value == 2) valor += 1000
    if (campoLayoutSim.checked) valor += qtde * 50
    if(campoJs.checked) valor *= 1.1
    let taxaDeUrgencia = 1 - campoPrazo.value * 0.05
    valor*= 1 + taxaDeUrgencia

    output.innerHTML =`R$   ${Math.trunc(valor, 2)}`
}

