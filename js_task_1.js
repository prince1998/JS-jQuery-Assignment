
var inputString = "Thank you so much for contacting us. Dreamland guest relations. You're speaking with Ronaldo. May I have your name, please? Yes, sure. My name is robin soleimani. What is your phone number? It is 9876535362 as mentioned in the book Diary. Thank you so much for providing the info!";
var temporaryArray = [];
var finalArray = [];
var sentenceArray = inputString.split(" ");

for(var i = 0 ; i < sentenceArray.length ; i++)
{
    if(/^\d{10}$/.test(sentenceArray[i]))
    sentenceArray[i] = "XXXXXXXXXX";

    temporaryArray.push(sentenceArray[i])
    var chr = sentenceArray[i].charAt(sentenceArray[i].length-1);
    if( chr== '.' || chr == '?' || chr == '!'){
        if(temporaryArray.length > 3)
        finalArray.push(temporaryArray);
        temporaryArray = [];
    }
}
for(var i = 0 ; i < finalArray.length ; i++)
{
    sentence = String(i+1) + " ";
    for(var j = 0 ; j < finalArray[i].length ; j++)
    sentence = sentence + finalArray[i][j] + " ";
    console.log(sentence)
}