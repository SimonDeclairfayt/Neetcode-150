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
