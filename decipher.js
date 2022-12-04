function digitalDecipher(eMssg, key){
    const alphabets = ['buffer','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    var keyString = key.toString();
    let output = [], word = []
    
    for(let i = 0; i < eMssg.length; i++){
        if(j === keyString.length){
            j = 0
        }
            output[i] = eMssg[i] - keyString[j]
            word[i] = alphabets[output[i]];
            j++
    }
    
    let txt = word.join("")
    console.log(txt);
}

digitalDecipher([20, 12, 18, 30, 21], 1939);
digitalDecipher([14, 30, 11, 1, 20, 17, 18, 18], 1990);
digitalDecipher([6, 4, 1, 3, 9, 20], 100);
