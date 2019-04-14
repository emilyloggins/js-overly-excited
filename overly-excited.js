let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

bang = "!"

function addExcitement(wordArray, punct, num) {
    let buildMeUp = "";
    
    for (let i = 0; i < wordArray.length; i++) {
        if ((i + 1) % 3 === 0){
            buildMeUp += `${wordArray[i]}` + punct.repeat(num) + " ";
        }
        else {
            buildMeUp += `${wordArray[i]} `;
        }
        console.log(buildMeUp);
    }
}

addExcitement(sentence, bang, 4);

