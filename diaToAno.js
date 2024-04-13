function calculaDiaDoAno(dia, mes) {
    if (dia < 1 || dia > 31) {
        return "Por favor introduza um dia entre 1 e 31."
    }
    if (mes < 1 || mes > 12) {
        return "Por favor introduza um mês entre 1 e 12."
    }
    if ((mes === 4 || mes === 6 || mes === 9 || mes === 11) && dia > 30) {
        return "Por favor introduza um dia entre 1 e 30."
    }
    if (mes === 2 && dia > 28) {
        return "Por favor introduza um dia entre 1 e 28."
    }
    const meses = [
        { mes: 1, dias: 31 },
        { mes: 2, dias: 28 },
        { mes: 3, dias: 31 },
        { mes: 4, dias: 30 },
        { mes: 5, dias: 31 },
        { mes: 6, dias: 30 },
        { mes: 7, dias: 31 },
        { mes: 8, dias: 31 },
        { mes: 9, dias: 30 },
        { mes: 10, dias: 31 },
        { mes: 11, dias: 30 },
        { mes: 12, dias: 31 }
    ]
    let diasNO = 0
    for (let i = 0; i < meses.length; i++) {
        if (meses[i].mes === mes) {
            return diasNO + dia
        }
        diasNO += meses[i].dias
    }

    return diasNO
}
console.log(calculaDiaDoAno(1,1))