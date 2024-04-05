export default function ehMaiorDeIdade(campo) {
    const dataNasciento = new Date(campo.value)
    validaIdade(dataNasciento)

    console.log(validaIdade(dataNasciento))
}

function validaIdade(data) {
    const dataAtual = new Date();
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    return dataAtual >= dataMais18;
}