
function calculaDiaDoAno(dia, mes) {
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
}

function calculaDiasAteAoNatal(dia, mes) {
    if (dia < 1 || dia > 31) {
        return "Por favor introduza um dia entre 1 e 31.";
    } else if (mes < 1 || mes > 12) {
        return "PPor favor introduza um mês entre 1 e 12.";
    } else if (
        (mes === 4 || mes === 6 || mes === 9 || mes === 11) &&
        (dia > 30 || dia < 1)
    ) {
        return "Por favor introduza um dia entre 1 e 30.";
    } else if (mes == 2 && (dia > 28 || dia < 1)) {
        return "Por favor introduza um dia entre 1 e 28.";
    }
    if (mes === 12 && dia === 25) {
        return "Hoje é Natal!";
    } else if (mes === 12 && dia > 25) {
        return `Faltam ${365 - (dia - 25)} dias até ao Natal.`;
    } 
 
    diasNO = calculaDiaDoAno(dia, mes);
    
    return  `Faltam ${365 - diasNO - 6 } dias até ao Natal.()`;
}
console.log(calculaDiasAteAoNatal(26, 12));