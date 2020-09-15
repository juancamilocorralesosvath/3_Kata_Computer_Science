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