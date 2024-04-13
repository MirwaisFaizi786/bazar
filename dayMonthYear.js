// function dateFormat(date) {
//     const day = date.getDate();
//     const month = date.getMonth() + 1;
//     const year = date.getFullYear();
//     console.log(date.getMonth());
//     return `${day}/${month}/${year}`;
    
// }
// console.log(dateFormat(new Date()));


// function diaDaSemanaPorExtensoBilingue(data, lingua) {
//     const day = data.getDay();
//     console.log(day);
//     const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
//     const daysInPt = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo'];
//     if (lingua === 'pt') {
//         return daysInPt[day];
//     }else if( lingua === 'en'){
//         return days[day]
//     }
// } 

// console.log(diaDaSemanaPorExtensoBilingue(new Date(), "pt"))


// function mesPorExtenso(data){
//     const month = data.getMonth();
//     const months =['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
//     return months[month];

// } 
// console.log(mesPorExtenso(new Date()));

// .....................

// function findTheSumOfTwoDiminsionalArray(arr) {
//     let sumRightToLeft = 0;
//     let sumLeftToRight = 0;
//     for (let i = 0; i < arr.length; i++) {
//       for (let j = 0; j < arr[i].length; j++) {
//         if(i === 0){
//             sumRightToLeft += arr[i][j];
//           break;
//         }else if(i === 1){
//             sumRightToLeft += arr[i][j+1];
//           break;
//         }else if(i === 2){
//             sumRightToLeft += arr[i][j+2];
//           break;
//         }
//       }
//     }

//     for( let i = 0; i < arr.length; i++){
//         for(let j = 0; j < arr[i].length; j++){
//             if(i === 0){
//                 sumLeftToRight += arr[i][arr[i].length-1];
//                 break;
//             }else if(i === 1){
//                 sumLeftToRight += arr[i][arr[i].length-2];
//                 break;
//             }else if(i === 2){
//                 sumLeftToRight += arr[i][arr[i].length-3];
//                 break;
//             }
//         }
//     }
//     return sumLeftToRight - sumRightToLeft
//   }
  
//   console.log(findTheSumOfTwoDiminsionalArray([[1, 2, 3], [1, 2, 3], [1, 2, 1]]));

// function differenceBetweenDiagonals(matrix) {
//     let mainDiagonalSum = 0;
//     let secondaryDiagonalSum = 0;

//     for (let i = 0; i < matrix.length; i++) {
//         mainDiagonalSum += matrix[i][i];
//         secondaryDiagonalSum += matrix[i][matrix.length - 1 - i];
//     }

//     return Math.abs(mainDiagonalSum - secondaryDiagonalSum);
// }

// // Test the function
// console.log(differenceBetweenDiagonals([[1, 2, 3], [1, 2, 3], [1, 2, 1]])); // Output: 1



// const pessoa ={
//     nome: "Daniel",
//     idade:14
// }

// function verificaIdade(pessoa) {
//    if(pessoa.idade < 18){
//       return {...pessoa, maiorDeIdade:false}
//    }else if( pessoa.idade > 18){
//       return {...pessoa, maiorDeIdade: true}
//    }
// }
// console.log(verificaIdade(pessoa))

function dayOfYear(date) {
    let startOfYear = new Date(date.getFullYear(), 0, 0);
    let diff = date - startOfYear;
    let oneDay = 1000 * 60 * 60 * 24;
    let dayOfYear = Math.floor(diff / oneDay);
    return dayOfYear + 1;

}
console.log(dayOfYear(new Date()))