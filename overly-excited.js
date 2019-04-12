// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];


function addExcitement(wordArray) {
    let buildMeUp = "";
    
    for (let i = 0; i < wordArray.length; i++) {
        if ((i + 1) % 3 === 0){
            buildMeUp += `${wordArray[i]}` + "! ";
        }
        else {
            buildMeUp += `${wordArray[i]} `;
        }
        console.log(buildMeUp);
    }
}

addExcitement(sentence);
