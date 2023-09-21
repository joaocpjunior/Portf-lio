const nota1 = document.querySelector('#nota1')
const nota2 = document.querySelector('#nota2')
const nota3 = document.querySelector('#nota3')
const nota4 = document.querySelector('#nota4')
const output = document.querySelector('output')

nota1.addEventListener("change", notaFinal)
nota2.addEventListener("change", notaFinal)
nota3.addEventListener("change", notaFinal)
nota4.addEventListener("change", notaFinal)


function notaFinal() {

    pNota = parseFloat(nota1.value)
    sNota = parseFloat(nota2.value)
    tNota = parseFloat(nota3.value)
    qNota = parseFloat(nota4.value)

    if (isNaN(pNota) || isNaN(sNota) || isNaN(tNota) || isNaN(qNota) ||
        pNota < 0 || pNota > 5 || sNota < 0 || sNota > 5 || tNota < 0 || tNota > 5 || qNota < 0 || qNota > 5) {
            
    } else {
        calculo = (pNota + sNota + tNota + qNota) / 4

        output.innerText = calculo.toFixed(2)
    }
}
