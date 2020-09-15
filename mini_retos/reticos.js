// palabra palindroma

const palindrome = (word) => {
    console.log(word.length);
    let counter = 1; 
    for(let i = 0; i < word.length; i++){
        
        if(word.charAt(i) === (word.charAt(word.length-counter))){ 
             counter++;
        }else{ 
            console.log("No es!");
            break;
        }

        if(counter === word.length){ 
           console.log("la palabra es palindroma!!");
        }
}
}

palindrome("ana");
palindrome("reconocer");

// paises

const paises = ["Mexico", "panama", "El salvador", "Costa Rica", "Colombia", "estoy poniendo algo larguisimo para probar jje"];

const longestCountry = (array) => { 
    let max = Number.MIN_VALUE;
    let country = "";

    for(let m = 0; m < array.length; m++){ 
    
        if(array[m].length > max){ 
          max = array[m].length;
          country = array[m];
        }
    }

    return country;
}

console.log(longestCountry(paises));

// farenheit

const farenheitToCelsius = (farenheit) => { 

   let celsius = (farenheit - 32) * (5/9);
   return celsius
} 

console.log(farenheitToCelsius(32));
console.log(farenheitToCelsius(100));