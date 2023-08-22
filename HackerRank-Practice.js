// HACKERRANK PREPARE IN A MONTH
//TIME CONVERSION
function timeConversion(s) {
    // Write your code here
    let m = s.charAt((s.length)-2)+s.charAt((s.length)-1);
    console.log(m)
    var numbers = s.match(/\d/g).join('');
    if(m==='AM' && (+numbers)>=120000){
        numbers = numbers.toString();
        numbers.replace('12','00');
        let hour = numbers.replace(/.{2}/g, '$&:');
        hour = hour.slice(0, -1);
        return ('00:'+ hour)
    }else if(m==='PM' && (+numbers)>=120000){
        numbers = numbers.toString();
        let hour = numbers.replace(/.{2}/g, '$&:');
        hour = hour.slice(0, -1);
        return hour
    }else if(m==='PM'){
        numbers = ((+numbers) + 120000);
        numbers = numbers.toString();
        let hour = numbers.replace(/.{2}/g, '$&:');
        hour = hour.slice(0, -1);
        return hour;
    }else if(m==='AM'){
        let hour = numbers.replace(/.{2}/g, '$&:');
        hour = hour.slice(0, -1);
        return hour;
    }

}


function diagonalDifference(arr) {
    // Write your code here
    let j = 0;
    let m = arr.length - 1;
    let leftDiagonal = 0;
    let rightDiagonal = 0;
    for(let i=0;i<arr.length;i++){
        leftDiagonal += arr[i][j];
        j++;
    }
    for(let i=0;i<arr.length;i++){
        rightDiagonal += arr[i][m];
        m--;
    }
    const diff = (a, b) => {
    return Math.abs(a - b);
    }
    return diff(leftDiagonal, rightDiagonal);

}
//SUBARRAY DIVISION 1
function birthday(s, d, m) {
    // Créer une array qui a la même valeur que l'array de base
    let num = s;
    //Faire une array vide dans laquelle on va mettre des num
    let nums = [];
    let count = 0;
    //Fonction qui additionne tous les nombres de l'array
    const add = (arr) => arr.reduce((a, b) => a + b, 0);
    for (let i = 0; i < s.length; i++) {
        //Créer un array element qui aura comme valeur une array allant de (0+i, m+i)
      let arrayElement = num.slice(0 + i, m + i);
      //Push cet element dans l'array vide
      nums.push(arrayElement);
    }
    //Si il n'y a qu'un element et qu'il correspond à D, ajouter 1 au compte
    if(num.length===1 && num[0]===d){
        count++;
    }else{
        //Pour chaque el, vérifie si la somme de l'element == d
        //Si oui, ajouter un au compte
      nums.forEach((el) => {
          if (add(el) === d) {
            count++;
          }
        });
    }
    
  
    return count;
}
console.log(birthday(s, d, m));